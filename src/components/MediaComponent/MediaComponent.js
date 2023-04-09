import React , { useRef,useEffect }from "react";
import { useLocation } from "react-router-dom";
import { BACKEND_URL } from "../../constants";
import Marquee from "react-marquee-slider";
import "./MediaComponent.css"


const MediaComponent = (props)=>{
    const ref1 = useRef();
    const {pathname}=useLocation();
    useEffect(()=>{
      if(pathname==="/"||pathname==="/stud/gymkhana/sports"){
        ref1.current.style.display='relative';
      }
      else{
        ref1.current.style.display='none';
      }
    })
    return(
     <>
        <div className="Media_blockoverall">
            <div className="Media_block" >
                    <div className="containerteam1">
                            <div className="containerteam2">
                                <div className="head_about">{props.name}</div>
                                <p className="para_about">
                                    {props.desc}
                                </p>
                                <div className="firm-btn" ref={ref1}>
                                    <a href="/clubs" className="btn" style={{textDecoration:"none"}}> Know More </a>
                                </div>
                            </div>
                    </div>
                    <div className="gridcontainer cursor-grab">
                        <div className="imggrid">
                                <Marquee>
                                    {props.media.map((image,index)=>{
                                        return index%2==0 ?<img src={BACKEND_URL+image.url} className="gridimg" alt=""/>:<></>
                                })}
                                </Marquee>
                        </div>
                        <div className="imggrid">
                            <Marquee>
                                {props.media.map((image,index) =>{
                                        return index%2 ?<img src={BACKEND_URL+image.url} className="gridimg" alt=""/>:<></>
                                    })}
                            </Marquee>
                        </div>
                    </div>
            </div>
        </div>
        <div className="smMedia_blockoverall">
            <div className="smMedia_block" >
                <div className="head_about max-sm:text-6xl">{props.name}</div>
                <div>
                    <p className="para_about">
                            {props.desc}
                    </p>
                </div>
                <div className="smgrid flex flex-row overflow-x-scroll">
                    {props.media.map((image,index)=>{
                            return <img src={BACKEND_URL+image.url} className="gridimg" alt=""/>
                        })}
                </div>
            </div>
            <div>
              <div className="smfirm-btn" ref={ref1}>
                  <a href="/clubs" className="btn" style={{textDecoration:"none"}}> Know More </a>
              </div>
            </div>
        </div>
     </>
    )

}

export default MediaComponent;