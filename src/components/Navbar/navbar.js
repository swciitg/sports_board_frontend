
import React, { useEffect, useRef, useState } from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Carousal } from "../Carousel/Carousal";
import "./navbar.css"
const Navbar = (props) => {
  const [open,setOpen] = useState(false);
  const ref=useRef();
  const {pathname}=useLocation();
  useEffect(()=>{
    if(pathname==="/clubs"||pathname==="/events"){
      ref.current.style.position='relative';
    }
    else{
      ref.current.style.position='sticky';
      ref.current.style.top='0';
    }
  })
  const activeNavlinkStyle=( { isActive })=>{
        return{
          color: isActive ? "#7BB9C4":"white",
          textDecorationLine: isActive ?"underline":"none",
        }
  }
  return (

    <div ref={ref}>
          <div className="nav">
            <Carousal images={props.carousel}/>
            <div className="navheader">
              <div className="find"> 
                <a className="inactive" href="#"> SPORTS BOARD</a>
                <a className="inn" href="#">IIT GUWAHATI </a>
              </div>
                <div className="navurlsdesk">
                <NavLink to="/contacts" style={activeNavlinkStyle}>Contacts</NavLink>
                <NavLink to="/clubs" style={activeNavlinkStyle}>Clubs</NavLink>
                <NavLink to="/events" style={activeNavlinkStyle}>Events</NavLink>
                <NavLink  to="/"   style={activeNavlinkStyle}> Home </NavLink>
              </div>
            </div>
            <div className="align">   <h3 className="texting">{props.name}</h3>
                <h6 className="text">{props.slogan}</h6>
            </div>
        </div>
        
        <div className="navigation">
          <Carousal />
          <div className="mainbar">
              <div className="logosm">
                <a className="inactivesm" href="#"> SPORTS BOARD</a>
                <a className="innsm" href="#">IIT GUWAHATI </a>  
              </div>
          
              <div className="dropdown">
                <div className="dropbtn"  onClick={()=>{setOpen(!open)}}>
                    <h>  <GiHamburgerMenu /></h>
                </div>

            <div className={`dropdown-menu ${open ? 'active': 'inactive'}`}>
              <div  className="dropdown-content">
                <NavLink  to="/"   style={isActive => ({
                  color: isActive ? "black" : "green"})}> Home </NavLink>
                <NavLink to="/events" style={isActive => ({
                  color: isActive ? "black" : "green"})}>Events</NavLink>
                <NavLink to="/clubs" style={isActive => ({
                  color: isActive ? "black" : "green"})}>Clubs</NavLink>
                <NavLink to="/contacts" style={isActive => ({
                  color: isActive ? "black" : "green"})}>Contacts</NavLink>
                </div>
            </div>
        </div>
             
        </div>
          </div>
          <div className="bodys"> 
           <div className="bodyss"> <span> {props.name}</span></div>
           <div className="bodysss">{props.slogan}</div>         
          </div>
          <div className="last">
            <div className="div_image"></div>
          </div>
       
    </div>
  )
}
export default Navbar;
