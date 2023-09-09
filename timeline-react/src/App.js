import './App.css';
import ListTimelines from './components/ListTimelines';
import ListEvents from './components/ListEvents';
import ListEventsDetails from './components/ListEventDetails';
import AddEvent from './components/AddEvent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SwitchLayoutMode from './components/SwitchLayoutMode';


function App() {
    return (
        <>
            <div className="App">
                <Router>
                    <Link to="/timeline"><button>Home</button></Link>
                    {/* <SwitchLayoutMode></SwitchLayoutMode> */}
                    <Routes>
                        <Route path="/timeline" element={<ListTimelines />} />
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
