import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import './index.css';

const Footer=()=>{
    return(
        <div className="footerSection">
            <h3>Let's stay connected</h3>
            <div className='footerIcons'>
                <FaFacebook className="icon" />
                <FaSquareInstagram className="icon" />
                <FaXTwitter className="icon" />
                <IoLogoYoutube className="icon" />
                <FaLinkedin className="icon" />
            </div>
        </div>
    )
}

export default Footer;

