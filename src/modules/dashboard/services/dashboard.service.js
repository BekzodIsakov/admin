import { api } from '../../../services';

export class DashboardService {
  constructor(api) {
    this.api = api;
  }
}

export const dashboardService = new DashboardService(api);
