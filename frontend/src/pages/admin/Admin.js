import axios from 'axios';
import React, { useState } from 'react';

const Admin = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [mode, setMode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:5000/api/slots', 
        { date, time, mode },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert(response.data.message);
    } catch (error) {
      alert('Error adding slot');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-500">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-700">Admin</h1>
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
            <label className="block text-gray-600 mb-1">Time:</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
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
    </div>
  );
}

export default Admin;
