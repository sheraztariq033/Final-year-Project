import React from 'react';
import ProfileHeader from './ProfileHeader';
import PersonalInfo from './PersonalInfo';
import EducationInfo from './EducationInfo';
import StatsSection from './StatsSection';
import SkillsInterests from './SkillsInterests';
import ExperienceSection from './ExperienceSection';
import CertificationsBadges from './CertificationsBadges';
import FeedbackReviews from './FeedbackReviews';
import SocialMediaLinks from './SocialMediaLinks';
import PrivacySettings from './PrivacySettings';
import CallToAction from './CallToAction';

const ProfilePage = () => {
  return (
    <div className="container mx-auto p-4">
      <ProfileHeader />
      <PersonalInfo />
      <EducationInfo />
      <StatsSection />
      <SkillsInterests />
      <ExperienceSection />
      <CertificationsBadges />
      <FeedbackReviews />
      <SocialMediaLinks />
      <PrivacySettings />
      <CallToAction />
    </div>
  );
};

// Sample education data
const educationList = [
    {
      school: 'University of Example',
      major: 'Environmental Science',
      year: 'Sophomore',
    },
    // Add more educational entries as needed
  ];
  
  // Inside your ProfilePage component's return statement
  <EducationInfo educationList={educationList} />
  // Sample stats data
const stats = [
    { title: 'CSPRs Completed', value: 108 },
    { title: 'Events Attended', value: 27 },
    { title: 'Badges Obtained', value: 10 },
    { title: 'Certificates Obtained', value: 5 },
  ];
  
  // Inside your ProfilePage component's return statement
  <StatsSection stats={stats} />


  // Sample skills data
const skills = ['Teaching', 'Event Planning', 'Fundraising', 'Leadership'];

// Inside your ProfilePage component's return statement
<SkillsInterests skills={skills} />


// Sample experiences data
const experiences = [
    {
      organization: 'Community Help Service',
      role: 'Volunteer Teacher',
      duration: 'Jan 2021 - Present',
    },
    // Add more experience entries as needed
  ];
  
  // Inside your ProfilePage component's return statement
  <ExperienceSection experiences={experiences} />


  const certifications = [
    {
      title: 'First Aid Certification',
      issuer: 'Red Cross',
      date: 'March 2022',
    },
    // ...other certifications
  ];

<CertificationsBadges certifications={certifications} />

  const reviews = [
    {
      author: 'John Doe',
      content: 'An exceptional volunteer with a heart for service.',
      date: 'Jan 2022',
    },
    // ...other reviews
  ];
  <FeedbackReviews reviews={reviews} />

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yourprofile',
      icon: 'fa-linkedin',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourprofile',
      icon: 'fa-twitter',
    },
    // ...other social media links
  ];
<SocialMediaLinks socialLinks={socialLinks} />

  



 
 
export default ProfilePage;