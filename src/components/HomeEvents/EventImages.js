import React from "react";

function Image(props)
{
    
    return(
     
        <div className="image">
   
      <div className="top-left text-white font-medium absolute image-font " >{props.name}</div>  
         <img  src={props.image_url} /></div>
         
      
    );
}

export default Image;