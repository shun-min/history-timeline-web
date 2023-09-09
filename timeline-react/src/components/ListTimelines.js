import '../index.css';
import '../vertical-timeline.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListEvents from './ListEvents';

const ListTimelines = () => {
    const [timelines, setTimelines] = useState([]);
    const getTimelines = async () => {
        await fetch("http://localhost:8000/router/timelines")
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
        <div>
            {
                timelines.map(timeline => 
                    <div>
                        <Link to={`/events/${timeline.id}`}>{ timeline.name }</Link>
                        {/* <ListEvents></ListEvents>   */}
                        {/* <ul>
                            <li>
                                <ListEvents></ListEvents>    
                                <Link to={`/events/${timeline.id}`}></Link>
                            </li>
                        </ul> */}
                    </div>
                )
            }
        </div>
    </>);
}

export default ListTimelines;