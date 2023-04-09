import bg from '../../assets/Images/Rectangle 351.png';
import hori from '../../assets/Images/Group 89.png';
import { motion, Variants } from "framer-motion";
import './animation.css'
import React from 'react';
import { useEffect, useState } from "react";
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
function Animation2(props) {
  console.log(props.info);
  return (
    <div className="App">
      <div  class="flex relative flex-row-reverse dnb">
      <div  class="">  
        <img  src={bg} className=" bg"></img>
      </div>
     <div class="flex gap-8 absolute  textbox flex-row-reverse">
       <motion.div className="relative group"
       initial={{opacity:0, x:100,}} 
         whileInView={{opacity:1,x:0}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.25}}> 
       <img   src={BACKEND_URL+props.info.Thumbnail_Image.url} alt="basket" class="image z-12"></img>
       <motion.div class=" absolute  duration-500  group-hover:opacity-100 opacity-0  text-white font-sans font-bold name"
         transition={{type:'spring'}}>
          {props.info.ClubName?props.info.ClubName:props.info.Event_Name}
        </motion.div>
        <div class=" absolute  text-white font-bold font-sans group-hover:opacity-100 opacity-0 duration-500 number">
          {(props.index+1)<10?"0"+(props.index+1):props.index+1}
        </div>
      </motion.div>
      <motion.div initial={{opacity:0, x:-100,}} 
         whileInView={{opacity:1,x:0}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.25}} class="flex flex-col sm:gap-3 gap-1">
        <div class="font-bold lg:text-5xl md:text-4xl sm:text-2xl xl:text-6xl 2xl:text-7xl">
                {props.info.ClubName?props.info.ClubName:props.info.Event_Name}
        </div>
        <div class=" ThumbContent h-64 ">
                {props.info.Thumbnail_Content}
        </div>
      </motion.div>
     </div>
     </div>

     <div class=" geet">
      <motion.div class= "group"
         initial={{opacity:0, y:50,}} 
         whileInView={{opacity:1,y:10}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.4}}>
         {/* <img  class=" mt-12 mb-10  mobimage ml-6 relative  "   src={"http://localhost:1337"+props.info.Thumbnail_Image.url} alt ="my aqua team"/> */}
         <img  class=" mt-6 mb-10 mobimage  relative float-center ml-auto mr-auto "   src={BACKEND_URL+props.info.Thumbnail_Image.url} alt ="my aqua team"/>
         <div class="absolute mt-6 mb-10 mobName duration-500 opacity-100  text-white font-sans font-bold ">
         {props.info.ClubName?props.info.ClubName:props.info.Event_Name}
         </div>
         <div class=" absolute  text-white font-bold font-sans  opacity-100 duration-500 mobNumber mt-6 mb-10">
          {(props.index+1)<10?"0"+(props.index+1):props.index+1}
        </div>
      </motion.div>
      </div>
      
    </div>

  );
}

export default Animation2;