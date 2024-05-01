import './App.css';
import ListTimelines from './components/ListTimelines';
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
                    <Link to="/timelines"><button>Home</button></Link>
                    {/* <Link to="/timelines/?vertical"><button>Toggle View</button></Link> */}
                    <Routes>
                        <Route path="/timelines" element={<ListTimelines />} />
                        <Route path="/events/:timelineid" element={<ListEvents />} />
                        <Route path="/details/:id" element={<ListEventsDetails />} />
                        <Route path="/add_event" element={<AddEvent />} />
                    </Routes>
                </Router>
            </div>
        </>
    )
}

export default App;
