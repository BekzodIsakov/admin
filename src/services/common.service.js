import { storageService } from './storage.service';
import { api } from './base.service';

class CommonService {
  constructor(api, storageService) {
    this.api = api;
    this.storageService = storageService;
  }

  getLatestNews = () => this.api.get('/post-latest');

  recommendedCourses = () => this.api.get('/recomended-course');

  getProfile = () => {
    if (!this.storageService.getAccessToken()) {
      return Promise.reject(new Error('Unauthorized'));
    }
    return this.api.get('/student');
  };

  promoCourses = () => this.api.get('/promo');

  uploadFile = (folder, data) => this.api.post('/upload/' + folder, data);
}

export const commonService = new CommonService(api, storageService);
