import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUser, faClock, faUsers, faHeart } from '@fortawesome/free-solid-svg-icons';

// Define OtherEvent component
const OtherEvent = ({ eventName, date }) => {
  return (
    <div className="flex items-center mb-4">
      {/* Event Cover Photo */}
      <img
        src="https://via.placeholder.com/150"
        alt="Event Cover"
        className="w-16 h-16 rounded-md mr-4"
      />
      {/* Event Details */}
      <div>
        <p className="font-semibold">{eventName}</p>
        <p className="text-gray-600">{date}</p>
      </div>
    </div>
  );
};

// Sidebar component
const Sidebar = () => {
    // Sample data for other events
    const otherEvents = [
      { eventName: "Event 1", date: "March 10, 2024" },
      { eventName: "Event 2", date: "March 15, 2024" },
      { eventName: "Event 3", date: "March 20, 2024" },
      { eventName: "Event 4", date: "March 25, 2024" },
    ];
  
    // Sample data for recent events
    const recentEvents = [
      { eventName: "Recent Event 1", date: "March 5, 2024" },
      { eventName: "Recent Event 2", date: "March 8, 2024" },
    ];
  
    return (
      <div className="hidden lg:block bg-gray-200 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Other Events</h2>
        {/* Display other events */}
        {otherEvents.map((event, index) => (
          <OtherEvent key={index} eventName={event.eventName} date={event.date} />
        ))}
        {/* Recent Events */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Recent Events</h2>
          {recentEvents.map((event, index) => (
            <OtherEvent key={index} eventName={event.eventName} date={event.date} />
          ))}
        </div>
        {/* Advertisement */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">Advertisement</p>
          {/* Add your advertisement here */}
        </div>
      </div>
    );
  };
  

// EventCard component
function EventCard({ name, location, organizer, duration, attendees, bannerImage }) {
  return (
    <div className="bg-white rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-3 mb-6">
      <img src={bannerImage} alt={name} className="rounded-t-lg w-full" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{name}</h2>
        <p className="flex items-center text-gray-700 mb-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 mr-2" />
          {location}
        </p>
        <p className="flex items-center text-gray-700 mb-2">
          <FontAwesomeIcon icon={faUser} className="w-4 h-4 mr-2" />
          {organizer}
        </p>
        <p className="flex items-center text-gray-700 mb-2">
          <FontAwesomeIcon icon={faClock} className="w-4 h-4 mr-2" />
          {duration}
        </p>
        <p className="flex items-center text-gray-700 mb-2">
          <FontAwesomeIcon icon={faUsers} className="w-4 h-4 mr-2" />
          Total Attendees: {attendees}
        </p>
        <div className="flex justify-between">
          <button className="bg-transparent hover:bg-transparent text-gray-700 font-bold py-2 px-4 rounded" onClick={() => toggleHeart()}>
            <FontAwesomeIcon icon={faHeart} className="w-6 h-6 heart" />
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Join Now</button>
        </div>
      </div>
    </div>
  );
}

// EventListingPage component
function EventListingPage() {
  // State to track the number of attendees
  const [attendeesApplied, setAttendeesApplied] = useState(50);
  const attendeesRequired = 100;

  // Function to handle joining the event
  const handleJoinEvent = () => {
    // Increment the number of attendees when someone joins the event
    setAttendeesApplied(attendeesApplied + 1);
  };

  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal flex flex-wrap">
      {/* Event Card Section */}
      <div className="flex flex-wrap justify-start w-full lg:w-3/4">
        <EventCard
          name="Event Name 1"
          location="Place Event Would be Held 1"
          organizer="Organizer Name 1"
          duration="2 Hours"
          attendees={50}
          bannerImage="https://via.placeholder.com/500x300"
        />
        <EventCard
          name="Event Name 2"
          location="Place Event Would be Held 2"
          organizer="Organizer Name 2"
          duration="1 Hour"
          attendees={30}
          bannerImage="https://via.placeholder.com/500x300"
        />
        <EventCard
          name="Event Name 3"
          location="Place Event Would be Held 3"
          organizer="Organizer Name 3"
          duration="3 Hours"
          attendees={70}
          bannerImage="https://via.placeholder.com/500x300"
        />
          <EventCard
          name="Event Name 3"
          location="Place Event Would be Held 3"
          organizer="Organizer Name 3"
          duration="3 Hours"
          attendees={70}
          bannerImage="https://via.placeholder.com/500x300"
        />
            <EventCard
          name="Event Name 3"
          location="Place Event Would be Held 3"
          organizer="Organizer Name 3"
          duration="3 Hours"
          attendees={70}
          bannerImage="https://via.placeholder.com/500x300"
        />
        {/* Add more EventCard components here */}
      </div>
      {/* Sidebar */}
      <div className="lg:w-1/4 lg:pl-0 mt-8 lg:mt-0">
        <Sidebar />
      </div>
    </div>
  );
}

// Function to handle toggling heart icon
function toggleHeart() {
  // Implementation for toggling heart icon
  console.log("Heart toggled");
}

export default EventListingPage;
