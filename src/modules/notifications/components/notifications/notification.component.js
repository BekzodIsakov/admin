import { useNotificationProps } from './notification.props';
import { NotificationContainer } from './notification.style';
import { hoc } from '@utils/hoc';

export const NotificationsList = hoc(useNotificationProps, () => {
  return <NotificationContainer>Notifications</NotificationContainer>;
});
