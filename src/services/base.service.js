import { config } from 'src/config';

export class BaseService {
  constructor(options = {}) {
    this._baseURL = options.baseURL || '';
    this._headers = options.headers || {};
  }

  _fetchJSON = async (endpoint, options = {}) => {
    const res = await fetch(this._baseURL + endpoint, {
      ...options,
      headers: this._headers
    });

    if (!res.ok) throw new Error(res.statusText);

    if (options.parseResponse !== false && res.status !== 204)
      return res.json();

    return undefined;
  };

  setBasicAuth = token => {
    this._headers.Authorization = `${token}`;
    return this;
  };

  setHeader = (key, value) => {
    this._headers[key] = value;
    return this;
  };

  get = (endpoint, options = {}) => {
    return this._fetchJSON(endpoint, {
      ...options,
      method: 'GET'
    });
  };

  post = (endpoint, body, options = {}) => {
    const isFormData = body instanceof FormData;
    return this._fetchJSON(endpoint, {
      ...options,
      body: isFormData ? body : JSON.stringify(body),
      method: 'POST'
    });
  };

  patch = (endpoint, body, options = {}) => {
    const isFormData = body instanceof FormData;
    return this._fetchJSON(endpoint, {
      ...options,
      body: isFormData ? body : JSON.stringify(body),
      method: 'PATCH'
    });
  };

  put = (endpoint, body, options = {}) => {
    const isFormData = body instanceof FormData;
    return this._fetchJSON(endpoint, {
      ...options,
      body: isFormData ? body : JSON.stringify(body),
      method: 'PUT'
    });
  };

  delete = (endpoint, body, options = {}) => {
    const isFormData = body instanceof FormData;
    return this._fetchJSON(endpoint, {
      parseResponse: false,
      ...options,
      body: isFormData ? body : JSON.stringify(body),
      method: 'DELETE'
    });
  };
}

export const api = new BaseService({
  baseURL: `${config.apiUrl}/v1`,
  headers: {
    'client-id': config.clientId
  }
});
