import "./ToptenShows.scss";
import { v4 as uuid } from 'uuid';
import firstPic from "../../assets/American manhaut.png";
import secondPic from "../../assets/DHR.png";
import thirdPic from "../../assets/BGBS.png";
import fourthPic from "../../assets/Forever.png";
import fifthPic from "../../assets/Idk sorry.png";
import sixthPic from "../../assets/The royals.png";
import firstVid from "../../assets/mixkit-a-young-man-raises-his-professional-camera-to-take-a-50551-hd-ready.mp4";
import secondVid from "../../assets/mixkit-couple-on-the-dance-floor-having-fun-344-hd-ready.mp4";
import thirdVid from "../../assets/mixkit-girl-lying-down-chatting-on-her-cell-phone-before-sleeping-39789-hd-ready.mp4";
import fouthVid from "../../assets/mixkit-hands-of-a-man-playing-on-a-computer-43527-hd-ready.mp4";
import fifthVid from "../../assets/100938-video-720.mp4";
import sixthVid from "../../assets/mixkit-two-cars-speeding-615-hd-ready.mp4";
import { FaPlay, FaPlus, FaRegPlayCircle } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { FiThumbsDown, FiThumbsUp, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdThumbsUp } from "react-icons/io";
import { IoThumbsDownSharp } from "react-icons/io5";
import { IoIosCheckmark } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useContent } from "../../Context";
import { MdOutlineThumbsUpDown } from "react-icons/md";
import { createPortal } from "react-dom";
import videoFile from "../../assets/3198216-hd_1920_1080_25fps.mp4";
const ToptenShows = ()=>{
  const { registerContent } = useContent();
  const [ishovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [likedMovie, setLikedComment] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [UnlikeMovie, setUnlikeMovie] = useState(false);
  const [addToList, setAddToList] = useState(true);
  const [tooltipText, setTooltipText] = useState("Add to list!");
  const [videoId, setVideoId] = useState(0);
  const [editComment, setEditComment] = useState<number | null>(null);
  const navigate = useNavigate();
  const [isInList, setIsInList] = useState(false);
    
const showPopUp = () => {
  setShowModal(true);
};

const removePop = () => {
  setShowModal(false);
};


 type NewsItem = {
  id: number;
  name: string;
  age: string;
  image: string;
  quality: string;
  periodicity?: string;
  desc?: string;
  vid: string;
};
 const handleToggleClick = (e: any, movie: NewsItem) => {
  e.stopPropagation();

  const storedList = JSON.parse(localStorage.getItem("myList") || "[]");
  const AlreadyList = storedList.some((m: NewsItem) => m.id === movie.id);

  let updatedList;
  if (AlreadyList) {
    updatedList = storedList.filter((m: NewsItem) => m.id !== movie.id);
  } else {
    updatedList = [...storedList, movie];
  }

  localStorage.setItem("myList", JSON.stringify(updatedList));
  setIsInList(!AlreadyList); 
};


  const handleAddClick = (e: any, movie: NewsItem) => {
    e.stopPropagation();
    setAddToList(false); 
    const storedList = JSON.parse(localStorage.getItem("myList") || "[]");
    const updatedList = [...storedList, movie];
    localStorage.setItem("myList", JSON.stringify(updatedList));
    alert("Added to list");
    setTooltipText("Remove from list");
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleRemoveClick = (e: any, movie: NewsItem) => {
    e.stopPropagation();
    const storedList = JSON.parse(localStorage.getItem("myList") || "[]");
  const updatedList = storedList.filter((m: NewsItem) => m.id !== movie.id);
  localStorage.setItem("myList", JSON.stringify(updatedList));
    setAddToList(true); 
    alert("Removed from list");
    setTooltipText("Add to list");
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

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

    const handleList = (e: any)=>{
        setAddToList(!addToList);
        setIsAnimating(true);
        setTimeout(()=> setIsAnimating(false), 300);
    }
    const topTen = [
        {
            // id: uuid(),
            id: 0,
            name: "American Manhaut",
            age: "18+",
            quality: "HD",
            desc: "Riveting • Investigative • Documentary Series",
            periodicity: "Limited Series",
            image: firstPic, 
            vid: firstVid

        },
        {
            id: 1,
            name: "Secrets we keep",
            age: "18+",
            quality: "HD",
            desc: "Suspectful • Nordic Noir • Crime",
            periodicity: "Limited Series",
            image: fifthPic,
            vid: secondVid,

        },
        {
            id: 2,
            name: "Dear Hongrang",
            age: "16+",
            quality: "HD",
            desc: "Romantic • Bittersweet • Horror",
            periodicity: "12 episodes",
            image: thirdPic,
            vid: thirdVid

        },
        {
            id: 3,
            name: "Bet",
            age: "18+",
            quality: "HD",
            desc: "Riveting • Investigative • Documentary Series",
            periodicity: "Limited Series",
            vid: sixthVid,
            image: secondPic

        },
        {
            id: 4,
            name: "Forever",
            age: "18+",
            quality: "HD",
            image: fourthPic,
            vid: fouthVid

        },
        {
            id: 5,
            name: "The Royals",
            age: "18+",
            quality: "HD",
            desc: "Quirky • Romantic • Dramedy",
            periodicity: "8 episodes",
            image: sixthPic,
            vid: fifthVid

        }
    ]
useEffect(() => {
  registerContent('topten', topTen);
}, 
[registerContent, topTen]);
    return(
        <>
        {topTen.map((topTen, index) => (
          <div className="mainSec">
            <div className="bigNumber">{index + 1}</div>
            <div className="topItem" key={topTen.id} onMouseEnter={() => { setVideoId(topTen.id); setIsHovered(true);}} onMouseLeave={() => {setIsHovered(false);}}>
              <div className="mediaTop">
              <img src={topTen.image} alt="Movie image" />
                    {topTen.id === videoId && ishovered && (
                    <div className="action">
                        <video autoPlay loop muted>
                            <source src={topTen.vid} type="video/mp4" />
                        </video>
                    </div>
                    )}
              </div>
              <div className="statsInfo">
                    <div className="icons video-play-button"  onClick={showPopUp}>
                      {showModal && createPortal (
                        <div className="modal-overlay">
                          <div className="modal-content">
                            <Link to="/tv-show">
                              <button className="close-button" onClick={removePop}>
                                <FiX />
                              </button>
                            </Link>
                            <video width="100%" autoPlay loop muted>
                              <source src={videoFile} type="video/mp4" />
                            </video>
                            <div className="modal-controls">
                              <Link to="#">
                                <button className="control-btn play">
                                  <FaRegPlayCircle />
                                  <span>Play</span>
                                </button>
                              </Link>
                              <Link to="#">
                                <button className="control-btn">
                                  <FaPlus />
                                </button>
                              </Link>
                              <Link to="#">
                                <button className="control-btn">
                                  <MdOutlineThumbsUpDown />
                                </button>
                              </Link>
                              </div>
                          </div>
                        </div>,
                         document.body
                      )}
                      <FaPlay className="icon"/>
                      <div className="tooltipWrapper">
                        {addToList ? (
                          <IoIosAdd className="icon" onClick={(e) => handleAddClick(e, topTen)} />
                          ) : (
                          <IoIosCheckmark className="icon" onClick={(e) =>handleRemoveClick(e, topTen)} />
                        )}
                        <span className="tooltipText">{tooltipText}</span>
                      </div>
                            <div className="tooltipWrapper">
                                {likedMovie ? (
                                    <FiThumbsUp 
                                    className="icon" 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setLikedComment(false);
                                        setIsAnimating(true);
                                        setTimeout(() => setIsAnimating(false), 300);
                                    }} 
                                   />
                                 ) : (
                                 <IoMdThumbsUp 
                                 className="icon" 
                                   onClick={(e) => {
                                   e.stopPropagation();
                                   setLikedComment(true);
                                   setIsAnimating(true);
                                   setTimeout(() => setIsAnimating(false), 300);
                                 }} 
                               />
                             )}
                           <span className="tooltipText">I like this!</span>
                         </div>
                         <div className="tooltipWrapper">
                                {UnlikeMovie ? (
                                    <IoThumbsDownSharp 
                                    className="icon" 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setUnlikeMovie(false);
                                        setIsAnimating(true);
                                        setTimeout(() => setIsAnimating(false), 300);
                                    }} 
                                   />
                                 ) : (
                                <FiThumbsDown  
                                 className="icon" 
                                 onClick={(e) => {
                                   e.stopPropagation();
                                   setUnlikeMovie(true);
                                   setIsAnimating(true);
                                   setTimeout(() => setIsAnimating(false), 300);
                                 }} 
                               />
                             )}
                           <span className="tooltipText">Not for me!</span>
                         </div>
                         
                        <IoIosArrowDown className="icon arrow-icon"/>
                    </div>
                    <div className="itemInfoTop">
                        <span>{topTen.age}</span>
                        <span>{topTen.name}</span>
                        <span className="limit">{topTen.quality}</span>
                    </div>
                    <div className="genre">{topTen.periodicity}</div>
                    <div className="desc">{topTen.desc}</div>
              </div>
              </div>
            </div>
          ))}
        </>
    );
};


export default ToptenShows;