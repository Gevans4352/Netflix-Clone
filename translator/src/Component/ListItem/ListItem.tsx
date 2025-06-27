import { useState } from "react";
import "./ListItem.scss"
import EverythingNow from "../../assets/bulli.jpg";
import newMovie from "../../assets/CrashRomance.jpg";
import tired from "../../assets/You.jpg"
import thriller from "../../assets/3198216-hd_1920_1080_25fps.mp4"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import criminal from "../../assets/mixkit-female-police-officer-interrogating-a-person-at-a-crime-scene-32770-hd-ready.mp4";
import { createPortal } from "react-dom";
import { FaRegPlayCircle, FaPlus } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { MdOutlineThumbsUpDown } from "react-icons/md";
import  { Link } from "react-router-dom";
import videoFile from "../../assets/2251680-uhd_3840_2160_25fps.mp4";
import { IoIosAdd, IoIosCheckmark, IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";
import { LuThumbsDown, LuThumbsUp } from "react-icons/lu";
const ListItem = ()=>{
    const [addToList, setAddToList] = useState(true);
    const [tooltipText, setTooltipText] = useState("Add to list!");
    const [ishovered, setIsHovered] = useState(false);
    const [videoId, setVideoId] = useState(0);
    const [likedComment, setLikedComment] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [likedThumb, setLikedThumb] = useState(false);
    const [isInList, setIsInList] = useState(false);
    
    const showPopUp = () => {
    setShowModal(true);
    };
  
  const removePopUp = () => {
    setShowModal(false);

  };
type NewsItem = {
  id: number;
  image: string;
  duration: string;
  preview: string;
  rating: string;
  year: string;
  genre: string;
  desc: string;
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


    const movies = [
        {
          id: 1,
          image: EverythingNow,
          duration: "1hr 20mins",
          preview: thriller,
          rating: "+18",
          year: "2024",
          genre: "Clinical",
          desc: "After months in recovery for an eating disorder, 16-year-old Mia devises a bucket list of quintessential teen experiences to make up for lost time.",
        },
        {
          id: 2,
          image: newMovie,
          preview: tired,
          duration: "2hrs 10mins",
          rating: "+16",
          year: "2023",
          genre: "Comedy",
          desc: "A young hacker finds herself wrapped in a conspiracy that could destroy her city and the people she loves.",
        },
        {
          id: 3,
          image: tired,
          duration: "1hr 40mins",
          preview: criminal,
          rating: "PG",
          year: "2022",
          genre: "Thriller",
          desc: "When a quirky inventor accidentally clones his dog, chaos (and cuteness) ensues across the neighborhood.",
        },
        // {
        //   id: 4,
        //   img: tired,
        //   duration: "1hr 40mins",
        //   preview: criminal,
        //   rating: "PG",
        //   year: "2022",
        //   genre: "Comedy",
        //   desc: "When a quirky inventor accidentally clones his dog, chaos (and cuteness) ensues across the neighborhood.",
        // },

      ];
      
      return (
        <>
          {movies.map((movie, index) => (
            <div className="mikrokosmos">
            <div className="listItem" 
            key={movie.id} 
            style={{ left: index * 230 + index * 2.5 }} 
            onMouseEnter={() => { 
            setVideoId(movie.id); 
            setIsHovered(true); 
            }}onMouseLeave={() => {
            setIsHovered(false);
            }}>
              <div className="media">
              <img src={movie.image} alt="Movie image" />
              {movie.id === videoId && ishovered && (
                <div className="action">
                  <video autoPlay loop muted>
                    <source src={movie.preview} type="video/mp4" />
                  </video>
                </div>
              )}
              </div>
              <div className="itemInfo">
                <div className="icons">
                  <PlayArrowIcon className="icon" onClick={()=> showPopUp()}/>
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
                  <div className="tooltipWrapper">                     
                    {addToList ? (
                                            <IoIosAdd className="icon" onClick={(e) => handleAddClick(e, movie)} />
                                            ) : (
                                            <IoIosCheckmark className="icon" onClick={(e) =>handleRemoveClick(e, movie)} />
                                          )}
                                          <span className="tooltipText">{tooltipText}</span>
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
                   <span className="tooltipText">I dislike this!</span>
                  </div>

                </div>
                  
                <div className="itemInfoTop">
                  <span>{movie.duration}</span>
                  <span className="limit">{movie.rating}</span>
                  <span>{movie.year}</span>
                </div>
                <div className="desc">{movie.desc}</div>
                <div className="genre">{movie.genre}</div>
              </div>
            </div>
            </div>
          ))}
        </>
      );      
    };


export default ListItem





