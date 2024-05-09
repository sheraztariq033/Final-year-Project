import React, { useState, useEffect } from 'react';

const AttendancePage = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([
    { id: 1, name: 'Ali', userId: '232', remarks: '', attendance: null },
    { id: 2, name: 'Amir', userId: '344', remarks: '', attendance: null },
    { id: 3, name: 'Amina', userId: '442', remarks: '', attendance: null }
    // Add more initial records as needed
  ]);
  const [numberOfDays, setNumberOfDays] = useState(7);
  const [currentDay, setCurrentDay] = useState(1); // Default to the first day
  const [startDate, setStartDate] = useState(""); // Start date fetched from the database
  const [hoursPerDay, setHoursPerDay] = useState(3); // Default number of hours per day

  useEffect(() => {
    // Fetch start date and number of hours per day from the database
    fetchStartDateFromDatabase();
    fetchHoursPerDayFromDatabase();
  }, []);

  const fetchStartDateFromDatabase = () => {
    // Simulated fetch start date from the database
    // Replace this with actual API call or database query
    setTimeout(() => {
      const startDateFromDatabase = "01/22/2000"; // Example start date fetched from the database
      setStartDate(startDateFromDatabase);
    }, 1000);
  };

  const fetchHoursPerDayFromDatabase = () => {
    // Simulated fetch hours per day from the database
    // Replace this with actual API call or database query
    setTimeout(() => {
      const hoursPerDayFromDatabase = 3; // Example number of hours per day fetched from the database
      setHoursPerDay(hoursPerDayFromDatabase);
    }, 1000);
  };

  const calculateDateForDay = (day) => {
    const startDateObj = new Date(startDate);
    const currentDateObj = new Date(startDateObj.setDate(startDateObj.getDate() + day - 1));
    return currentDateObj.toLocaleDateString();
  };

  const handleAttendanceChange = (userId, selectedHours) => {
    const updatedRecords = [...attendanceRecords];
    const index = updatedRecords.findIndex(record => record.userId === userId);
    updatedRecords[index].attendance = selectedHours;
    setAttendanceRecords(updatedRecords);
  };

  const handleRemarksChange = (userId, value) => {
    const updatedRecords = [...attendanceRecords];
    const index = updatedRecords.findIndex(record => record.userId === userId);
    updatedRecords[index].remarks = value;
    setAttendanceRecords(updatedRecords);
  };

  const handleMarkAll = (hours) => {
    const updatedRecords = attendanceRecords.map(record => ({
      ...record,
      attendance: hours
    }));
    setAttendanceRecords(updatedRecords);
  };

  const handleSubmit = () => {
    // Code to handle form submission for the current day
    console.log(`Attendance submitted for Day ${currentDay}`);
  };

  const handleUpdate = () => {
    // Code to handle update of attendance records
    console.log(`Attendance updated for Day ${currentDay}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Attendance Page - Day {currentDay}</h1>

      {/* Select Day Dropdown */}
      <div className="mb-4">
        <label htmlFor="daySelect" className="mr-2 font-semibold">Select Day:</label>
        <select
          id="daySelect"
          className="border border-gray-400 p-2 rounded"
          value={currentDay}
          onChange={(e) => setCurrentDay(parseInt(e.target.value))}
        >
          {[...Array(numberOfDays)].map((_, index) => (
            <option key={index} value={index + 1}>Day {index + 1} - {calculateDateForDay(index + 1)}</option>
          ))}
        </select>
      </div>

      {/* Mark All */}
      <div className="mb-4">
        <label className="mr-2 font-semibold">Mark All:</label>
        {[...Array(hoursPerDay + 1)].map((_, hourIndex) => (
          <label key={hourIndex} className="inline-block mr-4">
            <input
              type="radio"
              name={`attendance_all`}
              value={hourIndex}
              onChange={() => handleMarkAll(hourIndex)}
            /> {hourIndex}
          </label>
        ))}
      </div>

      {/* Attendance Table */}
      <div className="overflow-x-auto rounded-lg">
        <table className="table-auto w-full border-collapse border border-gray-500">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border border-gray-500">Sr.</th>
              <th className="px-4 py-2 border border-gray-500">User Name</th>
              <th className="px-4 py-2 border border-gray-500">User ID</th>
              <th className="px-4 py-2 border border-gray-500">Attendance</th>
              <th className="px-4 py-2 border border-gray-500">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {attendanceRecords.map((record, index) => (
              <tr key={record.id} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="px-4 py-2 border border-gray-500">{record.id}</td>
                <td className="px-4 py-2 border border-gray-500">{record.name}</td>
                <td className="px-4 py-2 border border-gray-500">{record.userId}</td>
                <td className="px-4 py-2 border border-gray-500">
                  {[...Array(hoursPerDay + 1)].map((_, hourIndex) => (
                    <label key={hourIndex} className="inline-block mr-4">
                      <input
                        type="radio"
                        name={`attendance_${record.userId}`}
                        value={hourIndex}
                        checked={record.attendance === hourIndex}
                        onChange={() => handleAttendanceChange(record.userId, hourIndex)}
                      /> {hourIndex}
                    </label>
                  ))}
                </td>
                <td className="px-4 py-2 border border-gray-500">
                  <input
                    type="text"
                    className="border border-gray-400 p-2 w-full rounded"
                    value={record.remarks}
                    onChange={(e) => handleRemarksChange(record.userId, e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleUpdate}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default AttendancePage;
