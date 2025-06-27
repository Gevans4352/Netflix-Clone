import "./ComingNextWeek.scss";
import tudum from "../../assets/Tudum.png";
import loveInTaipei from "../../assets/Love in taipei.png";
import starlight from "../../assets/Lost i starlight.png";
import ginngeorgia from "../../assets/Ginny and georgia.png";
import ghostClient from "../../assets/Ghost Client.png";
import lastPic from "../../assets/A widows game.png";
import { FaRegBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import firstVid from "../../assets/2251680-uhd_3840_2160_25fps.mp4";
import secondVid from "../../assets/4495519-uhd_3840_2160_25fps.mp4";
import thirdVideo from "../../assets/4496580-uhd_3840_2160_25fps.mp4";
import fourthVideo from "../../assets/4836418-uhd_4096_2160_25fps.mp4";
import fifthVideo from "../../assets/5368348-hd_1920_1080_25fps.mp4";
import sixthideo from "../../assets/mixkit-stoplight-timelapse-127-hd-ready.mp4";
import { v4 as uuid } from 'uuid';
import { useState } from "react";


const ComingNextWeek = ()=>{
const [ishovered, setIsHovered] = useState(false);
const [videoId, setVideoId] = useState(0);
const nextWeek = [
  {
    id: 0,
    name: "Tudum",
    vid: firstVid,
    picture: tudum,
    time: "Live Event",
    desc: "Humorous • Captivating • Variety"
  },
  {
    id: 1,
    name: "Love In TaiPei",
    vid: fifthVideo,
    picture: loveInTaipei,
    time: "Coming in June",
    desc: "Swoonworthy • Charming • Comedy"
  },
  {
    id: 2,
    name: "A widows Game",
    vid: sixthideo,
    picture: lastPic,
    time: "Live Event",
    desc: "Psycological • Gritty • Mystery"
  },
  {
    id: 3,
    name: "Ginny and Georgina",
    vid: secondVid,
    picture: ginngeorgia,
    time: "Season 3 coming June 5",
    desc: "Romantic"
  },
  {
    id: 4,
    name: "Lost in starlight",
    vid: thirdVideo,
    picture: starlight,
    time: "Coming May 30",
    desc: "Imaginative • Intimate • Sci-fiDrama"
  },
  {
    id: 5,
    name: "Oh my Ghost Client",
    vid: fourthVideo,
    picture: ghostClient,
    time: "New Episode coming May 30",
    desc: "Exciting • Dramedy • Ghosts"
  },
]


return(
        <>
           {nextWeek.map((nextWeek) => (
           <div className="mainac">
            <div className="nextItem"
            key={nextWeek.id} 
            onMouseEnter={() => { 
            setVideoId(nextWeek.id); 
            setIsHovered(true); 
            }}onMouseLeave={() => {
            setIsHovered(false);
            }}>
              <div className="mediaNews">
              <img src={nextWeek.picture} alt="Movie image" />
              {nextWeek.id === videoId && ishovered && (
                <div className="actionLet">
                  <video autoPlay loop muted>
                    <source src={nextWeek.vid} type="video/mp4" />
                  </video>
                </div>
              )}
              </div>
              <div className="newsInfo">
                <div className="icons">
                    <div className="tooltipWrapper">
                        <FaRegBell className="iconOne"/>
                        <span className="tooltipText">Remind Me</span>
                    </div>
                    <div className="tooltipWrapper">
                        <IoIosArrowDown className="iconTwo"/>
                        <span className="tooltipText">Episode & info</span>
                    </div>
                </div>
                <div className="newsInfoTop">
                  <span>{nextWeek.time}</span>
                  <br />
                  <span>{nextWeek.desc}</span>
                </div>
              </div>
            </div>
        </div>
          ))}
        </>
        );
        };

export default ComingNextWeek;