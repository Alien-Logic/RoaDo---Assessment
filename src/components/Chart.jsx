import React from 'react';
import "./chart.css";

const Chart = ({props}) => {
  return (
    <div className='chart'>
      <div><span className='chart-title'>{props.title}</span></div>
      <div className='bars'>
        <div className='bar golden-bg'>
            <p>Upcoming</p>
            <p>{props.upcoming}</p>
        </div>
        <div className='bar violet-bg'>
            <p>Ongoing</p>
            <p>{props.ongoing}</p>
        </div>
        <div className='bar green-bg'>
            <p>Completed</p>
            <p>{props.completed}</p>
        </div>
      </div>
    </div>
  )
}

export default Chart
