import { useState } from "react";
import NotifsCard from "../../components/notifs-card/notifs-card";
import { notifsTest } from "../../components/notifs-data/notifs-data";

const NotificationPage = () => {
  const [notifications, setNotifications] = useState(notifsTest);
  const [showRead, setShowRead] = useState(true);

  const handleRead = (id: number, read: boolean) => {
    const updateNotifs = notifications.map((notification) => {
      if (notification.id === id) {
        return { ...notification, read };
      }
      return notification;
    });
    setNotifications(updateNotifs);
  };

  const filteredNotifs = showRead
    ? notifications.filter((notification) => notification.read)
    : notifications;

  const deleteNotification = (id: number) => {
    const updateNotifs = notifications.filter(
      (notification) => notification.id !== id
    );
    setNotifications(updateNotifs);
  };

  return (
    <div>
      <h1>NotificationPage</h1>
      <div className="flex gap-2">
        <button onClick={() => setShowRead(false)}>All</button>
        <button onClick={() => setShowRead(true)}>Read</button>
      </div>
      <div>
        {filteredNotifs.map((notification) => (
          <NotifsCard
            key={notification.id}
            notification={notification}
            onMarkRead={handleRead}
            onDelete={deleteNotification}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;
