import React from "react"
import  "./Loader.css"

const Loader = (props) =>{
    return(
        <div className="loader">
          <div className="wrapper-load">
            <span className="circle-lpad circle-1"></span>
            <span className="circle-load circle-2"></span>
            <span className="circle-load circle-3"></span>
            <span className="circle-load circle-4"></span>
            <span className="circle-load circle-5"></span>
            <span className="circle-load circle-6"></span>
            <span className="circle-load circle-7"></span>
            <span className="circle-load circle-8"></span>
        </div>
      </div>
    )
}
export default Loader;