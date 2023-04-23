import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ListEvents = () => {
    const [historyEvents, setHistoryEvents] = useState([]);
    const getEvents = async () => {
        const response = await fetch("http://localhost:8000/events/")
        .then((response) => {
            if (!response.ok) {
                console.error("Can't get events...");
            } else {
                console.log("HERE>>>>");
                return response.json();
            }
        })
        .then((json) => {
            setHistoryEvents(json);
        });
    }
    useEffect(() => {
        getEvents();
    }, []) ;

    return (
        <div>
            Timeline
            { historyEvents.map(
                historyEvent =>
                    <Link to="details1/6">ABC</Link>
                    // <Link to={historyEvent.id}>{historyEvent.name}</Link>
                    // <a href="http://localhost:8000/events/6">{historyEvent.name}</a>
            )}
        </div>
    );
};

export default ListEvents;