import React from 'react';
import Clock from './components/Clock';
import Weather from './components/Weather';
import QuoteGenerator from './components/QuoteGenerator';
import MonthCalendar from './components/MonthCalendar';
import TodoList from './components/ToDoList';
import './App.css';

const App = () => {
  
  return (
    <div className='body-container'>
    <div className="app">
<h1 className="header">Adiya's Dashboard</h1>
      <div className="dashboard">
        <div className="dashboard-column">
          <Clock />
          <Weather/>
          <QuoteGenerator/>
        </div>
        <div className="dashboard-column">
          <MonthCalendar />
          <TodoList />
        </div>
      </div>
    </div>
    </div>
  );
};

export default App;
