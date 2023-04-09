import React, { useState } from "react";
import Image from "../Image";
import { BACKEND_URL, BASEAPIURL } from "../../constants";

const Event = ({event, id}) =>
{
    let imageStyle_hidden = {
        display:"none",
    }

    let imageStyle_visible = {
        visibility:"visible",
        "z-index":"1",
        position: "fixed",
        transition:"cubic-bezier(.04, .74, .83, .67)",
        "animation-name": "moveUp",
        "animation-duration": "0.5s",
        "animation-timing-function": "cubic-bezier(0.165, 0.84, 0.44, 1)",
        top:"30vh",
        left:"50vw",
        height: "30vh",
    }

    const [style, setStyle] = useState(imageStyle_hidden);

    function handleMouseEnter()
    {
        setStyle(imageStyle_visible);
    }

    function handleMouseLeave()
    {
        setStyle(imageStyle_hidden);
    }

    let imageClass = "img-two"+id;

    return (
        <>
            <div className="another" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="event">
                    <div id="eve-counter" class="animated">
                        <ul id="digit" class="digits digits-third luckie"> <li> 0</li> <li> 0</li> </ul>
                        <ul id="digit" class="digits digits-third luckie"> <li> {id} </li><li> {id} </li> </ul>
                    </div>
                    <div>
                        <h1 className="eve-name">{event.Event_Name}</h1>
                    </div>
                </div>
                <div className={imageClass} style={style}> 
                    <Image name={event.Event_Name} image_url = {BACKEND_URL+event.Thumbnail_Image.formats.thumbnail.url}></Image>
                </div> 
            </div>
            <div className="new-line">
                <hr/>
            </div>
        </>
    );
}

export default Event;