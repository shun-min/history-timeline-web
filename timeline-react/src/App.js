import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import ListEvents from './components/ListEvents';
import ListEventsDetails from './components/ListEventDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <ListEvents />
        <Router>
          <Routes>
            <Route path="/" component={ListEvents} />
            <Route path="details1/:id" component={ListEventsDetails} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App;
