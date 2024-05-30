import React from 'react'

const ListActivities = ({props}) => {
  return (
    <div>
        <div className='activities-header'>
      <h2>{props.title} ({props.orders.length})</h2>
      <button>View All</button>
      </div>
      <div>
        {props.orders && props.orders.slice(0, 4).map((item, index) => (
            <div key={index} className='card'>
               <p className='text-medium'><span className='blue'>{item.name}</span> <span className='grey'>({item.title}) {item.desc}</span> <span>{item.productNo}</span></p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default ListActivities
