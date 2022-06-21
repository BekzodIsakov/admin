import { api } from '../../../services';

export class DashboardService {
  constructor(api) {
    this.api = api;
  }

  getLastWatchedVideo = () => this.api.get('/get-latest-video');
  getCertificates = () => this.api.get('/certificate');
  getTaskStatistics = () => this.api.get('/homework-statistics');
  downloadCertificate = course_id =>
    this.api.get(`/generate-certificate/${course_id}`);
}

export const dashboardService = new DashboardService(api);
