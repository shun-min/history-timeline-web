import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ListEventDetails = async() => {
    const [historyEvent, setHistoryEvent] = useState();
    const { id } = useParams();

    const getDetails = async () => {
        const response = await fetch(`http://localhost:8000/events/${id}`)
        .then((response) => {
            if (!response.ok) {
                console.error("Can't get details...");
            } else {
                console.log("Got Details!!!");
                return response.json();
            }
        })
        .then((json) => {
            console.log(json);
            setHistoryEvent(json);
        });
    }

    useEffect(() => {
        getDetails();
    }, []) ;

    return (
        <div>
            <h3>Event Details</h3>
            { historyEvent.name }
        </div>
    );
};

export default ListEventDetails;