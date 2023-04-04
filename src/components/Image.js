import React from "react";

function Image(props)
{
    
    return(
     
        <div className="container w-80 h-80">
        <img  src={props.image_url} />
            <div className="top-left text-white font-medium ml-6 ">{props.name}</div>  
        </div>
    );
}

export default Image;