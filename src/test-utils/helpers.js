import { render } from '@testing-library/react';
import React, { useRef } from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/Theme';
import { store } from '@store';
import { Formik } from 'formik';
import { VideoContext } from '@courses/routes/courses-single/course.context';
import { createMemoryHistory } from 'history';

const AllTheProviders = ({ children, formikValues = {} }) => {
  const videoRef = useRef();
  return (
    <BrowserRouter>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <Formik initialValues={formikValues}>
            <VideoContext.Provider value={videoRef}>
              {children}
            </VideoContext.Provider>
          </Formik>
        </ThemeProvider>
      </ReduxProvider>
    </BrowserRouter>
  );
};

export const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export const renderWithRouter = (
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history
  };
};
