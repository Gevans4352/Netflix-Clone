import "./ComingThisWeek.scss";
import firstMovie from "../../assets/BigMouth.png";
import secondMovie from "../../assets/Deq.png";
import thirdMovie from "../../assets/FearStreet.png";
import forthMovie from "../../assets/Our unwritten Seoul.png";
import fifthMovie from "../../assets/Dear Hongrang.png";
import sixthMovie from "../../assets/The academy.png";
import firstVideo from "../../assets/100570-video-720.mp4";
import secondVideo from "../../assets/100668-video-720.mp4";
import thirdVideo from "../../assets/100938-video-720.mp4";
import fourthVideo from "../../assets/100941-video-720.mp4";
import fifthVideo from "../../assets/3198216-hd_1920_1080_25fps.mp4";
import sixthVideo from "../../assets/action.mp4";
import { v4 as uuid } from 'uuid';
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useContent } from "../../Context";

const ComingThisWeek = ()=>{
  const { registerContent } = useContent();
    const [ishovered, setIsHovered] = useState(false);
    const [videoId, setVideoId] = useState(0);
    const [likedMovie, setLikedComment] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [UnlikeMovie, setUnlikeMovie] = useState(false);
    const handleLikes = (e: any) => {
      setLikedComment(!likedMovie);
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 300); 
    };

    const handleUnlikes = (e: any)=>{
      setUnlikeMovie(!UnlikeMovie);
      setIsAnimating(true);
      setUnlikeMovie((prev) => !prev); 
      setTimeout(() => setIsAnimating(false), 300); 
    }
    const ThisWeek = [
        {
            id: 0,
            pic: firstMovie,
            vid: firstVideo,
            name: "Watch the last chapter of fear street",
            age: "18+",
            genre: "Gory • Nostalgic •  Teen Scream",
            quality: "HD",
            time: "1hr30min"
        },
        {
            id: 1,
            pic: secondMovie,
            vid: secondVideo,
            name: "New episode coming saturday",
            age: "16+",
            genre: "Heartfelt • Drama •  intimate",
            quality: "HD",
            time: "Limited Series"
        },
        {
            id: 2,
            pic: thirdMovie,
            vid: thirdVideo,
            name: "The ultimate happy ending",
            age: "18+",
            genre: "Raunchy • Witty •  Adult animation",
            quality: "HD",
            time: "8 seasons"
        },
        {
            id: 3,
            pic: forthMovie,
            vid: fourthVideo,
            name: "Coming Wednesday",
            genre: "Capitivating • Exciting •  Documentary Series",
        },
        {
            id: 4,
            pic: fifthMovie,
            vid: fifthVideo,
            name: "Forget you not",
            age: "13+",
            genre: "Sentimental • Witty •  Dramady",
            quality: "HD",
            time: "8 episodes"
        },
        {
            id: 5,
            pic: sixthMovie,
            vid: sixthVideo,
            name: "Coming thursday",
            genre: "Offbeat • Gritty •  Mystery"
        },
    ]

return (
  <>
    {ThisWeek.map((ThisWeek) => (
      <div className="mainOpening">
      <div 
        className="WeekList" 
        key={ThisWeek.id} 
        onMouseEnter={() => { 
        setVideoId(ThisWeek.id); 
        setIsHovered(true);
        }} 
        onMouseLeave={() => {
        setIsHovered(false);
        }}
      >
        <div className="mediaweek">
          <img src={ThisWeek.pic} alt="Movie image" />
          {ThisWeek.id === videoId && ishovered && (
            <div className="action">
              <video autoPlay loop muted>
                <source src={ThisWeek.vid} type="video/mp4" />
              </video>
            </div>
          )}
        </div>
        <div className="weekInfo">
          <div className="icons">
            <div className="tooltipWrapper">
                 <IoMdNotifications className="icon"/>
                <span className="tooltipText">Remind me!</span>
            </div>
            <div className="tooltipWrapper">
                <MdOutlineKeyboardArrowDown className="icon"/>
                <span className="tooltipText">Episodes & info </span>
            </div>
            </div>
          </div>
          <div className="itemweekTop">
            <span className="limit">{ThisWeek.age}</span>
            <span className="limit">{ThisWeek.name}</span>
            <span className="limit">{ThisWeek.time}</span>
            <span className="limit">{ThisWeek.quality}</span>
          </div>
          <div className="genre">{ThisWeek.genre}</div>
        </div> 
      </div>
    ))}
  </>
);
}

export default ComingThisWeek;