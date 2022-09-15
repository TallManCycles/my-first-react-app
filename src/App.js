import './App.css'
import React, { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'
import NewEventForm from './components/NewEventForm'

function App() {
  const [showModal,setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bower's live stream", id: 2},
    {title: "luigi's awesome birthday party", id: 3}
  ])

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const subtitle = "All the latest events are below:"

  return (
    <div className="App">
      <Title title="Events In Your Area" subtitle={subtitle}/>
      <div>
      <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>
      {showModal && <Modal handleClose={handleClose} isSalesModal={true}>
          <NewEventForm />
        </Modal>
      }
      {!showEvents && <div>
          <button onClick={() => setShowEvents(true)} >show events</button>
        </div> }
      {showEvents &&<div>
          <button onClick={() => setShowEvents(false)} >hide events</button>
        </div>
      }
      {showEvents && <EventList events={events} handleClick={handleClick}>
        </EventList>
      }
    </div>
  );
}

export default App;
