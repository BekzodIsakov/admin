import { storageService } from './storage.service';
import { api } from './base.service';

class CommonService {
  constructor(api, storageService) {
    this.api = api;
    this.storageService = storageService;
  }

  getProfile = () => {
    if (!this.storageService.getAccessToken()) {
      return Promise.reject(new Error('Unauthorized'));
    }
    return this.api.get('/student');
  };
}

export const commonService = new CommonService(api, storageService);
