import React from 'react'
import styles from './EventList.module.css'

export default function EventList({events, handleClick}) {
  return (
    <div>
        {events.map((events) => (
        <div key={events.id} className={styles.card}>
          <h2>{events.title}</h2>
          <button onClick={() => handleClick(events.id)} >delete event</button>
        </div> 
        ))}     
    </div>
  )
}
