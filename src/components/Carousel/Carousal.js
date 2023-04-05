import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import image1 from "../../Assests/Images/hm.png"
import image2 from "../../Assests/Images/fullHori.svg"
import image3 from "../../Assests/Images/hm.png"
import "./Carousal.css"
import { BASEAPIURL } from '../../constants';
export const Carousal = (props) => {
  const options = {
    type         : 'loop',
    gap          : '1rem',
    autoplay     : true,
    pauseOnHover : false,
    resetProgress: false,
    height       : '100vh',
    width        : '100vw',
    arrows       :  false,
    pagination   : true,
  };

  const data = [
    {
      image: image1,
      key:"1"
    },
    {
      image: image2,
      key:"2"
    },
    {
      image: image3,
      key:"3"
    },
  ]
  
console.log(data)
  return (
    <div className="">
        <div>
          <Splide
          options={ options }
          aria-labelledby="autoplay-example-heading"
          hasTrack={ false }
          >
          <div style={ { position: 'sticky'} }>
            <SplideTrack>
            { data.map( slide => (
              <SplideSlide key={ slide.key } >
                <img src={ slide.image }/>
              </SplideSlide>
            ) ) }
            </SplideTrack>
          </div>
          </Splide>
        </div>
      </div>
    );
  };

  // console.log(props.images)
  // return (
  //   <div className="">
  //       {/* <h2 id="autoplay-example-heading">Autoplay</h2> */}
  //       <div>
  //         <Splide
  //         options={ options }
  //         aria-labelledby="autoplay-example-heading"
  //         hasTrack={ false }
  //         >
  //         <div style={ { position: 'sticky'} }>
  //           <SplideTrack>
  //             { props.images.map( img => {
  //               <SplideSlide key={img.id}> 
  //               <img src={BACKEND_URL+img.url} style={{height: '100vh',width: '100vw'}}/> 
  //               </SplideSlide>
  //               }) 
  //             }
  //           </SplideTrack>
  //           </div>
  //         </Splide>
  //       </div>
  //     </div>
  //   );
  // };