import React from "react";
import Image from "./EventImages";
import { BACKEND_URL, BASEAPIURL } from "../../constants";

const Event = ({event, id}) =>
{
    let props = {event, id};
    let eventImage = "event-image"+props.id;

    return (
        <>
            
            <div className="event" >
                <div id="event-number-counter" >
                    <ul  class="digits"> <li> 0</li> <li> 0</li> </ul>
                    <ul  class="digits"> <li> {props.id} </li><li> {props.id} </li> </ul>
                </div>
                <div className="event-name-image">
                    <div className="event-name">{event.Event_Name}</div>
                    <div className={eventImage} >
                        <Image name={props.event.Event_Name} image_url={BACKEND_URL + props.event.Thumbnail_Image.formats.thumbnail.url}></Image>
                    </div>
                </div>

            </div>
        

            <div className="new-line">
                <hr />
            </div>

       
        </>
    );
}

export default Event;