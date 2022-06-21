import { MainLayout } from '@components/layouts/main-layout';
import { hoc } from '@utils/hoc';

import { SettingsContainer } from './settings.styles';
import { SettingsForm } from './components/settings-form/settings-form.component';
import { useEffect } from 'react';

const useSettingsProps = () => {};

export const Settings = hoc(
  useSettingsProps,
  () => {
    useEffect(() => {
      return () => console.log('unmount settings');
    }, []);
    return (
      <MainLayout>
        <SettingsContainer>
          <SettingsForm />
        </SettingsContainer>
      </MainLayout>
    );
  },
  'Settings'
);
