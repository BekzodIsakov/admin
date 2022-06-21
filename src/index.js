import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app.component';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { ErrorBoundary } from '@components/error-boundary';
import { theme } from './styles';
import './styles/index.css';
import fetchIntercept from 'fetch-intercept';
import { storageService } from './services/storage.service';
import { authActions } from '@auth/store/auth.slice';
import { commonActions } from './store/common/common.slice';
import { version } from './config';

const versionInStorage = storageService.getVersion();

if (versionInStorage !== version) {
  storageService.clear();
  storageService.setVersion(version);
}

fetchIntercept.register({
  request: function (url, config) {
    if (config?.headers)
      config.headers.Authorization = storageService.getAccessToken();
    return [url, config];
  },

  requestError: function (error) {
    // Called when an error occurred during another 'request' interceptor call
    return Promise.reject(error);
  },

  response: async res => {
    if (res.status === 401) {
      storageService.removeRefreshToken();
      storageService.removeAccessToken();
      storageService.deleteCookie('shared_token');
      store.dispatch(authActions.logout());
      store.dispatch(commonActions.removeProfile());
      store.dispatch(
        commonActions.fetchCategoriesFulfilled({
          categories: [],
          courses: []
        })
      );
      // history.push('/login');
    }
    if (!res.ok) {
      const error = new Error('Ooops! Something went wrong!');
      error.status = res.status;
      error.body = await res.json();
      throw error;
    }
    return res;
  },

  responseError: function (error) {
    // Handle an fetch error
    return Promise.reject(error);
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <ReduxProvider store={store}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <App />
          </ThemeProvider>
        </ReduxProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

// serviceWorkerRegistration.register();
