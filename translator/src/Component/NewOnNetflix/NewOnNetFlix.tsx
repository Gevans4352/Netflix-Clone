import "./NewOnNetflix.scss";
import forever from "../../assets/Screenshot 2025-05-22 154908.png";
import siren from "../../assets/Sirens.png";
import Bet from "../../assets/Bet.png";
import TastefullyYours from "../../assets/Tastefully Yours.png";
import DearHongrang from "../../assets/Dear Hongrang.png";
import weakHero from "../../assets/Dear Hongrang.png";
import emotional from "../../assets/100570-video-720.mp4";
import family from "../../assets/mixkit-mother-and-daughter-read-a-book-together-in-a-park-4874-hd-ready.mp4";
import Teen from "../../assets/100941-video-720.mp4";
import heartfelt from "../../assets/mixkit-girl-crying-and-screaming-heartbroken-42253-hd-ready.mp4";
import mystery from "../../assets/mixkit-students-walking-in-a-university-4519-hd-ready.mp4";
import highschool from "../../assets/mixkit-students-walking-in-a-university-4519-hd-ready.mp4";
import { FaPlus, FaRegPlayCircle } from "react-icons/fa";
import { LuThumbsDown, LuThumbsUp } from "react-icons/lu";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
import { IoMdThumbsUp } from "react-icons/io";
import { IoMdThumbsDown } from "react-icons/io";
import { useEffect, useState, type Key } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContent } from "../../Context";
import videoFile from "../../assets/243647_tiny.mp4";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";
import { MdOutlineThumbsUpDown } from "react-icons/md";


const NewOnNetflix = () =>{
  const [isInList, setIsInList] = useState(false);
  const { registerContent } = useContent();
  const [ishovered, setIsHovered] = useState (false);
  const [likedComment, setLikedComment] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [likedThumb, setLikedThumb] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [videoId, setVideoId] = useState(0);
  const [editComment, setEditComment] = useState<number | null>(null);
  
  const showPopUp = (commentId: number) => {
    setShowModal(true);
  };
  
  const removePopUp = () => {
    setShowModal(false);
  };
  
  const commentId = 0;
  
  const handleLikes = (e: any) => {
    setLikedComment(!likedComment);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300); 
  };
  type NewsItem = {
    id: number;
    name: string;
    age: string;
    genre: string;
    image: string;
    clip: string;
    quality: string;
    periodicity: string;
  };
const handleListToggle = (movie: NewsItem) => {
  const storedList = JSON.parse(localStorage.getItem("myList") || "[]");
  
  const isAlreadyInList = storedList.some((m: NewsItem) => m.id === movie.id);

  let updatedList;
  if (isAlreadyInList) {
    updatedList = storedList.filter((m: NewsItem) => m.id !== movie.id);
  } else {
    updatedList = [...storedList, movie];
  }

  localStorage.setItem("myList", JSON.stringify(updatedList));
  setIsInList(!isAlreadyInList); 
};



const news = [
        {
            id: 0,
            name: "Forever",
            age: "17+",
            genre: "Intimate • Emotional • Teen",
            image: forever,
            clip: emotional,
            quality: "HD",
            periodicity: "5 Seasons"
        },
        {
            id: 1,
            name: "Sirens",
            age: "18+",
            genre: "Dysfunctional Family • Dark Comedy • Family",
            image: siren,
            clip: family,
            quality: "HD",
            periodicity: "8 episodes"
        },
        {
            id: 2,
            name: "Bet",
            age: "18+",
            genre: "Soapy • Slick • Teen",
            image: Bet, 
            clip: Teen,
            quality: "HD",
            periodicity: "10 episodes"
        },
        {
            id: 3,
            name: "Tastefully Yours",
            age: "13+",
            genre: "Swoonworthy • Heartfelt • Drama",
            image: TastefullyYours, 
            clip: heartfelt,
            quality: "HD", 
            periodicity: "Limited Series"
        },
        {
            id: 4,
            name: "Dear Hongrang",
            age: "16+",
            genre: "Bittersweet • Romantic • Mystery",
            image: DearHongrang,
            clip: mystery,
            quality: "HD",
            periodicity: "10 episodes"
        },
        {
            id: 5,
            name: "Weak Hero",
            age: "18+",
            genre: "Violence • Action • Highschool",
            image: weakHero, 
            clip: highschool,
            quality: "HD",
            periodicity: "2 Seasons"
        }

    ]
    const navigate = useNavigate();


    return(
        <>
          {news.map((news) => (
            <div className="mainPlace">
            <div className="newsItem" 
            key={news.id} 
            onMouseEnter={() => { 
            setVideoId(news.id); 
            setIsHovered(true);
            }} 
            onMouseLeave={() => {
            setIsHovered(false);
            }}>
              <div className="media">
              <img src={news.image} alt="Movie image" />
                    {news.id === videoId && ishovered && (
                    <div className="action">
                        <video autoPlay loop muted>
                            <source src={news.clip} type="video/mp4" />
                        </video>
                    </div>
                    )}
              </div>
              <div 
              className="itemInfo">
                  <div className="icons">
                      <FaRegPlayCircle className="icon video-play-button" onClick={()=> showPopUp(commentId)}/>
                        {showModal && createPortal (
                          <div className="modal-overlay">
                            <div className="modal-content">
                              <button className="close-button" onClick={removePopUp}>
                                <FiX />
                              </button>
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
                                  <div className="tooltipWrapper">   
                                  <Link to="#">
                                  <button className="control-btn">
                                    <FaPlus />
                                  </button>
                                  </Link>
                                    <span className="tooltipText">Add to list</span>
                                  </div>
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
                      <div className="tooltipWrapper">
                        {isInList ? (
                          <IoIosRemoveCircle 
                          className="icon remove-icon"
                          onClick={() => {
                            handleListToggle(news);
                            alert("Removed from your List");
                          }} 
                          />
                        ) : (
                        <IoIosAddCircle 
                      className="icon add-icon" 
                      onClick={() => {
                      console.log('Before toggle - isInList:', isInList);
                      handleListToggle(news);
                      alert("Added to your List");
                      }} 
                      />
                      )}
                        <span className="tooltipText">
                          {isInList ? "Remove from My List" : "Add To My List"}
                        </span>
                      </div>
                   <div className="tooltipWrapper">
                    {likedComment ? (
                    <LuThumbsUp 
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
          {likedThumb ? (
            <LuThumbsDown 
            className="icon" 
            onClick={(e) => {
              e.stopPropagation();
              setLikedThumb(false);
            }} 
          />
        ) : (
        <IoMdThumbsDown 
        className="icon" 
        onClick={(e) => {
          e.stopPropagation();
          setLikedThumb(true);
        }} 
      />
    )}
  <span className="tooltipText">Not for me!</span>
</div>
</div>
<div className="itemInfoTop">
  <span className="limit"><small>{news.age}</small></span>
    <span><small>{news.periodicity}</small></span>
      <span className="limit"><small>{news.quality}</small></span>
        </div>
          <div className="genre">{news.genre}</div>
              </div>
            </div>
            </div>
          ))}
        </>
      );
    };

export default NewOnNetflix;