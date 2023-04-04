import React, { useEffect } from "react";
import "./New.css";
import { useState } from "react";
import { fetchAllEventData } from '../../api/index.js'
import Event from "./Event.js";


const HomeEvents = () => {
    const [data, setData] = useState([]);
    const [isLoaded, setLoad] = useState(false);

    useEffect(() => {
        fetchAllEventData()
            .then((res) => { setData(res.data.data); setLoad(true) })
            .catch(setLoad(false))
    }, [])

    return (
        isLoaded ?
            (<div className="new-block">
                <div className="eve-div">
                    <Event event={data[0]} id={1}></Event>
                </div>
                <div className="eve-div" >
                    <Event event={data[1]} id={2}></Event>
                </div>
                <div className="eve-div" >
                    <Event event={data[2]} id={3}></Event>
                </div>
                <div className="eve-div" >
                    <Event event={data[3]} id={4}></Event>
                </div>
            </div>)
            : <></>
        // (<Loader/>)   

    );
}

export default HomeEvents;