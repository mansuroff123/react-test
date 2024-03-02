import './App.css';
import { useState } from 'react'
import Title from "./components/Title"

// useState 

function App() {
  const [events, setEvents] = useState([
    {title: "birthday party", id: 1},
    {title: "live stream", id: 2},
    {title: "lorem ipsum hello world", id: 3}
  ])
  const [showEvents, setShowEvents] = useState(true)

  // delete items
  const handleDelete = (id) => {
    setEvents((prev) => {
      return prev.filter((event) => {
        return event.id !== id 
      })
    }) 
  }



  return (
    <div className="App">
        <Title/>
        {showEvents && <button onClick={() => {setShowEvents(false)}}>Hide Events</button>}
        {!showEvents && <button onClick={() => {setShowEvents(true)}}>Show Events</button>}
        {showEvents && <div>
          {events.length === 0 && <div> <h5>No items left</h5> </div>}
          {events.map((event) => {
            return (
              <div key={event.id}>
                <h2>{event.title}</h2>
                <button onClick={() => {handleDelete(event.id)}}>Delete</button>
              </div>
            )
          })}
        </div>}
    </div>
  );
}

export default App;