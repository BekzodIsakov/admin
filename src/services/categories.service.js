import { api } from './base.service';

class Categories {
  constructor(api) {
    this.api = api;
  }

  getCategories = () => this.api.get('/get-my-courses');
}

export const categoriesService = new Categories(api);
