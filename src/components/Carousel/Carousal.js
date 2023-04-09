import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { BACKEND_URL } from '../../constants';
import "./Carousal.css"
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
  const def= [
    {
      "id": 13,
      "url": "/uploads/ath_slide1_7d8cd3b190.jpg",
    },]
  const images=props.images?props.images:def;
console.log(images)
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
              { images.map( img => {
                return <SplideSlide key={img.id}> 
                <img src={BACKEND_URL+img.url} style={{height: '100vh',width: '100vw'}}/> 
                </SplideSlide>
                }) 
              }
            </SplideTrack>
            </div>
          </Splide>
        </div>
      </div>
    );
  };