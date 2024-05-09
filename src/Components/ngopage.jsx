















import React, { useState, useEffect } from 'react';
import ReviewPage from './ReviewPageNgo';

const ProfilePage = () => {
    const [profileData, setProfileData] = useState({
        fullName: "AL khidmat Fondation",

        location: "Lahore, Pakistan",
        weblink: "www.abc.com",
        email: "william.henry.harrison@example-pet-store.com",
        phone: "0333-3333333",
        bio: "Software Developer with 10+ years of experience in a variety of industries. Proven ability to design, develop, and deliver high-quality software solutions. Expertise in a wide range of technologies, including Mern stack , react native , Flutter , AWS ,.NET much more. Strong problem-solving and analytical areass. Excellent communication and teamwork areass..",
        partnershipsAndCollaborations: [
            {
                photo: "https://via.placeholder.com/200",
                organization: "Organization 1",
                link: "https://example.com/organization1",
                linkText: "Learn More"
            },
            {
                photo: "https://via.placeholder.com/200",
                organization: "Organization 2",
                link: "https://example.com/organization2",
                linkText: "Learn More"
            },
            {
                photo: "https://via.placeholder.com/200",
                organization: "Organization 1",
                link: "https://example.com/organization1",
                linkText: "Learn More"
            },
            {
                photo: "https://via.placeholder.com/200",
                organization: "Organization 2",
                link: "https://example.com/organization2",
                linkText: "Learn More"
            },
            {
                photo: "https://via.placeholder.com/200",
                organization: "Organization 3",
                link: "https://example.com/organization3",
                linkText: "Learn More"
            },

            // Add more partnerships and collaborations as needed
        ],
        // Remaining data properties remain unchanged


        stats: {
            CSPRsCompleted: 108,
            eventsOrganized: 27,
            Participants: 10,
            Awards: 5,
        },
        areasOfFocus: [
            "Teaching", "Event Planning", "Fundraising", "Public Speaking", "Social Media",
            "Arab", "Jhahsh", "Jhshjhjsdhashahd", "Jdshsdhsdhsdsdhlssdh"
        ],

        teamMembers: [
            {
                name: "Team Member 1",
                role: "Role 1",
                photo: "https://via.placeholder.com/200",
                link: "https://example.com/member1"
            },
            {
                name: "Team Member 2",
                role: "Role 2",
                photo: "https://via.placeholder.com/200",
                link: "https://example.com/member2"
            },
            {
                name: "Team Member 3",
                role: "Role 3",
                photo: "https://via.placeholder.com/200",
                link: "https://example.com/member3"
            },
            {
                name: "Team Member 4",
                role: "Role 4",
                photo: "https://via.placeholder.com/200",
                link: "https://example.com/member4"
            },
            // Add more team members as needed
        ],



        achievements: ["Volunteer of the Year 2020"],
        organizationActivities: [
            {
                name: "Community Cleanup Day",
                date: "January 15, 2023",
                description: "Helped clean up local parks and streets.",
                link: "https://example.com/community-cleanup-day"
            },
            {
                name: "Another Activity",
                date: "February 20, 2023",
                description: "Description of another activity.",
                link: "https://example.com/another-activity"
            },
            {
                name: "Community Cleanup Day",
                date: "January 15, 2023",
                description: "Helped clean up local parks and streets.",
                link: "https://example.com/community-cleanup-day"
            },
            {
                name: "Another Activity",
                date: "February 20, 2023",
                description: "Description of another activity.",
                link: "https://example.com/another-activity"
            },
            // Add more activities with their respective links
        ],

        hoursLogged: 500,
        awardsss: [
            {
                title: "First Aid Certification",
                image: "https://via.placeholder.com/500x300",
            },
            {
                title: "First Aid Certification",
                image: "https://via.placeholder.com/500x300",
            },
            {
                title: "First Aid Certification",
                image: "https://via.placeholder.com/500x300",
            },
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
            {
                title: "Community Engagement Badge",
                image: "https://via.placeholder.com/500x300",
            },
            {
                title: "Community Engagement Badge",
                image: "https://via.placeholder.com/500x300",
            },
            {
                title: "Community Engagement Badge",
                image: "https://via.placeholder.com/500x300",
            },
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
                personName: "shokat khanam 1"
            },
            {
                rating: 5,
                comment: "Ali done it as need and was very good in doing it so.",
                photo: "https://via.placeholder.com/150",
                personName: "shokat khanam 1"
            },
            {
                rating: 2,
                comment: "Ali done it as need and was very good in doing it so.",
                photo: "https://via.placeholder.com/150",
                personName: "shokat khanam 1"
            },
            {
                rating: 1,
                comment: "Ali done it as need and was very good in doing it so.",
                photo: "https://via.placeholder.com/150",
                personName: "shokat khanam 1"
            },
            {
                rating: 4,
                comment: "Ali done it as need and was very good in doing it so.",
                photo: "https://via.placeholder.com/150",
                personName: "shokat khanam 1"
            },
        ],
        socialMediaLinks: {
            linkedIn: "https://www.linkedin.com/in/johndoe",
            twitter: "https://twitter.com/johndoe",
        },
    });
    const organizations = [
        { name: "Organization 1", description: "Description less than 10 words", image: "https://via.placeholder.com/50" },
        { name: "Organization 2", description: "Description less than 10 words", image: "https://via.placeholder.com/50" },
        { name: "Organization 1", description: "Description less than 10 words", image: "https://via.placeholder.com/50" },
        { name: "Organization 2", description: "Description less than 10 words", image: "https://via.placeholder.com/50" },
        { name: "Organization 1", description: "Description less than 10 words", image: "https://via.placeholder.com/50" },
        { name: "Organization 2", description: "Description less than 10 words", image: "https://via.placeholder.com/50" },
        // Add more organizations as needed
    ];

    const people = [
        { name: "Person 1", description: "Description less than 10 words", image: "https://via.placeholder.com/50" },
        { name: "Person 2", description: "Description less than 10 words", image: "https://via.placeholder.com/50" },
        { name: "Person 2", description: "Description less than 10 words", image: "https://via.placeholder.com/50" },
        // Add more people as needed
    ];

    const [showAllTeamMembers, setShowAllTeamMembers] = useState(false);

    // Function for toggling Team Members section
    const toggleTeamMembers = () => setShowAllTeamMembers(!showAllTeamMembers);

    // State variables for toggling sections
    const [showAllPartnerships, setShowAllPartnerships] = useState(false);

    // Function for toggling Partnerships and Collaborations section
    const togglePartnerships = () => setShowAllPartnerships(!showAllPartnerships);

    const [fullscreenImage, setFullscreenImage] = useState(null);
    const [showAllAbout, setShowAllAbout] = useState(false);

    const [showAllSkills, setShowAllSkills] = useState(false);
    const [showAllOrganizationActivities, setShowAllVolunteerActivities] = useState(false);

    // Functions for toggling sections
    const toggleAbout = () => setShowAllAbout(!showAllAbout);

    const toggleSkills = () => setShowAllSkills(!showAllSkills);
    const toggleOrganizationActivities = () => setShowAllVolunteerActivities(!showAllOrganizationActivities);

    // Functions for handling fullscreen image
    const openFullscreenImage = (image) => setFullscreenImage(image);
    const closeFullscreenImage = () => setFullscreenImage(null);

    // State variables for window width and number of columns
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (

        <div className="container mx-auto py-8">
            <div className="flex justify-between">
                <div className="w-full md:w-3/4">
                    <div className="max-w-3xl mx-auto bg-white shadow-lg p-6 rounded-lg">
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-800">{profileData.fullName}</h1>
                                <p className="text-gray-600">{profileData.location}</p>
                                <p className="text-gray-600">{profileData.phone}</p>
                                <p className="text-gray-600">{profileData.email}</p>
                                <p className="text-gray-600">{profileData.weblink}</p>
                            </div>
                            <img
                                src="https://via.placeholder.com/500x300" // Placeholder for profile picture
                                alt="Profile Picture"
                                className="rounded-full h-24 w-24 cursor-pointer"
                                onClick={() => openFullscreenImage(profileData.profilePhoto)}
                            />
                        </div>
                        {/* Stats Section */}
                        <div className="border-t border-gray-300 py-4">
                            <h2 className="text-xl font-semibold mb-4 text-gray-800">Profile Stats</h2>
                            <div className="flex flex-wrap justify-between">
                                <div className={`w-full sm:w-1/2 md:w-1/4 mb-4 px-2`}>
                                    <div className="flex flex-col items-center justify-center bg-gray-200 rounded-md p-2">
                                        <p className="font-bold text-lg">{profileData.stats.eventsOrganized}</p>
                                        <p>Events Orgnaized</p>
                                    </div>
                                </div>
                                <div className={`w-full sm:w-1/2 md:w-1/4 mb-4 px-2`}>
                                    <div className="flex flex-col items-center justify-center bg-gray-200 rounded-md p-2">
                                        <p className="font-bold text-lg">{profileData.stats.CSPRsCompleted}</p>
                                        <p>CSPRs</p>
                                    </div>
                                </div>

                                <div className={`w-full sm:w-1/2 md:w-1/4 mb-4 px-2`}>
                                    <div className="flex flex-col items-center justify-center bg-gray-200 rounded-md p-2">
                                        <p className="font-bold text-lg">{profileData.stats.Participants}</p>
                                        <p>Total Participants</p>
                                    </div>
                                </div>
                                <div className={`w-full sm:w-1/2 md:w-1/4 mb-4 px-2`}>
                                    <div className="flex flex-col items-center justify-center bg-gray-200 rounded-md p-2">
                                        <p className="font-bold text-lg">{profileData.stats.Awards}</p>
                                        <p>Awards</p>
                                    </div>
                                </div>
                                <div className={`w-full sm:w-1/2 md:w-1/4 mb-4 px-2`}>
                                    <div className="flex flex-col items-center justify-center bg-gray-200 rounded-md p-2">
                                        <p className="font-bold text-lg">{(profileData.stats.eventsOrganized * 4.7).toFixed(1)}/5</p>
                                        <p>Rating ({profileData.stats.eventsOrganized} events)</p>
                                    </div>
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
                        {/* Areas of Focus section */}
                        <div className="border-t border-gray-300 py-4">
                            <h2 className="text-xl font-semibold mb-4 text-gray-800">Areas of Focus</h2>
                            <ul className="flex flex-wrap gap-2">
                                {profileData.areasOfFocus.slice(0, showAllSkills ? profileData.areasOfFocus.length : 10).map((areas, index) => (
                                    <li key={index} className="bg-gray-200 px-2 py-1 rounded">
                                        {areas}
                                    </li>
                                ))}
                            </ul>
                            {profileData.areasOfFocus.length > 10 &&
                                <button
                                    className="mt-2 text-blue-600"
                                    onClick={toggleSkills}
                                >
                                    {showAllSkills ? 'Hide' : 'See All'}
                                </button>
                            }
                        </div>
                        {/* Partnerships and Collaborations section */}
                        <div className="border-t border-gray-300 py-4">
                            <h2 className="text-xl font-semibold mb-4 text-gray-800">Partnerships and Collaborations</h2>
                            <div className="flex flex-wrap justify-center gap-6">
                                {profileData.partnershipsAndCollaborations.slice(0, showAllPartnerships ? profileData.partnershipsAndCollaborations.length : 3).map((collaboration, index) => (
                                    <div key={index} className="mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                        <div className="bg-gray-200 p-4 rounded-lg flex flex-col items-center">
                                            <img src={collaboration.photo} alt={collaboration.organization} className="w-24 h-24 rounded-full object-cover" />
                                            <div className="text-center">
                                                <p className="font-semibold">{collaboration.organization}</p>
                                                <a href={collaboration.link} className="text-blue-600 hover:underline">{collaboration.linkText}</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {profileData.partnershipsAndCollaborations.length > 3 &&
                                <button
                                    className="mt-2 text-blue-600"
                                    onClick={togglePartnerships}
                                >
                                    {showAllPartnerships ? 'Hide' : 'See All'}
                                </button>
                            }
                        </div>



                        {/* Team Members section */}
                        {/* Team Members section */}
                        <div className="border-t border-gray-300 py-4">
                            <h2 className="text-xl font-semibold mb-4 text-gray-800">Team Members</h2>
                            <div className="flex flex-wrap justify-center gap-6">
                                {profileData.teamMembers.slice(0, showAllTeamMembers ? profileData.teamMembers.length : 3).map((member, index) => (
                                    <div key={index} className="mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                        <div className="bg-gray-200 p-4 rounded-lg flex flex-col items-center">
                                            <a href={member.link} className="block mb-2">
                                                <img src={member.photo} alt={member.name} className="w-24 h-24 rounded-full object-cover" />
                                            </a>
                                            <div className="text-center">
                                                <a href={member.link} className="font-semibold text-blue-600 hover:underline">{member.name}</a>
                                                <p>{member.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {profileData.teamMembers.length > 3 &&
                                <button
                                    className="mt-2 text-blue-600"
                                    onClick={toggleTeamMembers}
                                >
                                    {showAllTeamMembers ? 'Hide' : 'See All'}
                                </button>
                            }
                        </div>




                        {/* Organization Activities section */}
                        <div className="border-t border-gray-300 py-4">
                            <h2 className="text-xl font-semibold mb-4 text-gray-800">Organization Activities</h2>
                            {profileData.organizationActivities.slice(0, showAllOrganizationActivities ? profileData.organizationActivities.length : 2).map((activity, index) => (
                                <div key={index} className="mb-2">
                                    <p className="text-gray-700">
                                        <span className="font-bold">Name:</span> <a href={activity.link} className="text-blue-600 hover:underline">{activity.name}</a><br />
                                        <span className="font-bold">Date:</span>
                                        {activity.date}<br />
                                        <span className="font-bold">Description:</span> {activity.description}
                                    </p>
                                </div>
                            ))}
                            {profileData.organizationActivities.length > 2 &&
                                <button
                                    className="mt-2 text-blue-600"
                                    onClick={toggleOrganizationActivities}
                                >
                                    {showAllOrganizationActivities ? 'Hide' : 'See All'}
                                </button>
                            }
                        </div>

                        {/* Award section section */}
                        <div className="border-t border-gray-300 py-4">
                            <h2 className="text-xl font-semibold mb-4 text-gray-800">Awards</h2>
                            <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                                {profileData.awardsss.slice(0, 3).map((awardss, index) => (
                                    <div
                                        key={index}
                                        className="relative flex-shrink-0 mr-4"
                                        onClick={() => openFullscreenImage(awardss.image)}
                                    >
                                        <img
                                            src={awardss.image}
                                            alt={awardss.title}
                                            className="w-48 h-32 object-cover rounded-lg cursor-pointer"
                                        />
                                        <p className="text-gray-700 mt-2">{awardss.title}</p>
                                    </div>
                                ))}
                            </div>
                            {profileData.awardsss.length > 3 &&
                                <button
                                    className="mt-2 text-blue-600"
                                    onClick={() => {
                                        // Add functionality to view all awardsss
                                    }}
                                >
                                    See All Awards
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

                <div className="hidden md:block w-1/4 ml-8">
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">People You May Know</h2>
                        {people.map((person, index) => (
                            <div key={index} className="flex items-center mb-4">
                                <img src={person.image} alt="Profile" className="rounded-full h-12 w-12 mr-4" />
                                <div>
                                    <p className="font-semibold">{person.name}</p>
                                    <p className="text-sm text-gray-600">{person.description}</p>
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
                        ))}
                    </div>
                    <div className="mt-8 bg-gray-100 p-4 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">Organizations You May Know</h2>
                        {organizations.map((organization, index) => (
                            <div key={index} className="flex items-center mb-4">
                                <img src={organization.image} alt="Organization" className="rounded-full h-12 w-12 mr-4" />
                                <div>
                                    <p className="font-semibold">{organization.name}</p>
                                    <p className="text-sm text-gray-600">{organization.description}</p>
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
                        ))}
                    </div>
                </div>
            </div>
            {/* Fullscreen image display */}
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
