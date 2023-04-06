import React from 'react'
import { SiLinkedin } from "react-icons/si";
import { GrMail } from "react-icons/gr";
import { IoMdCall } from "react-icons/io";
import "./contact.css"
import { BACKEND_URL } from '../../constants';
const ContactComp2 = (props)=>{
    return(
        <>
        <div className='Overall_ContactBlue'>
                <div className='Contact_blockBlue'>
                    <div className='main_chair' >
                        <div className='image_container'>
                        <img className='main_image' src={BACKEND_URL+props.info.Image.url} alt=""/>
                        </div>
                    </div>
                    <div className='flexing'>
                            <div className='heading'>
                                <p style={{margin:"10px"}}>{props.info.Position_Name}</p>
                            </div>
                            <div className='para'>
                                    {props.info.Name} <br/>{props.info.Department}<br/><br/>"{props.info.Slogan}"<br/><br/> 
                            </div>
                            <div className='icons'>
                                        <a href={"tel:"+props.info.Phone_Num} className='ico2'><IoMdCall size={50}/></a>
                                        <a href={"mailto:"+props.info.Mail_ID} className='ico2'><GrMail size={50}/></a>
                                        <a href={props.info.Linkedin_ID} className='ico2'><SiLinkedin size={50}/></a>
                            </div>
                    </div>
                    </div>
            </div>
            <div className="smOverallContactBlue">
                    <div className="smContactBlock" >
                        <div className='heading'>
                                    <p style={{margin:"10px"}}>{props.info.Position_Name}</p>
                                </div>
                        </div>
                        <div className='main_chair' >
                            <div className='image_container'>
                                <img className='main_image' src={BACKEND_URL+props.info.Image.url} alt=""/>
                                <div className='para'>
                                    {props.info.Name} <br/>
                                </div>
                            </div>
                        </div>
                        <div className='desc'>
                            <div className='para'>
                                    "{props.info.Department}"
                            </div>
                        </div>
                        <div>
                            <div className='desc slogan'>
                                "{props.info.Slogan}"<br/><br/> 
                            </div>
                        </div>
                        <div className='icons'>
                            <a href={"tel:"+props.info.Phone_Num} className='ico2'><IoMdCall size={50}/></a>
                            <a href={"mailto:"+props.info.Mail_ID} className='ico2'><GrMail size={50}/></a>
                            <a href={props.info.Linkedin_ID} className='ico2'><SiLinkedin size={50}/></a>
                        </div>
            </div>
        </>
 );
}
export default ContactComp2;
