import React from "react";
import Image from "../Image";
import { BACKEND_URL, BASEAPIURL } from "../../constants";

const Event = ({event, id}) =>
{
    let props = {event, id};

    function handleMouseEnter()
    {
        const image = document.getElementsByClassName(`img-two${props.id}`);
        console.log(image[0]);
        image[0].style = imageStyle_visible;
    }

    function handleMouseLeave()
    {
        const image = document.getElementsByClassName(`img-two${props.id}`);
        console.log(image[0]);
        image[0].style = imageStyle_hidden;
    }


    let imageStyle_hidden = {
        "visibiliy":"hidden"
    }

    let imageStyle_visible = {
        "visibility":"visible",
        "transition":"cubic-bezier(.04, .74, .83, .67)",
        "animation-name": "moveUp",
        "animation-duration": "0.4s",
        "animation-timing-function": "cubic-bezier(0.165, 0.84, 0.44, 1)",
    }

    let imageClass = "img-two"+props.id;

    return (
        <>
                <div className="another">
                    <div className="event" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <div id="eve-counter" class="animated">
                            <ul id="digit" class="digits digits-third luckie"> <li> 0</li> <li> 0</li> </ul>
                            <ul id="digit" class="digits digits-third luckie"> <li> {props.id} </li><li> {props.id} </li> </ul>
                        </div>
                        <div>
                            <h1 className="eve-name">{event.Event_Name}</h1>
                        </div>
                    </div>
                </div>
                <div className="test">
                    <div className="new-line">
                        <hr/>
                    </div>
                    <div className={imageClass} style={{display:"none"}}> 
                        <Image name={props.event.Event_Name} image_url = {BACKEND_URL+props.event.Thumbnail_Image.formats.thumbnail.url}></Image>
                    </div> 
                </div> 
        </>
    );
}

export default Event;