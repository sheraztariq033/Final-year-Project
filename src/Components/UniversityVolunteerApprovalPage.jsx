import React, { useState } from 'react';

const UniversityApprovalPage = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', enrollment: 'U123456', duration: 'May 2018 - Oct 2024', email: 'john.doe@example.com', platformId: '@john123', status: 'unapproved' },
    { id: 2, name: 'Jane Smith', enrollment: 'U987654', duration: 'Aug 2019 - Sep 2023', email: 'jane.smith@example.com', platformId: '@jane456', status: 'approved' },
    { id: 3, name: 'Alice Johnson', enrollment: 'U456789', duration: 'Jan 2020 - Dec 2025', email: 'alice.johnson@example.com', platformId: '@alice789', status: 'declined' },
    { id: 4, name: 'John Doe', enrollment: 'U123456', duration: 'May 2018 - Oct 2024', email: 'john.doe@example.com', platformId: '@john123', status: 'unapproved' },
    { id: 5, name: 'Jane Smith', enrollment: 'U987654', duration: 'Aug 2019 - Sep 2023', email: 'jane.smith@example.com', platformId: '@jane456', status: 'approved' },
    { id: 6, name: 'Alice Johnson', enrollment: 'U456789', duration: 'Jan 2020 - Dec 2025', email: 'alice.johnson@example.com', platformId: '@alice789', status: 'declined' },
    { id: 7, name: 'John Doe', enrollment: 'U123456', duration: 'May 2018 - Oct 2024', email: 'john.doe@example.com', platformId: '@john123', status: 'unapproved' },
    { id: 8, name: 'Jane Smith', enrollment: 'U987654', duration: 'Aug 2019 - Sep 2023', email: 'jane.smith@example.com', platformId: '@jane456', status: 'approved' },
    { id: 9, name: 'Alice Johnson', enrollment: 'U456789', duration: 'Jan 2020 - Dec 2025', email: 'alice.johnson@example.com', platformId: '@alice789', status: 'declined' }
    // Add more student entries as needed
  ]);

  const [showApproved, setShowApproved] = useState(true);
  const [showUnapproved, setShowUnapproved] = useState(true);
  const [showDeclined, setShowDeclined] = useState(true);

  // Function to change student status
  const changeStatus = (id, newStatus) => {
    const updatedStudents = students.map(student => {
      if (student.id === id) {
        return { ...student, status: newStatus };
      }
      return student;
    });
    setStudents(updatedStudents);
  };

  // Calculate total stats
  const totalRequests = students.length;
  const approvedStudents = students.filter(student => student.status === 'approved').length;
  const unapprovedStudents = students.filter(student => student.status === 'unapproved').length;
  const declinedStudents = students.filter(student => student.status === 'declined').length;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">University Volunteer Approval Page</h1>

      {/* Stats Section */}
      <div className="mb-8 border rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-2">Total Stats</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p>Total Requests: {totalRequests}</p>
            <p>Approved Students: {approvedStudents}</p>
          </div>
          <div>
            <p>Unapproved Students: {unapprovedStudents}</p>
            <p>Declined Students: {declinedStudents}</p>
          </div>
        </div>
      </div>

      {/* Unapproved Students Section */}
      <div className="mb-8 border rounded-lg overflow-hidden">
        <h2 className="bg-yellow-500 text-white text-xl font-semibold py-2 px-4 cursor-pointer" onClick={() => setShowUnapproved(!showUnapproved)}>Unapproved Students</h2>
        {showUnapproved && (
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Student Name</th>
                  <th className="border px-4 py-2">Enrollment</th>
                  <th className="border px-4 py-2">Duration</th>
                  <th className="border px-4 py-2">Email</th>
                  <th className="border px-4 py-2">Platform ID</th>
                  <th className="border px-4 py-2">Profile</th>
                  <th className="border px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.filter(student => student.status === 'unapproved').map(student => (
                  <tr key={student.id} className="bg-white">
                    <td className="border px-4 py-2">{student.name}</td>
                    <td className="border px-4 py-2">{student.enrollment}</td>
                    <td className="border px-4 py-2">{student.duration}</td>
                    <td className="border px-4 py-2">{student.email}</td>
                    <td className="border px-4 py-2">{student.platformId}</td>
                    <td className="border px-4 py-2">
                      <a href={`/profile/${student.id}`} target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.416 21.416a2 2 0 01-2.827 0l-7.89-7.89a2 2 0 010-2.828l.707-.707a2 2 0 012.829 0l7.889 7.89a2 2 0 010 2.827l-.707.707z" />
                        </svg>
                      </a>
                    </td>
                    <td className="border px-4 py-2 flex items-center">
                      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 rounded" onClick={() => changeStatus(student.id, 'approved')}>Approve</button>
                      <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded ml-2" onClick={() => changeStatus(student.id, 'declined')}>Decline</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Approved Students Section */}
      <div className="mb-8 border rounded-lg overflow-hidden">
        <h2 className="bg-blue-500 text-white text-xl font-semibold py-2 px-4 cursor-pointer" onClick={() => setShowApproved(!showApproved)}>Approved Students</h2>
        {showApproved && (
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Student Name</th>
                  <th className="border px-4 py-2">Enrollment</th>
                  <th className="border px-4 py-2">Duration</th>
                  <th className="border px-4 py-2">Email</th>
                  <th className="border px-4 py-2">Platform ID</th>
                  <th className="border px-4 py-2">Profile</th>
                  <th className="border px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.filter(student => student.status === 'approved').map(student => (
                  <tr key={student.id} className="bg-gray-100">
                    <td className="border px-4 py-2">{student.name}</td>
                    <td className="border px-4 py-2">{student.enrollment}</td>
                    <td className="border px-4 py-2">{student.duration}</td>
                    <td className="border px-4 py-2">{student.email}</td>
                    <td className="border px-4 py-2">{student.platformId}</td>
                    <td className="border px-4 py-2">
                      <a href={`/profile/${student.id}`} target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.416 21.416a2 2 0 01-2.827 0l-7.89-7.89a2 2 0 010-2.828l.707-.707a2 2 0 012.829 0l7.889 7.89a2 2 0 010 2.827l-.707.707z" />
                        </svg>
                      </a>
                    </td>
                    <td className="border px-4 py-2 flex items-center">
                      <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded" onClick={() => changeStatus(student.id, 'declined')}>Decline</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Declined Students Section */}
      <div className="mb-8 border rounded-lg overflow-hidden">
        <h2 className="bg-red-500 text-white text-xl font-semibold py-2 px-4 cursor-pointer" onClick={() => setShowDeclined(!showDeclined)}>Declined Students</h2>
        {showDeclined && (
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Student Name</th>
                  <th className="border px-4 py-2">Enrollment</th>
                  <th className="border px-4 py-2">Duration</th>
                  <th className="border px-4 py-2">Email</th>
                  <th className="border px-4 py-2">Platform ID</th>
                  <th className="border px-4 py-2">Profile</th>
                  <th className="border px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.filter(student => student.status === 'declined').map(student => (
                  <tr key={student.id} className="bg-gray-100">
                    <td className="border px-4 py-2">{student.name}</td>
                    <td className="border px-4 py-2">{student.enrollment}</td>
                    <td className="border px-4 py-2">{student.duration}</td>
                    <td className="border px-4 py-2">{student.email}</td>
                    <td className="border px-4 py-2">{student.platformId}</td>
                    <td className="border px-4 py-2">
                      <a href={`/profile/${student.id}`} target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.416 21.416a2 2 0 01-2.827 0l-7.89-7.89a2 2 0 010-2.828l.707-.707a2 2 0 012.829 0l7.889 7.89a2 2 0 010 2.827l-.707.707z" />
                        </svg>
                      </a>
                    </td>
                    <td className="border px-4 py-2 flex items-center">
                      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 rounded" onClick={() => changeStatus(student.id, 'approved')}>Approve</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default UniversityApprovalPage;

