// import React from 'react';
// import './Calendar.css';

// const Calendar = () => {
//   const currentDate = new Date();
//   const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//   const formattedDate = currentDate.toLocaleDateString(undefined, options);

//   return (
//     <div className="calendar">
//       <h2>Today</h2>
//       <p>{formattedDate}</p>
//     </div>
//   );
// };

// export default Calendar;
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './MonthCalendar.css';


const MonthCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (date) => {
    setDate(date);
  };

  return (
    <div className="month-calendar">
      <h2>Calendar 2023</h2>
      <Calendar
        value={date}
        onChange={handleDateChange}
        calendarType="US"
        showNeighboringMonth={false}
      />
    </div>
  );
};

export default MonthCalendar;
