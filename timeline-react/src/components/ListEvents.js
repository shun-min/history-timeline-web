import '../index.css';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ListEvents = () => {
    const [historyEvents, setHistoryEvents] = useState([]);
    const { timelineid } = useParams();
    const getEvents = async () => {
        console.log(timelineid)
        await fetch(`http://localhost:8000/api/timeline/${timelineid}/events`)
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


    return (<>
        <div className='tmln tmln--box tmln--hr'>
            <ul class="tmln__list">
                {
                    historyEvents.map(historyEvent => 
                        <li class="tmln__item tmln__item--active">
                            <div className='tmln__item-headline'>
                                <Link to={`/details/${historyEvent.id}`}>{ historyEvent.name }</Link>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    </>);
}

export default ListEvents;