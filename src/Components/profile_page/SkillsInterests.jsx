// SkillsInterests.js
const SkillInterestTag = ({ skill }) => (
    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
      {skill}
    </span>
  );
  
  const SkillsInterests = ({ skills }) => (
    <div className="bg-white shadow rounded-lg p-4 mb-6">
      <h2 className="text-xl font-semibold mb-4">Skills and Interests</h2>
      <div className="flex flex-wrap">
        {skills.map((skill, index) => (
          <SkillInterestTag key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
  
  export default SkillsInterests;