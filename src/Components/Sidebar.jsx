// Sidebar.jsx

import React from 'react';

const events = [
  {
    id: 1,
    name: 'Event 1',
    date: '2024-03-05',
    banner: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Event 2',
    date: '2024-03-10',
    banner: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Event 3',
    date: '2024-03-15',
    banner: 'https://via.placeholder.com/150',
  },
];

const Sidebar = () => {
  return (
    <div className="bg-gray-200 p-4">
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Latest Added Events</h2>
        {events.map((event) => (
          <div key={event.id} className="flex items-center mb-4">
            <img src={event.banner} alt={event.name} className="w-16 h-16 mr-2" />
            <div>
              <p className="font-semibold">{event.name}</p>
              <p className="text-gray-600">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Top Events</h2>
        {events.map((event) => (
          <div key={event.id} className="flex items-center mb-4">
            <img src={event.banner} alt={event.name} className="w-16 h-16 mr-2" />
            <div>
              <p className="font-semibold">{event.name}</p>
              <p className="text-gray-600">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
