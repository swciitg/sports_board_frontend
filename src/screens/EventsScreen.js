
import { fetchAllClubsData, fetchAllEventData } from "../api";
import React, { useEffect,useState } from "react";
import Navbar from "../components/Navbar/navbar";
import Animation2 from "../components/Clubs-Events/animation2";
import Animation from "../components/Clubs-Events/animation";
import Footer from "../components/Footer/Footer";
import Loader from "../components/Loader/Loader";
import { BASEURL } from "../constants";
const EventsScreen = () => {
    const [data, setData] = useState();
    const [images, setImages] = useState();
    const [isLoaded, setLoad] = useState(false);
    useEffect(() => {
        fetchAllEventData()
           .then((res) => { setData(res.data.data); setImages(res.data.images.carousel
            ); setLoad(true); })
           .catch(setLoad(false))
   }, []) 
   console.log(data)
   console.log(images)
   return (
        
            isLoaded ?  <div>
          <Navbar name={"Events Pages"} carousel={images}/>
          <div className="flex flex-col gap-4 mt-12 ">
          {data.map((item,index) =>{
            return (index)%2===0?<a href={BASEURL+"/events/"+item.Event_Name}><Animation info={item} index={index}/></a>:<a href={BASEURL+"/events/"+item.Event_Name}><Animation2 info={item} index={index}/></a>
          })}
          </div>
          <Footer></Footer>
          </div>:
          (<Loader/>) 
    );  

}
export default EventsScreen;