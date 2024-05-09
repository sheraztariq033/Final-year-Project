import React, { useState } from "react";

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
    <div className="bg-gray-200 p-4 rounded-lg">
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

const EventPage = () => {
  // State to track the number of attendees
  const [attendeesApplied, setAttendeesApplied] = useState(50);
  const attendeesRequired = 100;

  // Function to handle joining the event
  const handleJoinEvent = () => {
    // Increment the number of attendees when someone joins the event
    setAttendeesApplied(attendeesApplied + 1);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 font-sans">
      <div className="flex flex-wrap justify-center lg:justify-start">
        {/* Event Details */}
        <div className="lg:w-3/4 pr-8"> {/* Add right padding */}
          {/* Event Name */}
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Event Name</h1>

          {/* Organizer and Date/Time */}
          <div className="flex items-center mb-4">
            <svg
              className="w-8 h-8 mr-2 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
            <p className="text-xl font-semibold text-gray-700">Organized by: Organizer Name</p>
          </div>
          <div className="flex items-center mb-4">
            <svg
              className="w-8 h-8 mr-2 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p className="text-xl font-semibold text-gray-700">Date and Time: Tuesday, Feb 3, 2024 9:00 AM PST</p>
          </div>
          <div className="flex items-center mb-8">
            <svg
              className="w-8 h-8 mr-2 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 9v6m0 0v6m0-6h12m-12 0h12m-6-6v6"
              />
            </svg>
            <p className="text-xl font-semibold text-gray-700">Attendees Required: {attendeesRequired}</p>
          </div>

          {/* Event Banner */}
          <img
            src="https://via.placeholder.com/1200x400"
            alt="Event Banner"
            className="mt-8 rounded-lg w-full"
          />

          {/* Event Description */}
          <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Event Description</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
              ligula non felis dictum, vitae placerat neque commodo. In hac
              habitasse platea dictumst. Maecenas sed nisl arcu. Cras at diam nec
              orci suscipit viverra nec eget ligula. Mauris nec ex vel ipsum
              commodo cursus. Mauris nec magna pharetra, feugiat tortor a,
              malesuada velit. Cras tincidunt commodo felis sit amet elementum.
              Donec vestibulum lacus id odio lacinia mollis. Aliquam ullamcorper
              suscipit orci, vel laoreet leo congue non. Cras malesuada quam a
              sapien dapibus, id fringilla eros posuere. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Duis pharetra orci vel diam commodo congue. Donec nec
              tempor purus, et posuere libero. Vivamus vestibulum tincidunt lorem,
              sed fringilla metus tempor a. Nam tincidunt dui quam, eget finibus
              sapien mollis vel.
            </p>
          </div>

          {/* Location Map */}
          <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Location</h2>
            <div className="relative w-full h-80">
              {/* Embedded Map */}
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.8423339968496!2d-122.41318618488993!3d37.774929979753156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f96ed221b%3A0x7f383d00d772d8c4!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1636013590743!5m2!1sen!2sus"
                allowFullScreen
                title="Location Map"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Certification */}
          <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Certification by</h2>
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Organizer Signature"
                className="w-24 h-24 rounded-full mr-4"
              />
              <p>Organizer</p>
            </div>
          </div>

          {/* Reward Section */}
          <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Rewards</h2>
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 mr-2 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <p className="text-xl font-semibold text-gray-700">Certificate of Attendance</p>
            </div>
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 mr-2 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.36 6.64a9 9 0 001.14 10.32m-1.14-10.32a9 9 0 01-1.14 10.32M12 2v4m0 0V2m0 4h-4m4 0h4"
                />
              </svg>
              <p className="text-xl font-semibold text-gray-700">2 Badge</p>
            </div>
            <div className="flex items-center">
              <svg
                className="w-8 h-8 mr-2 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <p className="text-xl font-semibold text-gray-700">4 Credit Hours Added to Profile</p>
            </div>
          </div>

          {/* Sample Certificate */}
          <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Sample Certificate</h2>
            <img
              src="https://via.placeholder.com/600x200"
              alt="Sample Certificate"
              className="w-full"
            />
          </div>

          {/* Join Event Button */}
          <div className="flex justify-center mt-8">
            <button onClick={handleJoinEvent} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg">
              Join Now
            </button>
          </div>
        </div>

       {/* Sidebar */}
<div className="lg:w-1/4 lg:pl-0 mt-8 lg:mt-0"> {/* Adjust the padding value here */}
  <Sidebar />

        </div>
      </div>
    </div>
  );
};

export default EventPage;
