import React, { useState } from 'react';

const UniversityDashboard = () => {
  // Sample data for demonstration
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', badge: 'Badge 123', enrollment: '2023001', email: 'john@example.com', profileLink: '/profiles/1', eventsContributed: 5, totalHoursContributed: 20, collaborationEventsAttended: 3, totalCollaborationHours: 15, programName: 'Computer Science' },
    { id: 2, name: 'Jane Smith', badge: 'Badge 456', enrollment: '2022002', email: 'jane@example.com', profileLink: '/profiles/2', eventsContributed: 8, totalHoursContributed: 30, collaborationEventsAttended: 4, totalCollaborationHours: 18, programName: 'Engineering' },
    { id: 3, name: 'John Doe', badge: 'Badge 123', enrollment: '2023001', email: 'john@example.com', profileLink: '/profiles/1', eventsContributed: 5, totalHoursContributed: 20, collaborationEventsAttended: 3, totalCollaborationHours: 15, programName: 'Computer Science' },
    { id: 4, name: 'Jane Smith', badge: 'Badge 456', enrollment: '2022002', email: 'jane@example.com', profileLink: '/profiles/2', eventsContributed: 8, totalHoursContributed: 30, collaborationEventsAttended: 4, totalCollaborationHours: 18, programName: 'Engineering' },
    { id: 5, name: 'John Doe', badge: 'Badge 123', enrollment: '2023001', email: 'john@example.com', profileLink: '/profiles/1', eventsContributed: 5, totalHoursContributed: 20, collaborationEventsAttended: 3, totalCollaborationHours: 15, programName: 'Computer Science' },
    { id: 6, name: 'Jane Smith', badge: 'Badge 456', enrollment: '2022002', email: 'jane@example.com', profileLink: '/profiles/2', eventsContributed: 8, totalHoursContributed: 30, collaborationEventsAttended: 4, totalCollaborationHours: 18, programName: 'Engineering' },
    // Add more student entries as needed
  ]);

  // State for search term
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle search term change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter students based on search term
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.enrollment.includes(searchTerm) ||
    student.badge.toLowerCase().includes(searchTerm) || student.programName.toLowerCase().includes(searchTerm)
  );

  // Calculate total statistics
  const totalEvents = students.reduce((acc, student) => acc + student.eventsContributed, 0);
  const totalCSPHours = students.reduce((acc, student) => acc + student.totalHoursContributed, 0);
  const totalCollaborationEvents = students.reduce((acc, student) => acc + student.collaborationEventsAttended, 0);
  const totalCollaborationCSPHours = students.reduce((acc, student) => acc + student.totalCollaborationHours, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">University Dashboard</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name, enrollment, or badge..."
        className="w-full border rounded-md p-2 mb-4"
        value={searchTerm}
        onChange={handleSearch}
      />

      {/* Total Statistics */}
      <div className="mb-8 border rounded-lg p-4 bg-gray-100">
        <h2 className="text-xl font-semibold mb-2">Total Statistics</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="font-semibold text-lg mb-2">Total Events</p>
            <p className="text-gray-700">{totalEvents}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="font-semibold text-lg mb-2">Total CSP Hours</p>
            <p className="text-gray-700">{totalCSPHours}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="font-semibold text-lg mb-2">Collaboration Events Attended</p>
            <p className="text-gray-700">{totalCollaborationEvents}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="font-semibold text-lg mb-2">Collaboration CSP Hours</p>
            <p className="text-gray-700">{totalCollaborationCSPHours}</p>
          </div>
        </div>
      </div>

      {/* Student Details */}
      <div className="mb-8 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Student Details</h2>
        <table className="w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Program Name</th>
              <th className="border px-4 py-2">Badge</th>
              <th className="border px-4 py-2">Enrollment</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Profile Link</th>
              <th className="border px-4 py-2">Events Contributed</th>
              <th className="border px-4 py-2">CSP Hours Contributed</th>
              <th className="border px-4 py-2">Collaboration Events Attended</th>
              <th className="border px-4 py-2">Collaboration CSP Hours</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={student.id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'} hover:bg-gray-300 transition-colors`}>
                <td className="border px-4 py-2">{student.name}</td>
                <td className="border px-4 py-2">{student.programName}</td>
                <td className="border px-4 py-2">{student.badge}</td>
                <td className="border px-4 py-2">{student.enrollment}</td>
                <td className="border px-4 py-2">{student.email}</td>
                <td className="border px-4 py-2">
                  <a href={student.profileLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Profile</a>
                </td>
                <td className="border px-4 py-2">{student.eventsContributed}</td>
                <td className="border px-4 py-2">{student.totalHoursContributed}</td>
                <td className="border px-4 py-2">{student.collaborationEventsAttended}</td>
                <td className="border px-4 py-2">{student.totalCollaborationHours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UniversityDashboard;

