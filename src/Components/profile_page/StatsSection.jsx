// StatsSection.js
const StatCard = ({ title, value }) => (
    <div className="flex flex-col items-center p-4 border rounded-lg">
      <span className="text-lg font-semibold">{value}</span>
      <span className="text-sm">{title}</span>
    </div>
  );
  
  const StatsSection = ({ stats }) => (
    <div className="bg-white shadow rounded-lg p-4 mb-6 flex justify-around">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
  
  export default StatsSection;