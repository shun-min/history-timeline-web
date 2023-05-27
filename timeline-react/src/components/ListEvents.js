import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ListEvents = () => {
    const [historyEvents, setHistoryEvents] = useState([]);
    const getEvents = async () => {
        await fetch("http://localhost:8000/api/events")
        .then((response) => {
            if (!response.ok) {
                console.error("Can't get events...");
            } else {
                return response.json();
            }       
        })
        .then((json) => {
            setHistoryEvents(json);
        });
    }
    useEffect(() => {
        getEvents();
    }, []);


    return (
        <>
            <div>
            {
                historyEvents.map(historyEvent => 
                    <div><Link to={`/details/${historyEvent.id}`}>{ historyEvent.name }</Link></div>
                )
                // .then((historyEvent) => {
                //     const persons = historyEvent.persons_involved;
                //     persons.map(person => 
                //         <div>{ person.name }</div>
                //     )
                // })
            }
            </div>
        </>
    );
}

export default ListEvents;