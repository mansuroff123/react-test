import './App.css';
import { useState } from 'react'

function App() {
  const [name, setName] = useState('John')

  const [events, setEvents] = useState([
    {title: "Hello my name is John", id: 1},
    {title: "John birthday 2000", id: 2},
    {title: "John last name is Doe", id: 3},
  ])

  const handleClick = () => {
    setName('Doe')
  }
  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change name</button>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h2>{event.title}</h2>
          </div>
        )
      })}
    </div>
  );
}

export default App;
