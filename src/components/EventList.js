import React from 'react'

export default function EventList({events, handleClick}) {
  return (
    <div>
        {events.map((events) => (
        <div key={events.id}>
          <h2>{events.title}</h2>
          <button onClick={() => handleClick(events.id)} >delete event</button>
        </div> 
        ))}     
    </div>
  )
}
