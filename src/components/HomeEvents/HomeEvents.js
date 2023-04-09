import React, { useEffect } from "react";
import "./eventStyle.css";
import { useState } from "react";
import { fetchAllEventData } from '../../api/index.js'
import Event from "./Event.js";


const HomeEvents = ({info}) => {

    return (
        <div className="new-block">
            <div className="eve-div">
                <Event event={info[0]} id={1}></Event>
            </div>
            <div className="eve-div" >
                <Event event={info[1]} id={2}></Event>
            </div>
            <div className="eve-div" >
                <Event event={info[2]} id={3}></Event>
            </div>
            <div className="eve-div" >
                <Event event={info[3]} id={4}></Event>
            </div>
        </div>  
    );
}

export default HomeEvents;