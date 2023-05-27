import './App.css';
import ListEvents from './components/ListEvents';
import ListEventsDetails from './components/ListEventDetails';
import AddEvent from './components/AddEvent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


function App() {
    return (
        <>
            <div className="App">
                <Router>
                    {/* <Link to="/add_event"><button>Add Event</button></Link> */}
                    <Link to="/timeline"><button>Home</button></Link>
                    <Routes>
                        <Route path="/timeline" element={<ListEvents />} />
                        <Route path="/details/:id" element={<ListEventsDetails />} />
                        <Route path="/add_event" element={<AddEvent />} />
                    </Routes>
                </Router>
            </div>
        </>
    )
}

export default App;
