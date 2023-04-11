import React, { useEffect, useRef } from "react";
import "./HomeEvents.css";
import { useState } from "react";
import { fetchAllEventData } from '../../api/index.js'
import Event from "./Event.js";


const HomeEvents = ({data,size}) => {

    const ref = useRef()
    useEffect(()=>{
        size%2?ref.current.className+=" color_blue":ref.current.className+=" color_white"
      },[])
    return (
            <div className="sports-event" ref={ref}>
                <div className="sports-event-detail">
                    <Event event={data[0]} id={1}></Event>
                </div>
                <div className="sports-event-detail" >
                    <Event event={data[1]} id={2}></Event>
                </div>
                <div className="sports-event-detail" >
                    <Event event={data[2]} id={3}></Event>
                </div>
                <div className="sports-event-detail" >
                    <Event event={data[3]} id={4}></Event>
                </div>
            </div>


    );
}

export default HomeEvents;