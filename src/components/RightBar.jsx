import React from 'react';
import activities from '../data/activities.js';
import "./rightBar.css";
import ListActivities from './ListActivities.jsx';

const RightBar = () => {
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const date = new Date();
    
  return (
    <div className='container right'>
      <h2>Todays Highlights ({activities.completed.orders.length})</h2>
      <p className='grey'>{date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear()}</p>
      <div className='payments'>
        <div className='card'>
            <p className='grey'>Income</p>
            <p className='income'>{activities.income} CAD</p>
            <p className='grey'>{activities.receivedPayments} payments received</p>
        </div>
        <div className='card'>
            <p className='grey'>Expenses</p>
            <p className='expenses'>{activities.expenses} CAD</p>
            <p className='grey'>{activities.paidPayments} payments received</p>
        </div>
      </div>
      <div>
        <ListActivities props={activities.completed} />
      </div>
      <div>
        <ListActivities props={activities.scheduled} />
      </div>
    </div>
  )
}

export default RightBar;
