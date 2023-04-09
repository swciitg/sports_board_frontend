import React from "react";
import { BACKEND_URL } from "../../constants";
import "./AboutUs.css"

const AboutUS = (props) =>
{
    return (
        <div className="about-section">
     
                <div className="about-image">
                 
                        <img src={BACKEND_URL+props.media} alt=""/>
              
                </div>
                <div className="about-details">
                    <div className="about-heading max-sm:text-3xl " >{props.name}</div>
                    <div className="about-desc " >{props.desc}</div>
                </div>   
   
        </div>
    );
}

export default AboutUS;