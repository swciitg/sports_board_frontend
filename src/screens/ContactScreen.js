import React from "react";
import { useEffect, useState } from "react";
import { fetchContactPageData } from "../api";
import Navbar from "../components/Navbar/navbar";
import Loader from "../components/Loader/Loader";
import ContactComp1 from "../components/ContactComponents/contact";
import Footer from "../components/Footer/Footer";
import ContactComp2 from "../components/ContactComponents/contactBlue";
const ContactScreen = () => {
    const [ data, setData]=useState([]);
    const [isLoaded, setLoad] = useState(false);
    useEffect(() => {
        fetchContactPageData()
           .then((res) => { setData(res.data); setLoad(true) })
           .catch(setLoad(false))
   }, []) 
    console.log(data);
    return (
      isLoaded ? (<div>
        <Navbar name={"Contact Us"} slogan={"We are here for you"}/>
        {data.map((item,index)=>{
          return index%2===0?<ContactComp1 info={item}/>:<ContactComp2 info={item}/>
        })}
        <Footer />
      </div>) : 
      (<Loader/>)
      
    )
  }

  
export default ContactScreen;