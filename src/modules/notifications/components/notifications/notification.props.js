import { notificationAction } from '@notifications/store/notification.slice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useNotificationProps = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(state => state.notifications.notifications);

  const handleMarkAsRead = () => {
    dispatch(
      notificationAction.notificationsMarkAsRead({
        data: notifications.map(item => item.id),
        callback: () => {
          dispatch(notificationAction.fetchNotification());
        }
      })
    );
  };

  useEffect(() => {
    dispatch(notificationAction.fetchNotification());
  }, [dispatch]);

  return {
    notifications,
    handleMarkAsRead
  };
};
