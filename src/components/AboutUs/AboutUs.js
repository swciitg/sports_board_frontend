import React, { useEffect, useRef } from "react";
import { BACKEND_URL } from "../../constants";
import "./AboutUs.css"

const AboutUS = (props) =>
{   
    const ref = useRef()
    useEffect(()=>{
        if (props.size!=NaN){
            const config = props.size;
            config%2?ref.current.className+=" config-right":ref.current.className+=" config-left";
        }
      },[])
    return (

        <div className="about-section" ref={ref}>
     
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