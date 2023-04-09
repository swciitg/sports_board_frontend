import React, { useEffect,useState } from "react";
import HomeEvents from "../components/HomeEvents/HomeEvents";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/navbar";
import { fetchHomePageData } from "../api";
import { fetchAllEventData } from "../api";
import MediaComponent from "../components/MediaComponent/MediaComponent";
import Loader from "../components/Loader/Loader";
import AboutUS from "../components/AboutUs/AboutUs";

const HomeScreen = () => {
    const [data, setData] = useState("");
    const [eventData, setEventData] = useState("");
    const [isLoaded, setLoad] = useState(false);

    useEffect(() => {
         fetchHomePageData()
            .then((res) => { setData(res.data); setLoad(true); })
            .catch(setLoad(false))
    }, []) 


    useEffect(() => {
        fetchAllEventData()
            .then((res) => { setEventData(res.data.data);})
            .catch(setLoad(false))
    }, [])

    console.log(
        data.Component
    );

    return ( isLoaded ?
        <div>
            <Navbar 
                name = {data.HomePage_Heading}
                slogan = {data.HomePage_Slogan}
                carousel ={data.carousel}
            />
            {data.Component.map((item) => 
            <AboutUS 
                name = {item.Component_name} 
                desc = {item.Component_data} 
                media = {item.Component_Image.url}
            />)}
            <HomeEvents 
                info={eventData}
            />
            {data.Media_Component.map((item) =>
            <MediaComponent 
                name={item.Component_name} 
                desc={item.Media_Description} 
                media={item.Images} 
            />)}
            <Footer></Footer>
        </div>
        : <Loader/>
    );  
}
export default HomeScreen;
