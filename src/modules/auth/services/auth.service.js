import { api } from '../../../services';

export class AuthService {
  constructor(api) {
    this.api = api;
  }

  logout = tokenId => this.api.post('/auth/logout', { token_id: tokenId });

  sendCode = phone =>
    this.api.post('/auth/otp/generate/student', {
      phone
    });
  /**
   * Confirm auth code
   * @param {Object} data - Confirm request data
   * @param {string} data.code - Secret code sended phone
   * @param {string} data.device - Device
   * @param {string} data.phone - Code sended phone
   * @param {string} data.secret - Secret
   */
  confirmCode = data => this.api.post('/auth/otp/confirm/student', data);
  /**
   * Confirm auth code
   * @param {Object} data - Confirm request data
   * @param {string} data.code - Secret code sended phone
   * @param {string} data.device - Device
   * @param {string} data.name - User name
   * @param {string} data.phone - Code sended phone
   * @param {string} data.secret - Secret
   */
  register = data => this.api.post('/auth/register/student', data);

  refreshTokens = (refreshToken) => this.api.post('/auth/token/refresh', { refresh_token: refreshToken })
}

export const authService = new AuthService(api);
