import { api } from '../../../services';

class NotificationService {
  constructor(api) {
    this.api = api;
  }

  getNotification = () => this.api.get('/news');
  notificationsMarkAsRead = payload =>
    this.api.patch('/patch-student-news', payload);
}

export const notificationService = new NotificationService(api);
