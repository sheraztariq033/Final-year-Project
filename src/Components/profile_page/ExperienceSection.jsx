// ExperienceSection.js
const ExperienceEntry = ({ organization, role, duration }) => (
    <div className="mb-4">
      <h3 className="text-lg font-semibold">{organization}</h3>
      <p className="text-sm">{role}</p>
      <p className="text-sm">{duration}</p>
    </div>
  );
  
  const ExperienceSection = ({ experiences }) => (
    <div className="bg-white shadow rounded-lg p-4 mb-6">
      <h2 className="text-xl font-semibold mb-4">Experience and Achievements</h2>
      {experiences.map((experience, index) => (
        <ExperienceEntry key={index} {...experience} />
      ))}
    </div>
  );
  
  export default ExperienceSection;