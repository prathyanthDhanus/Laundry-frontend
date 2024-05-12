import React, { useState } from 'react';
import dayjs from 'dayjs';

const Calendar = ({ initialDate, onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(dayjs(initialDate));
  

  const renderCalendar = () => {
    const startOfMonth = selectedDate.startOf('month');
    const endOfMonth = selectedDate.endOf('month');

    const startDate = startOfMonth.startOf('week');
    const endDate = endOfMonth.endOf('week');

    const days = [];
    let day = startDate;

    while (day.isBefore(endDate)) {
      days.push(day);
      day = day.add(1, 'day');
    }

    return days.map((day, index) => (
      <div
        key={index}
        className={`day p-2 border rounded-md cursor-pointer ${
          day.isSame(selectedDate, 'day')? 'bg-blue-500 text-white' : ''
        }`}
        onClick={() => handleDateClick(day)}
      >
        {day.format('D')}
      </div>
    ));
  };

  const handleDateClick = (clickedDate) => {
    setSelectedDate(clickedDate);
    const jsDate = clickedDate.toDate(); // Convert dayjs to Date object
    onDateChange(jsDate);
    
  };
   
  const goToPreviousMonth = () => {
    // setSelectedDate(selectedDate.subtract(1, 'month'));
    // onDateChange(selectedDate.subtract(1, 'month'));
    const newSelectedDate = selectedDate.subtract(1, 'month');
    setSelectedDate(newSelectedDate);
    onDateChange(newSelectedDate.toDate());
  };

   

  const goToNextMonth = () => {
    // setSelectedDate(selectedDate.add(1, 'month'));
    // onDateChange(selectedDate.add(1, 'month'));
    const newSelectedDate = selectedDate.add(1, 'month');
    setSelectedDate(newSelectedDate);
    onDateChange(newSelectedDate.toDate()); 
  };





  return (
    <div className="calendar bg-white p-4 rounded-md shadow-md w-full">
      <div className="header flex justify-between items-center mb-4">
        <button
          onClick={goToPreviousMonth}
          className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
        >
          Previous
        </button>
        <div className="text-xl font-semibold">
          {selectedDate.format('MMMM YYYY')}
        </div>
        <button
          onClick={goToNextMonth}
          className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
        >
          Next
        </button>
      </div>
      <div className="days grid grid-cols-7 gap-2">
        <div className="day text-center">Sun</div>
        <div className="day text-center">Mon</div>
        <div className="day text-center">Tue</div>
        <div className="day text-center">Wed</div>
        <div className="day text-center">Thu</div>
        <div className="day text-center">Fri</div>
        <div className="day text-center">Sat</div>
      </div>
      <div className="dates grid grid-cols-7 gap-2 mt-4">{renderCalendar()}</div>
    </div>
  );
};

export default Calendar;