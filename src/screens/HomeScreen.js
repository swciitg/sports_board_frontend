
import React, { useEffect,useState } from "react";
import HomeEvents from "../components/HomeEvents/HomeEvents";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/navbar";
import { fetchHomePageData } from "../api";

const HomeScreen = () => {
    const [data, setData] = useState([]);
    const [isLoaded, setLoad] = useState(false);

    useEffect(() => {
        fetchHomePageData()
            .then((res) => { setData(res.data); setLoad(true) })
            .catch(setLoad(false))
    }, []) 
    console.log(data)
   return (
        // <>           
        //     <div>
        //         <HomeEvents></HomeEvents>
        //         <Footer></Footer>
        //     </div>
        // </>
        <div>
            <Navbar 
                name = {data.HomePage_Heading}
                slogan = {data.HomePage_Slogan}
                carousel ={data.carousel}
            />

        </div>
    );  
}
export default HomeScreen;
