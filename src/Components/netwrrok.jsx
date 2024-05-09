import React, { useState } from 'react';

const Profile = ({ type, name, description, photo, profileLink }) => {
  // Truncate description to 100 characters
  const truncatedDescription = description.length > 100 ? description.slice(0, 100) + '...' : description;

  return (
    <div className="bg-gray-200 p-4 rounded-lg flex flex-col items-center">
      <a href={profileLink} className="block mb-2">
        <img src={photo} alt={name} className="w-24 h-24 rounded-full object-cover" />
      </a>
      <div className="text-center">
        <a href={profileLink} className="font-semibold text-blue-600 hover:underline">{name}</a>
        <p>{truncatedDescription}</p>
        <a href={profileLink} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 inline-block">
          View Profile
        </a>
      </div>
    </div>
  );
};

const NetworkPage = () => {
  const profiles = [
    {
      id: 1,
      type: 'NGO',
      name: 'ABC Foundation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et suscipit est.',
      photo: 'https://via.placeholder.com/400x250',
      profileLink: 'https://example.com/profile/1'
    },
    {
      id: 2,
      type: 'Volunteer',
      name: 'John Doe',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      photo: 'https://via.placeholder.com/400x250',
      profileLink: 'https://example.com/profile/2'
    },
    {
      id: 3,
      type: 'Education Institution',
      name: 'XYZ School',
      description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
      photo: 'https://via.placeholder.com/400x250',
      profileLink: 'https://example.com/profile/3'
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Network</h1>
      <div className="mb-4">
        <input
          type="text"
          className="border border-gray-400 rounded-lg py-2 px-4 w-full"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProfiles.map(profile => (
          <Profile key={profile.id} {...profile} />
        ))}
      </div>
    </div>
  );
};

export default NetworkPage;
