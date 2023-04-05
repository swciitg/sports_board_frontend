import React from "react";
import Image from "../Image";
import { BACKEND_URL, BASEAPIURL } from "../../constants";

const Event = ({event, id}) =>
{
    let props = {event, id};

    return (
        <>
                <div className="another">
                    <div className="event">
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
                    <div className="img-two"> 
                        <Image name={props.event.Event_Name} image_url = {BACKEND_URL+props.event.Thumbnail_Image.formats.thumbnail.url}></Image>
                    </div> 
                </div> 
        </>
    );
}

export default Event;