import { useState } from "react";
import { Notification } from "../../components/notifs-data/notifs-data";

interface NotificationCardProps {
  notification: Notification;
  onMarkRead: (id: number, read: boolean) => void;
  onDelete: (id: number) => void;
}

const NotifsCard: React.FC<NotificationCardProps> = ({
  notification,
  onMarkRead,
  onDelete,
}) => {
  const [checked, setChecked] = useState(notification.read);
<<<<<<< HEAD
  
=======
>>>>>>> 4b9430a8d5cf49282e7070b35d4952e5a85ec17c

  const handleCheckedBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setChecked(checked);
    onMarkRead(notification.id, checked);
  };

  const handleDelete = () => {
    onDelete(notification.id);
  };

  const markAsRead = () => {
    onMarkRead(notification.id, true);
    setChecked(true);
  };

  return (
    <div className="border-4 flex justify-between p-1 mb-2">
      <div className="flex gap-1">
        <div>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheckedBox}
          />
        </div>
        <div>
          <h3> {notification.type} </h3>
          <p>{notification.message} </p>
        </div>
      </div>
      <div className="flex gap-2">
        {!checked && <button onClick={markAsRead}>Mark as read</button>}
        <button onClick={handleDelete}> Delete </button>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default NotifsCard;
=======
export default NotifsCard;
>>>>>>> 4b9430a8d5cf49282e7070b35d4952e5a85ec17c
