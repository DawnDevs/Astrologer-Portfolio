import axios from 'axios';
import React, { useState } from 'react';

const Admin = () => {
  const [date, setDate] = useState('');

  const [starttime, setStartTime] = useState(''); // Update variable names to match backend schema
  const [endtime, setEndTime] = useState(''); // Update variable names to match backend schema

  const [mode, setMode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:5000/api/slots', 
        { date, starttime, endtime, mode },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert(response.data.message);
    } catch (error) {
      alert('Slot already exists');
    }
  };

  return (

    <div>
        <div>
            Admin

        </div>
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl font-semibold text-gray-600 mb-4">Add Slot</h2>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-amber-500"
            />
          </div>
          <div className="mb-4">

            <label className="block text-gray-600 mb-1">Start Time:</label>
            <input
              type="time"
              value={starttime} // Update variable name to match backend schema
              onChange={(e) => setStartTime(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-amber-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">End Time:</label>
            <input
              type="time"
              value={endtime} // Update variable name to match backend schema
              onChange={(e) => setEndTime(e.target.value)}

              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-amber-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Mode:</label>
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-amber-500"
            >
              <option value="" disabled>Select mode</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300"
          >
            Add Slot
          </button>
        </form>
      </div>

  )

}

export default Admin;
