import React from "react";
import { BACKEND_URL } from "../../constants";
import "./AboutUsStyle.css"

const AboutUS = (props) =>
{
    return (
        <div className="overall_about">
            <div className="about_block">
                <div className="containerabout1">
                    <div>
                        <img src={BACKEND_URL+props.media}className="imgabout" alt=""/>
                    </div>
                </div>
                <div className="containerabout2">
                    <div className="head_about max-sm:text-3xl mx-10" style={{lineHeight:'123%'}}>{props.name}</div>
                    <p className="para_about " style={{lineHeight:'160%'}}>{props.desc}</p>
                </div>   
            </div>
            <div className="smabout_block">
                <div className="head_about text-6xl max-sm:text-3xl">{props.name}</div>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <img src={BACKEND_URL+props.media} className="imgabout" alt="" />
                </div>
                <div>
                    <p className="para_about">{props.desc}</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUS;