import React from "react";
import "./footer.css";
import gymkhanalogo from "../../assets/Footer/footer.png"
import youTubelogo from "../../assets/Footer/YoutubeLogo.png"
import twitterlogo from "../../assets/Footer/TwitterLogo.png"
import instalogo from "../../assets/Footer/InstagramLogo.png"
import linkedInlogo from "../../assets/Footer/LinkdinLogo.png"
import SWCLogo from "../../assets/Footer/SwcLogo.png"
import copyRightImage from "../../assets/Footer/CopyRightImage.svg"


const Footer = (props) =>
{

    let size = props.size;
    let color = "";
    if(size & 1) color = "#7BB9C4";
    else color = "#f4f4f4";

    return (
        <div id="footer-container"  className="flex flex-row" style={{backgroundColor: color}}>
            <div id="students-ghymkhana-council" className="flex">
                <div className="ghymkhana-logo "><img  src={gymkhanalogo} alt=""/></div>
                <div className="flex flex-col flex-wrap items-start justify-start">
                    <div className="ghymkhana-details flex flex-col flex-wrap items-start justify-start gap-1  ">
                        <div id="heading">
                            <h1 className="text-2xl font-extrabold ">STUDENTS GYMKHANA</h1>
                            <h1 className=" text-2xl   font-extrabold">COUNCIL</h1>
                        </div>
                        <div id="details">
                        <p align="left"  className="text-sm">OLD SAC Building IIT Guwahati,<br/> Guwahati,<span > Assam - 781039</span></p>
                        <p align="left"  className="text-sm">+91 -361-258162<br/>sgc@iitg.ac.in</p>
                        </div>
                        <div id="social-media-links" className="flex flex-row pt-3  ">
                        <a href="https://www.youtube.com/@sportsboardiitguwahati"><img  className="h-8 w-8" src={youTubelogo} alt=""/></a>
                        <a href="https://twitter.com/IITGuwahati"><img  className="h-8 w-8" src={twitterlogo} alt=""/></a>
                        <a href="https://instagram.com/sports_iit_guwahati?igshid=YmMyMTA2M2Y="><img   className="h-8 w-8" src={instalogo} alt=""/></a>
                        <a href="https://www.linkedin.com/school/iitg/"><img  className="h-8 w-8" src={linkedInlogo} alt="" /> </a>
                    </div>
                    </div>
                
                </div>
            </div>
            <div id="students-web-committee" className=" flex flex-col   gap-2">
                <div id="swc-details" className="flex flex-row  ">
                    <div>
                        <img  className="h-16 w-16" src={SWCLogo} alt=""></img>
                    </div>
                    <div align="left"  className="text-sm  ">Maintained and Developed <span>by Students</span><br/>Web committee<br/>IIT Guwahati</div>
                </div>
                <div id="copy-right" className="flex flex-row">
                    <img  src={copyRightImage}/>
                    <p  className="text-sm">Students Gymkhana Council <span id="content-four"> Council IIT Guwahati</span></p>
                </div>
            </div>
        </div>
    );
}

export default Footer;