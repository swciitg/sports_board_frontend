import React from 'react'
import { SiLinkedin } from "react-icons/si";
import { GrMail } from "react-icons/gr";
import { IoMdCall } from "react-icons/io";
import "./contact.css"
import { BACKEND_URL } from '../../constants';
const ContactComp2 = (props)=>{
    return(
        <>
                 
            <div className='container1-blue'>
               
               <div className='image' >
              
                   <img  src={BACKEND_URL+props.info.Image.url} alt=""/>
               
               </div>
               <div className='details'>
                       <div className='post'
                         style={{margin:"10px",color:"#f4f4f4"}}>{props.info.Position_Name}
                       </div>
                       <div className='post-details'style={{color:"#f4f4f4"}}>
                               {props.info.Name} <br/>{props.info.Department}<br/><br/>"{props.info.Slogan}"<br/><br/> 
                       </div>
                       <div className='icons'>
                                   <a href={"tel:"+props.info.Phone_Num} className='ico2' style={{color:"#f4f4f4"}}><IoMdCall size={50}/></a>
                                   <a href={"mailto:"+props.info.Mail_ID} className='ico2' style={{color:"#f4f4f4"}}><GrMail size={50}/></a>
                                   <a href={props.info.Linkedin_ID} className='ico2' style={{color:"#f4f4f4"}}><SiLinkedin size={50}/></a>
                       </div>
       
               </div>
       </div>
          
        </>
 );
}
export default ContactComp2;
