import './NewEventForm.css'
import { useState } from 'react'
import React from 'react'

export default function NewEventForm() {

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')

    // const handleChange = (e) => {
    //     setTitle(e.target.value)
    // }

  return (
    <form className="new-event-form">
        <label>
            <span>Event Title:</span>
            <input type="text" onChange={(e) => setTitle(e.target.value)}></input>
        </label>
        <label>
            <span>Event Date:</span>
            <input type="date" onChange={(e) => setDate(e.target.value)}></input>
        </label>
        <button>Submit</button>
    </form>
  )
}
