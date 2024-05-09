// CertificationsBadges.js
const CertificationBadge = ({ title, issuer, date }) => (
    <div className="flex flex-col items-center p-4 border rounded-lg">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm">{issuer}</p>
      <p className="text-sm">{date}</p>
    </div>
  );
  
  const CertificationsBadges = ({ certifications }) => (
    <div className="bg-white shadow rounded-lg p-4 mb-6">
      <h2 className="text-xl font-semibold mb-4">Certifications and Badges</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {certifications.map((certification, index) => (
          <CertificationBadge key={index} {...certification} />
        ))}
      </div>
    </div>
  );
  
  export default CertificationsBadges;