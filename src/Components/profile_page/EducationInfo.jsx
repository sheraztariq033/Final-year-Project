// EducationInfo.js
const EducationEntry = ({ school, major, year }) => (
    <div className="mb-4">
      <h3 className="text-lg font-semibold">{school}</h3>
      <p className="text-sm">{major}</p>
      <p className="text-sm">{year}</p>
    </div>
  );
  
  const EducationInfo = ({ educationList }) => (
    <div className="bg-white shadow rounded-lg p-4 mb-6">
      <h2 className="text-xl font-semibold mb-4">Educational Information</h2>
      {educationList.map((education, index) => (
        <EducationEntry key={index} {...education} />
      ))}
    </div>
  );
  
  export default EducationInfo;