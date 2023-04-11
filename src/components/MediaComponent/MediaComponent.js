import React , { useRef,useEffect }from "react";
import { useLocation } from "react-router-dom";
import { BACKEND_URL } from "../../constants";
import Marquee from "react-marquee-slider";
import "./MediaComponent.css"


const MediaComponent = (props)=>{
    const ref1 = useRef();
    const ref = useRef();
    const refmain1 = useRef()
    const refmain2 = useRef()
    const {pathname}=useLocation();
    useEffect(()=>{
      if(pathname==="/"){
        
        ref1.current.className='smfirm-btn';
        ref.current.className='firm-btn';
      }
      else{
        ref1.current.className='hidden';
        ref.current.className='hidden'
      }
      const size=props.size
      size%2?refmain1.current.className+=" color_blue":refmain1.current.className+=" color_white"
      size%2?refmain2.current.className+=" color_blue":refmain2.current.className+=" color_white"
    },[])
        
    console.log(pathname)
    return(
     <>
        <div className="Media_blockoverall" ref={refmain1}>
            <div className="Media_block" >
                    <div className="containerteam1">
                            <div className="containerteam2">
                                <div className="head_about">{props.name}</div>
                                <p className="para_about">
                                    {props.desc}
                                </p>
                                <div className="firm-btn" ref={ref}>
                                    <a href="sports_board/clubs" className="btn" style={{textDecoration:"none"}}> Know More </a>
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
        <div className="smMedia_blockoverall" ref={refmain2}>
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
                  <a href="sports_board/clubs" className="btn" style={{textDecoration:"none"}}> Know More </a>
              </div>
            </div>
        </div>
     </>
    )

}

export default MediaComponent;