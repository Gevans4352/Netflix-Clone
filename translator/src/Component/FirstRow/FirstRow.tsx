import "./FirstRow.scss";
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
import loveInTaipei from "../../assets/Love in taipei.png";
import starlight from "../../assets/Lost i starlight.png";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { useContent } from "../../Context";

const FirstRow = ()=>{
     const { registerContent } = useContent();
    const [ishovered, setIsHovered] = useState(false);
const [videoId, setVideoId] = useState(0);
const firstRow = [
  {
    id: 0,
    name: "ginny n georgia ",
    vid: firstVid,
    picture: ginngeorgia ,
    time: " 1 season",
    desc: "Romantic • Captivating • Variety"
  },
  {
    id: 1,
    name: "Love In TaiPei",
    vid: fifthVideo,
    picture: ghostClient,
    time: "Coming in June",
    desc: "Swoonworthy • Charming • Comedy"
  },
  {
    id: 2,
    name: "A widows Game",
    vid: secondVid,
    picture: lastPic,
    time: "8 episodes",
    desc: "Psycological • Gritty • Mystery"
  },
  {
    id: 3,
    name: "Hailey bailey fall",
    vid: thirdVideo,
    picture: ginngeorgia,
    time: "Season 3 coming June 5",
    desc: "Romantic"
  },
  {
    id: 4,
    name: "Lost in starlight",
    vid: thirdVideo,
    picture: loveInTaipei,
    time: "20 episodes",
    desc: "Imaginative • Intimate • Sci-fiDrama"
  },
  {
    id: 5,
    name: "Oh my Ghost Client",
    vid: fourthVideo,
    picture: ghostClient,
    time: "New Episode coming May",
    desc: "Exciting • Dramedy • Ghosts"
  },
]
useEffect(() => {
  registerContent('firstRow', firstRow);
}, 
[registerContent, firstRow]);
    return(
        <>
         {firstRow.map((firstRow) => (
            <div className="rowItem"
              key={firstRow.id} 
              onMouseEnter={() => { 
              setVideoId(firstRow.id); 
              setIsHovered(true); 
              }}onMouseLeave={() => {
              setIsHovered(false);
              }}
            >
              <div className="RowListItem">
              <img src={firstRow.picture} alt="Movie image" />
              {firstRow.id === videoId && ishovered && (
                <div className="actionLet">
                  <video autoPlay loop muted>
                    <source src={firstRow.vid} type="video/mp4" />
                  </video>
                </div>
              )}
              </div>
              <div className="newsInfo">
                <div className="icons">
                    <FaPlay className=""/>
                </div>
                <div className="newsInfoTop">
                  <span>{firstRow.time}</span>
                  <br />
                  <span>{firstRow.desc}</span>
                </div>
              </div>
            </div>
          ))}
        </>
    );
}

export default FirstRow;