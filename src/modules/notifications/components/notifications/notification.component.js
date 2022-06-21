import { useNotificationProps } from './notification.props';
import {
  NotificationContainer,
  NotificationDate,
  NotificationIconWrapper,
  NotificationItem,
  NotificationList,
  NotificationMessage,
  NotificationMessageBox,
  NotificationReadBtn,
  NotificationTitle
} from './notification.style';
import { hoc } from '@utils/hoc';
import { timeSince } from '@utils/date-format-time';
import icon from '@assets/img/icon-happy.svg';

export const NotificationsList = hoc(
  useNotificationProps,
  ({ notifications, handleMarkAsRead }) => {
    return (
      <NotificationContainer>
        <NotificationTitle>Bildirishnomalar</NotificationTitle>
        <NotificationList>
          {notifications.length > 0
            ? notifications.map(notification => (
                <NotificationItem key={notification?.id}>
                  <NotificationIconWrapper>
                    <img
                      src={icon}
                      alt={notification?.title}
                      width={24}
                      height={24}
                    />
                  </NotificationIconWrapper>
                  <NotificationMessageBox>
                    <NotificationMessage>
                      {notification.description}
                    </NotificationMessage>
                    <NotificationDate>
                      <time>
                        {timeSince(new Date(notification.created_at), 3)}
                      </time>{' '}
                    </NotificationDate>
                  </NotificationMessageBox>
                </NotificationItem>
              ))
            : 'Bildirishnomalar mavjud emas'}
        </NotificationList>

        {notifications.length !== 0 && (
          <NotificationReadBtn onClick={handleMarkAsRead}>
            O'qilgan qilib belgilash
          </NotificationReadBtn>
        )}
      </NotificationContainer>
    );
  }
);
