import '../index.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListEvents from './ListEvents';

const ListTimelines = () => {
    const [timelines, setTimelines] = useState([]);
    const getTimelines = async () => {
        await fetch("http://localhost:8000/api/timelines")
        .then((response) => {
            if (!response.ok) {
                console.error("Can't get timeline...");
            } else {
                return response.json();
            }       
        })
        .then((json) => {
            setTimelines(json);
        });
    }
    useEffect(() => {
        getTimelines();
    }, []);


    return (<>
        <div className='tmln tmln--box tmln--hr'>
            <ul class="tmln__list">
                {
                    timelines.map(timeline => 
                        <div className='tmln__item-headline'>
                            { timeline.name }
                            <ul>
                            <ListEvents></ListEvents>    
                            </ul>
                        </div>
                    )
                }
            </ul>
        </div>
    </>);
}

export default ListTimelines;