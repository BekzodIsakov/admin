import { api } from '../../../services';

class BannerService {
  constructor(api) {
    this.api = api;
  }

  getActiveBanner = () => this.api.get('/v1/active-banner');
}

export const bannerService = new BannerService(api);
