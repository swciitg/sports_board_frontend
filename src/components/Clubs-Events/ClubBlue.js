import background from '../../assets/Events/Background.png';
import { motion, Variants } from "framer-motion";
import './Clubs.css'
import React from 'react';

import { BACKEND_URL } from '../../constants';
/*const cardVariants: Variants = {
  offscreen: {
    x: 300
  },
  onscreen: {
    x: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};*/
function ClubBlue(props) {
  console.log(props.info);
  return (
    <div className="club-event-container " style={{flexDirection:'row-reverse'}}>
     
      <div  class="club-event-background">  
      
      </div>
     <div class="flex club-event-detail1" style={{flexDirection:'row-reverse'}}>
       <motion.div className="club-event-image"
       initial={{opacity:0, x:-100,}} 
         whileInView={{opacity:1,x:0}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.25}}> 
            <div class="absolute mt-6 ml-4  duration-500 opacity-100  text-white font-sans font-bold " style={{fontSize:'2vw'}}>
         {props.info.ClubName?props.info.ClubName:props.info.Event_Name}
         </div>
         <div class=" absolute  text-white font-bold font-sans  opacity-100 duration-500 " style={{bottom:'4%',right:'4%',fontSize:'2vw'}}>
          {(props.index+1)<10?"0"+(props.index+1):props.index+1}
        </div>
       <img   src={BACKEND_URL+props.info.Thumbnail_Image.url}  class=" z-48"></img>
     
       
      </motion.div>
      <motion.div className="club-event-desc" initial={{opacity:0, x:100,}} 
         whileInView={{opacity:1,x:0}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.25}}>
        <div class="font-bold lg:text-5xl md:text-4xl sm:text-2xl xl:text-6xl 2xl:text-7xl ">
              {props.info.ClubName?props.info.ClubName:props.info.Event_Name}
        </div>
        <div className="thumbnail-desc">
                {props.info.Thumbnail_Content}
        </div>
      </motion.div>
     </div>
    

   

    </div>

  );
}

export default ClubBlue;