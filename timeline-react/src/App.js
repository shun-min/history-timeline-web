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
        <Router>
          <Routes>
            <Route path="/timeline" element={<ListEvents />} />
            <Route path="/details/:id" element={<ListEventsDetails />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App;
