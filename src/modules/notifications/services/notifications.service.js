import { api } from '../../../services';

class NotificationService {
  constructor(api) {
    this.api = api;
  }
}

export const notificationService = new NotificationService(api);
