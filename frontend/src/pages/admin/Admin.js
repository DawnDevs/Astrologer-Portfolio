import axios from 'axios';
import React, { useState } from 'react'

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
    <div>
        <div>
            Admin
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add Slot</h2>
                <div>
                    <label>Date:</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </div>
                <div>
                    <label>Time:</label>
                    <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                </div>
                <div>
                    <label>Mode:</label>
                    <select value={mode} onChange={(e) => setMode(e.target.value)} required>
                        <option value="" disabled>Select mode</option>
                        <option value="Online">Online</option>
                        <option value="Offline">Offline</option>
                    </select>
            </div>
                <button type="submit">Add Slot</button>
            </form>
        </div>
    </div>
  )
}

export default Admin