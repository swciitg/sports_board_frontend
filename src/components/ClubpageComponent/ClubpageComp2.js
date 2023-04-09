
import React , { useRef }from "react";
import { BACKEND_URL } from "../../constants";
import "./clubcomp.css";
const ClubpageComp2 = (props) => {
    return ( 
        <>
        <div className="cnrg_overall">
            <div className="crng_block">
                <div className="flex flex-col pr-6 w-[90%]">
                <div className="head_about" style={{fontSize: '500%'}}>{props.name}</div>
                    <p className="para_about" style={{lineHeight:'160%'}} >
                    {props.desc} 
                    </p>
                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                    <img src={BACKEND_URL+props.media}className="img1" alt="" />
                </div>
            </div>
        </div>
            <div className="smcnrg_overall">
                <div className="smcnrg_block">
                <div className="head_about text-6xl max-sm:text-3xl">{props.name}</div>
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <img src={BACKEND_URL+props.media} className="gridimg" alt="" />
                    </div>
                    <div className="flex flex-col pr-6">
                        <p className="para_about">
                        {props.desc}  
                        </p>
                    </div>
                </div>
            </div>    
            </>
    );
}
 
export default ClubpageComp2;