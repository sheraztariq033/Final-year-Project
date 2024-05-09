import React from 'react';

const notifications = [
  {
    id: 1,
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    message: 'John Doe liked your post',
    time: '5m ago'
  },
  {
    id: 2,
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    message: 'Jane Smith commented on your article',
    time: '10m ago'
  },
  {
    id: 3,
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    message: 'Mark Johnson mentioned you in a comment',
    time: '15m ago'
  }
];

const Notification = ({ notification }) => {
  return (
    <div className="flex items-center py-4">
      <div className="flex-shrink-0">
        <img src={notification.avatar} alt="Avatar" className="h-12 w-12 rounded-full" />
      </div>
      <div className="ml-4">
        <div className="text-gray-800 font-semibold">{notification.message}</div>
        <div className="text-gray-600 text-sm">{notification.time}</div>
      </div>
    </div>
  );
};

const NotificationPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Notifications</h1>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="divide-y divide-gray-200">
            {notifications.map(notification => (
              <Notification key={notification.id} notification={notification} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
