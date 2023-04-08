import React from 'react'
import { SiLinkedin } from "react-icons/si";
import { GrMail } from "react-icons/gr";
import { IoMdCall } from "react-icons/io";
import "./Contact.css"
import { BACKEND_URL } from '../../constants';
const ContactComp1 = (props)=>{
    
    return(
        <>
        <div className='container1'>
               
                    <div className='image' >
                   
                        <img  src={BACKEND_URL+props.info.Image.url} alt=""/>
                    
                    </div>
                    <div className='details'>
                            <div className='post'
                              style={{margin:"10px"}}>{props.info.Position_Name}
                            </div>
                            <div className='post-details'>
                                    {props.info.Name} <br/>{props.info.Department}<br/><br/>"{props.info.Slogan}"<br/><br/> 
                            </div>
                            <div className='icons'>
                                        <a href={"tel:"+props.info.Phone_Num} className='ico2'><IoMdCall size={50}/></a>
                                        <a href={"mailto:"+props.info.Mail_ID} className='ico2'><GrMail size={50}/></a>
                                        <a href={props.info.Linkedin_ID} className='ico2'><SiLinkedin size={50}/></a>
                            </div>
            
                    </div>
            </div>
         
        </>
 );
}
export default ContactComp1;