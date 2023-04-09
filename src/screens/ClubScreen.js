import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchClubData } from "../api";
import Navbar from "../components/Navbar/navbar";
import AboutUS from "../components/AboutUs/AboutUs";
import MediaComponent from "../components/MediaComponent/MediaComponent";
import Footer from "../components/Footer/Footer";
import Loader from "../components/Loader/Loader";
const ClubScreen = () => {
    
    const [data, setData] = useState("");
    const {id}=useParams()
    const [isLoaded, setLoad] = useState(false);
    useEffect(() => {
        fetchClubData(id)
           .then((res) => { setData(res.data[0]); setLoad(true); })
           .catch(setLoad(false))
   }, [])
   console.log(data)
   let col1 =1;
   return (
    isLoaded ? (<div>
        <Navbar name={data.ClubName + "CLUB"} slogan={data.ClubSlogan} carousel={[data.Background_Image]}/>
        {data.Components.map((item,index) =>{
            return <AboutUS name={item.Component_name} desc={item.Component_data} media={item.Component_Image.url}/>
        })}
        {data.Media_Components.map((item,index) =>{
            return <MediaComponent name={item.Component_name} desc={item.Media_Description} media={item.Images} />
        })}
        
        <Footer />
       </div> ):
       (<Loader/>) 
    );  

}
export default ClubScreen;