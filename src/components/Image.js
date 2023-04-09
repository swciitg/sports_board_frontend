import React from "react";

function Image(props)
{
    
    return(
        <div className="image">
            <img src={props.image_url} style={{boxShadow:"0px 0px 20px #7BB9C4", marginRight:"17vw", width:"270px"}} className="mr-10"/>
            <div className="top-right text-black font-medium font-sans text-[20px]">{props.name}</div>  
        </div>
    );
}

export default Image;