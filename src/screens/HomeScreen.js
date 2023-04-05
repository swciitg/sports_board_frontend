import React, { useEffect,useState } from "react";
import HomeEvents from "../components/HomeEvents/HomeEvents";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/navbar";
import { fetchHomePageData } from "../api";
import MediaComponent from "../components/MediaComponent/MediaComponent";
import Loader from "../components/Loader/Loader";

const HomeScreen = () => {
    const [data, setData] = useState("");
    const [isLoaded, setLoad] = useState(false);

    useEffect(() => {
         fetchHomePageData()
            .then((res) => { setData(res.data); setLoad(true) })
            .catch(setLoad(false))
    }, []) 

    return ( isLoaded ?
        <div>
            <Navbar 
                name = {data.HomePage_Heading}
                slogan = {data.HomePage_Slogan}
                carousel ={data.carousel}
            />
            <HomeEvents></HomeEvents>
            {data.Media_Component.map((item,index) =>{
            return <MediaComponent name={item.Component_name} desc={item.Media_Description} media={item.Images} />
            })}
            <Footer></Footer>
        </div>
        : <Loader/>
    );  
}
export default HomeScreen;
