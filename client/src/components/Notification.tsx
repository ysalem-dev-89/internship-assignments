import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { clearError } from '../features/usersSlice';

export default function Notification({
  notification,
  setNotification
}: {
  notification: { message: string; isError: boolean };
  setNotification: React.Dispatch<
    React.SetStateAction<{ message: string; isError: boolean }>
  >;
}) {
  const dispatch = useDispatch<AppDispatch>();

  if (notification.message === '') {
    return null;
  }

  useEffect(() => {
    setTimeout(() => {
      setNotification({ ...notification, message: '' });
      dispatch(clearError());
    }, 3000);
  }, []);

  return notification.isError ? (
    <div className="text-white bg-danger py-2 px-3 me-auto rounded w-100">
      {notification.message}
    </div>
  ) : (
    <div className="text-white bg-success py-2 px-3 me-auto rounded w-100">
      {notification.message}
    </div>
  );
}
