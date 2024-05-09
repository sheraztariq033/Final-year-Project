import React from 'react';

// Define the SocialMediaLink component here
const SocialMediaLink = ({ name, url, icon }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 mx-2">
    <i className={`fab ${icon} fa-2x`} aria-hidden="true"></i>
  </a>
);

const SocialMediaLinks = ({ socialLinks }) => (
  <div className="bg-white shadow rounded-lg p-4 mb-6 flex justify-center">
    {socialLinks.map((link, index) => (
      <SocialMediaLink key={index} {...link} />
    ))}
  </div>
);

export default SocialMediaLinks;