import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

const initialAvailableSlots = {
  '2024-05-20': ['10:00 AM', '2:00 PM', '4:00 PM'],
  '2024-05-21': ['9:00 AM', '11:00 AM', '3:00 PM'],
  '2024-05-22': ['9:00 AM', '11:00 AM', '3:00 PM'],
};

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableSlots, setAvailableSlots] = useState(initialAvailableSlots);
  const [slots, setSlots] = useState([]);
  const [bookedSlots, setBookedSlots] = useState({});

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const dateString = format(date, 'yyyy-MM-dd');
    const slotTimes = availableSlots[dateString] || [];
    setSlots(slotTimes);
  };

  const handleSlotClick = (slot) => {
    const dateString = format(selectedDate, 'yyyy-MM-dd');

    // Mark slot as booked
    setBookedSlots((prevBookedSlots) => {
      const updatedSlots = { ...prevBookedSlots };
      if (!updatedSlots[dateString]) {
        updatedSlots[dateString] = [];
      }
      updatedSlots[dateString].push(slot);
      return updatedSlots;
    });

    // Remove slot from available slots
    setAvailableSlots((prevAvailableSlots) => {
      const updatedSlots = { ...prevAvailableSlots };
      updatedSlots[dateString] = updatedSlots[dateString].filter((s) => s !== slot);
      return updatedSlots;
    });
  };

  const isSlotBooked = (date, slot) => {
    const dateString = format(date, 'yyyy-MM-dd');
    return bookedSlots[dateString]?.includes(slot);
  };

  return (
    <div className="p-6 bg-gray-100 flex flex-col items-center my-10">
      <h2 className="text-3xl font-bold mb-6 text-orange-500">Select a Date</h2>
      <div className="bg-white p-4 shadow-lg rounded-lg">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
          inline
          className="border-2 border-orange-500 rounded-lg"
        />
      </div>
      {slots.length > 0 && (
        <div className="mt-6 w-full max-w-4xl">
          <h3 className="text-2xl font-semibold mb-4">Available Slots</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {slots.map((slot, index) => (
              <li key={index} className="flex justify-center">
                <button
                  onClick={() => handleSlotClick(slot)}
                  disabled={isSlotBooked(selectedDate, slot)}
                  className={`w-full py-3 rounded-lg text-white ${
                    isSlotBooked(selectedDate, slot)
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-500 hover:bg-blue-700 cursor-pointer'
                  }`}
                >
                  {slot} {isSlotBooked(selectedDate, slot) && '(Booked)'}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Calendar;
