import { authService } from '@auth/services/auth.service';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { requestLogin } from './auth.saga';
import { authActions, authReducer } from './auth.slice';

const loginActionPayload = {
  phone: '+998998040226',
  callback: jest.fn()
};

it('testing will send message in login page', () => {
  return expectSaga(requestLogin, authActions.login(loginActionPayload))
    .withReducer(authReducer)
    .provide([matchers.call.fn(authService.sendCode, loginActionPayload.phone)])
    .run();
});
