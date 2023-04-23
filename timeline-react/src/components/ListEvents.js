import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ListEvents = () => {
    const [history_events, setEvents] = useState([]);
    const getEvents = async () => {
        const response = await axios.get("http://localhost:8000/events/")
        console.log("TEST>>>>")
        console.log(response.data)
        setEvents(response.data)
    }
    useEffect(() => {
        getEvents();
    }, []) 

    return (
        <>
            <div>
                Timeline !!!
            </div>
            {
                history_events.map((history_event, index) => {
                    <div>
                        {history_event.name}
                        {history_event.id}
                    </div>
                })
            }
        </>
    );
};

export default ListEvents;