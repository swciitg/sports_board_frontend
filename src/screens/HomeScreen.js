import React from "react";
import HomeEvents from "../components/HomeEvents/HomeEvents";
import Footer from "../components/Footer/Footer";

const HomeScreen = () => { 
   return (
        <>           
            <div>
                <HomeEvents></HomeEvents>
                <hr/>
                <Footer></Footer>
            </div>
        </>
    );  
}
export default HomeScreen;
