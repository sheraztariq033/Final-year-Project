import React, { useState } from "react";
import ReviewPage from "./ReviewPage";

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    fullName: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    location: "City, State",
    bio: "Software Developer\nExcellent communication and teamwork skills..",
    education: [
      {
        university: "Another University",
        major: "Volunteer Management",
        academicYear: "Graduate",
      },
    ],
    stats: {
      CSPRsCompleted: 108,
      eventsAttended: 27,
      badgesObtained: 10,
      certificationsObtained: 5,
    },
    skillsAndInterests: [
      "Teaching", "Event Planning", "Fundraising", "Public Speaking", "Social Media",
      "Arab", "Jhahsh", "Jhshjhjsdhashahd", "Jdshsdhsdhsdsdhlssdh"
    ],
    experience: [
      {
        organization: "HR Manager",
        role: "Heights studio",
        duration: "Jan 2013 - Present",
        location: "ISLAMABAD"
      },
    ],
    achievements: ["Volunteer of the Year 2020"],
    volunteerActivities: [
      {
        name: "Community Cleanup Day",
        date: "January 15, 2023",
        description: "Helped clean up local parks and streets.",
      },
    ],
    hoursLogged: 500,
    certifications: [
      {
        title: "First Aid Certification",
        image: "https://via.placeholder.com/500x300",
      },
    ],
    badges: [
      {
        title: "Community Engagement Badge",
        image: "https://via.placeholder.com/500x300",
      },
    ],
    feedbackAndReviews: [
      {
        rating: 5,
        comment: "Ali done it as need and was very good in doing it so.",
        photo: "https://via.placeholder.com/150",
        organizerName: "shokat khanam 1"
      },
    ],
    socialMediaLinks: {
      linkedIn: "https://www.linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
    },
  });

  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [showAllAbout, setShowAllAbout] = useState(false);
  const [showAllEducation, setShowAllEducation] = useState(false);
  const [showAllExperience, setShowAllExperience] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [showAllVolunteerActivities, setShowAllVolunteerActivities] = useState(false);

  const openFullscreenImage = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreenImage = () => {
    setFullscreenImage(null);
  };

  const toggleAbout = () => {
    setShowAllAbout(!showAllAbout);
  };

  const toggleEducation = () => {
    setShowAllEducation(!showAllEducation);
  };

  const toggleExperience = () => {
    setShowAllExperience(!showAllExperience);
  };

  const toggleSkills = () => {
    setShowAllSkills(!showAllSkills);
  };

  const toggleVolunteerActivities = () => {
    setShowAllVolunteerActivities(!showAllVolunteerActivities);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between">
        <div className="w-3/4">
          <div className="max-w-3xl mx-auto bg-white shadow-lg p-6 rounded-lg">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">{profileData.fullName}</h1>
                <p className="text-gray-600">{profileData.location}</p>
              </div>
              <img
                src="placeholder.jpg" // Placeholder for profile picture
                alt="Profile Picture"
                className="rounded-full h-24 w-24 cursor-pointer"
                onClick={() => openFullscreenImage(profileData.profilePhoto)}
              />
            </div>
            {/* Stats Section */}
            <div className="border-t border-gray-300 py-4">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Profile Stats</h2>
              <div className="flex items-center text-gray-700">
                <div className="flex flex-col items-center justify-center bg-gray-200 rounded-md p-2 mr-4">
                  <p className="font-bold text-lg">{profileData.stats.CSPRsCompleted}</p>
                  <p>CSPRs Completed</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-200 rounded-md p-2 mr-4">
                  <p className="font-bold text-lg">{profileData.stats.eventsAttended}</p>
                  <p>Events Attended</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-200 rounded-md p-2 mr-4">
                  <p className="font-bold text-lg">{profileData.stats.badgesObtained}</p>
                  <p>Badges Obtained</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-200 rounded-md p-2 mr-4">
                  <p className="font-bold text-lg">{profileData.stats.certificationsObtained}</p>
                  <p>Certifications Obtained</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-200 rounded-md p-2 mr-4">
                  <p className="font-bold text-lg">{(profileData.stats.eventsAttended * 4.7).toFixed(1)}/5</p>
                  <p>Total Rating ({profileData.stats.eventsAttended} events)</p>
                </div>
              </div>
            </div>
            {/* About section */}
            <div className="border-t border-gray-300 py-4">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">About</h2>
              {profileData.bio.split('\n').map((line, index) => (
                <p key={index} className="text-gray-700">{line}</p>
              ))}
              {profileData.bio.split('\n').length > 5 && (
                <button
                  className="mt-2 text-blue-600"
                  onClick={toggleAbout}
                >
                  {showAllAbout ? 'Hide' : 'See All'}
                </button>
              )}
            </div>
            {/* Education section */}
            <div className="border-t border-gray-300 py-4">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Education</h2>
              {profileData.education.slice(0, showAllEducation ? profileData.education.length : 2).map((edu, index) => (
                <div key={index} className="mb-2">
                  <p className="text-gray-700">
                    <span className="font-bold">{edu.university}</span><br />
                    {edu.major}<br />
                    {edu.academicYear}
                  </p>
                </div>
              ))}
              {profileData.education.length > 2 &&
                <button
                  className="mt-2 text-blue-600"
                  onClick={toggleEducation}
                >
                  {showAllEducation ? 'Hide' : 'See All'}
                </button>
              }
            </div>
            {/* Experience section */}
            <div className="border-t border-gray-300 py-4">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Experience</h2>
              {profileData.experience.slice(0, showAllExperience ? profileData.experience.length : 1).map((exp, index) => (
                <div key={index} className="mb-2">
                  <p className="text-gray-700">
                    <span className="font-bold">{exp.role}</span><br />
                    {exp.organization} {exp.fullTime && <span className="text-sm">(Full-time)</span>}<br />
                    {exp.duration} · {exp.location}
                  </p>
                </div>
              ))}
              {profileData.experience.length > 1 &&
                <button
                  className="mt-2 text-blue-600"
                  onClick={toggleExperience}
                >
                  {showAllExperience ? 'Hide' : 'See All'}
                </button>
              }
            </div>
            {/* Skills & Interests section */}
            <div className="border-t border-gray-300 py-4">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Skills & Interests</h2>
              <ul className="flex flex-wrap gap-2">
                {profileData.skillsAndInterests.slice(0, showAllSkills ? profileData.skillsAndInterests.length : 10).map((skill, index) => (
                  <li key={index} className="bg-gray-200 px-2 py-1 rounded">
                    {skill}
                  </li>
                ))}
              </ul>
              {profileData.skillsAndInterests.length > 10 &&
                <button
                  className="mt-2 text-blue-600"
                  onClick={toggleSkills}
                >
                  {showAllSkills ? 'Hide' : 'See All'}
                </button>
              }
            </div>
            {/* Volunteer Activities section */}
            <div className="border-t border-gray-300 py-4">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Volunteer Activities</h2>
              {profileData.volunteerActivities.slice(0, showAllVolunteerActivities ? profileData.volunteerActivities.length : 2).map((activity, index) => (
                <div key={index} className="mb-2">
                  <p className="text-gray-700">
                    <span className="font-bold">Name:</span> {activity.name}, <span className="font-bold">Date:</span> {activity.date}<br />
                    <span className="font-bold">Description:</span> {activity.description}
                  </p>
                </div>
              ))}
              {profileData.volunteerActivities.length > 2 &&
                <button
                  className="mt-2 text-blue-600"
                  onClick={toggleVolunteerActivities}
                >
                  {showAllVolunteerActivities ? 'Hide' : 'See All'}
                </button>
              }
            </div>
            {/* Certifications section */}
            <div className="border-t border-gray-300 py-4">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Certifications</h2>
              <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {profileData.certifications.slice(0, 3).map((certification, index) => (
                  <div
                    key={index}
                    className="relative flex-shrink-0 mr-4"
                    onClick={() => openFullscreenImage(certification.image)}
                  >
                    <img
                      src={certification.image}
                      alt={certification.title}
                      className="w-80 h-60 object-cover rounded-lg cursor-pointer"
                    />
                    <p className="text-gray-700 mt-2">{certification.title}</p>
                  </div>
                ))}
              </div>
              {profileData.certifications.length > 3 &&
                <button
                  className="mt-2 text-blue-600"
                  onClick={() => {
                    // Add functionality to view all certifications
                  }}
                >
                  See All Certifications
                </button>
              }
            </div>
            {/* Badges section */}
            <div className="border-t border-gray-300 py-4">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Badges</h2>
              <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {profileData.badges.slice(0, 4).map((badge, index) => (
                  <div
                    key={index}
                    className="relative flex-shrink-0 mr-4"
                    onClick={() => openFullscreenImage(badge.image)}
                  >
                    <img
                      src={badge.image}
                      alt={badge.title}
                      className="w-48 h-32 object-cover rounded-lg cursor-pointer"
                    />
                    <p className="text-gray-700 mt-2">{badge.title}</p>
                  </div>
                ))}
              </div>
              {profileData.badges.length > 4 &&
                <button
                  className="mt-2 text-blue-600"
                  onClick={() => {
                    // Add functionality to view all badges
                  }}
                >
                  See All Badges
                </button>
              }
            </div>
            {/* Feedback & Reviews section */}
            <ReviewPage feedbackAndReviews={profileData.feedbackAndReviews} />
            {/* Social Media Links section */}
            <div className="border-t border-gray-300 py-4">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Social Media Links</h2>
              <div className="flex space-x-4">
                <a
                  href={profileData.socialMediaLinks.linkedIn}
                  className="text-gray-700 hover:text-blue-500"
                >
                  LinkedIn
                </a>
                <a
                  href={profileData.socialMediaLinks.twitter}
                  className="text-gray-700 hover:text-blue-500"
                >
                  Twitter
                </a>
              </div>
            </div>
            {/* Add Call to Action button */}
          </div>
        </div>
        
        <div className="w-1/4 ml-8">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">People You May Know</h2>
            {/* Sample People You May Know Section */}
            {/* Sample Person 1 */}
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Profile"
                className="rounded-full h-12 w-12 mr-4"
              />
              <div>
                <p className="font-semibold">Person 1</p>
                <p className="text-sm text-gray-600">Description less than 10 words</p>
              </div>
              <button className="ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600 hover:text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            {/* Sample Person 2 */}
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Profile"
                className="rounded-full h-12 w-12 mr-4"
              />
              <div>
                <p className="font-semibold">Person 2</p>
                <p className="text-sm text-gray-600">Description less than 10 words</p>
              </div>
              <button className="ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600 hover:text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            {/* See All Button */}
            <button className="text-blue-600 mt-4 ml-auto block">
              See All
            </button>
          </div>
          <div className="mt-8 bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Organizations You May Know</h2>
            {/* Sample Organizations You May Know Section */}
            {/* Sample Organization 1 */}
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Organization"
                className="rounded-full h-12 w-12 mr-4"
              />
              <div>
                <p className="font-semibold">Organization 1</p>
                <p className="text-sm text-gray-600">Description less than 10 words</p>
              </div>
              <button className="ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600 hover:text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            {/* Sample Organization 2 */}
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Organization"
                className="rounded-full h-12 w-12 mr-4"
              />
              <div>
                <p className="font-semibold">Organization 2</p>
                <p className="text-sm text-gray-600">Description less than 10 words</p>
              </div>
              <button className="ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600 hover:text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            {/* See All Button */}
            <button className="text-blue-600 mt-4 ml-auto block">
              See All
            </button>
          </div>
        </div>
      </div>
      {fullscreenImage && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <img
              src={fullscreenImage}
              alt="Fullscreen"
              className="max-h-full max-w-full"
              onClick={closeFullscreenImage}
            />
            <button
              className="absolute top-4 right-4 text-white text-xl"
              onClick={closeFullscreenImage}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
