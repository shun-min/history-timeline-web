// import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  return (
    <>
      TimelineEntry.map() =>
        <p>TimelineEntry.name</p>
    </>
  )
}

function TimelineEntry() {
  const historic_events = new Map();
  historic_events.set
}

function EventEntryForm() {
  return (
    <>
      <div className="App">
        <form action="{% url 'timeline:submit_entry'%}" method="post">
          {/* <fieldset> */}
            <h1>Fill in Event Details</h1>
            <label>Name:</label>
            <input type="text" name="event_name"></input>
            <label>Involved Organization:</label>
            <input type="text" name="organization"></input>
            <label>Involved Person:</label>
            <input type="text" name="person"></input>
          {/* </fieldset> */}
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </>
  );
}

export default App;
