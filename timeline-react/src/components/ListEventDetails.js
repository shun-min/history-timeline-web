import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ListEventDetails = () => {
    const [eventDetails, setEventDetails] = useState({});
    const { id } = useParams();
    const getEventDetails = () => {
        fetch(`http://localhost:8000/api/events/${id}`)
        .then((response) => {
            if (!response.ok) {
                console.error("Can't get details...");
            } else {
                return response.json();
            }
        })
        .then((json) => {
            setEventDetails(json);
        });
    }
    
    useEffect(() => {
        getEventDetails();
    }, []);

    return (
        <>
            <div>{ eventDetails.name }</div>
            <div>{ eventDetails.description }</div>
        </>
    );
};

export default ListEventDetails;