import React, { useState, useEffect } from 'react';
import './Clock.css';
const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  
  const formatTime = (value) => {
    return value.toString().padStart(2, '0');
  };

  const getAmPm = (hour) => {
    return hour >= 12 ? 'PM' : 'AM';
  };

  const hour = formatTime(time.getHours() % 12 || 12);
  const minute = formatTime(time.getMinutes());
  const second = formatTime(time.getSeconds());
  const amPm = getAmPm(time.getHours());

  
  useEffect(() => {
    const currentHour = time.getHours();
    let newGreeting = '';

    if (currentHour >= 5 && currentHour < 12) {
      newGreeting = 'Good Morning, Adiya';
    } else if (currentHour >= 12 && currentHour < 18) {
      newGreeting = 'Good Afternoon, Adiya';
    } else if (currentHour >= 18 && currentHour < 22) {
      newGreeting = 'Good Evening, Adiya';
    } else {
      newGreeting = 'Good Night, Adiya';
    }

    setGreeting(newGreeting);
  }, [time]);

  return (
    <div className="clock-container">
      <div className='greeting'><p>{greeting}</p></div>
      <div className="flap-container">
        <div className="flap">{hour}</div>
        <div className="flap2">:</div>
        <div className="flap">{minute}</div>
        <div className="flap2">:</div>
        <div className="flap">{second}</div>
        <div className="flap">{amPm}</div>
      </div>
      
    </div>
  );
};

export default Clock;
