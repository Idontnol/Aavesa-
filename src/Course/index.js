import { GiMagnifyingGlass } from "react-icons/gi";
import { FaMicrophone } from "react-icons/fa";
import { IoNewspaperSharp } from "react-icons/io5";
import { FaPenFancy } from "react-icons/fa";
import './index.css';

const Course=()=>{
    return(
        <div className="CourseContainer">
            <h2 className="courseHead">Become an Investigative Journalist: </h2><span className="courseHeader">Learn from Bob Woodward </span>
            <ul className="bulletPoints">
                <li >
                <GiMagnifyingGlass />{" "}
                <span>Learn Bob Woodward's proven methods for finding leads, developing sources, and breaking major stories</span></li>
                <li><FaMicrophone />{" "}
                    Master the art of getting whistleblowers to talk, extracting key information from sources, and conducting impactful interviews.</li>
                <li><IoNewspaperSharp />{" "}
                    Develop rigorous research techniques to verify information, identify hidden patterns, and build a strong case for your story.</li>
                <li><FaPenFancy />{" "}
                    Craft compelling narratives that captivate your audience, inform public discourse, and demand action.</li>
            </ul>
            
        </div>
    )
}

export default Course;