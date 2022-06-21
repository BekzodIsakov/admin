import { MainLayout } from '@components/layouts/main-layout/main-layout.component';
import { hoc } from '@utils/hoc';
import { NotificationsList } from '../../components/notifications/notification.component';

const useNotificationProps = () => {};

export const Notification = hoc(useNotificationProps, () => {
  return (
    <MainLayout rightSidebar={<div>Right sidebar</div>}>
      <NotificationsList />
    </MainLayout>
  );
});
