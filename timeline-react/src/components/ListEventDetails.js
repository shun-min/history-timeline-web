import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ListEventDetails = async() => {
    const [eventDetails, setEventDetails] = useState([]);
    const { id } = useParams();

    console.log("!!!", id)
    const getDetails = async () => {
        const cmd = `http://localhost:8000/events/${id}`
        const response = await fetch(cmd)
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
            setEventDetails(json);
        });
    }

    useEffect(() => {
        getDetails();
    }, []) ;

    return (
        <>
            <div>
                <h3>Event Details</h3>
                    { eventDetails.name }
                    { eventDetails.date }
                    { eventDetails.description }
            </div>
        </>
    );
};

export default ListEventDetails;