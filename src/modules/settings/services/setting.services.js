import { api } from '@services/base.service';

class SettingService {
  constructor(api) {
    this.api = api;
  }

  updateSetting = data => this.api.put('/update-student-self', data);
}

export const settingService = new SettingService(api);
