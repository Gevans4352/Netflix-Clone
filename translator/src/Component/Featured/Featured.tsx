import './Featured.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import Sample from '../../assets/action.mp4';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { FaRegPlayCircle, FaPlus } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { MdOutlineThumbsUpDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import videoFile from "../../assets/101163-video-720.mp4";
interface FeaturedProps {
    type?: 'movie' | 'series'; 
}
const Featured = ({type}: FeaturedProps)=>{
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [hide, setHide] = useState(false);
    const showPopUp = () => {
    setShowModal(true);
  };
  
  const removePopUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); 
    setShowModal(false);
  };
    useEffect(() => {
    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setHide(currentScrollPos > prevScrollPos); 
        console.log("i was here");
        setPrevScrollPos(currentScrollPos);
    };
        window.addEventListener('scroll', handleScroll);
        console.log("i was here");
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);
    useEffect(() => {
       document.title = 'Home - Netflix';
    }, []);
    return(
    <div className="featured">
        <video className='videoPlayer' autoPlay loop muted>
           <source src={Sample} type="video/mp4" />
        </video>
        <div className="info">
            <p className={`title ${hide ? 'moveTitleDown' : ''}`}>THE SUIT</p>
            <br />
            <span className={hide ? 'hidedesc' : ''}>
                The standard chunk of Lorem Ipsum used 
                since the 1500s is reproduced below for 
                those interested. Sections 1.10.32 and 1.10.33 
            </span>
            <br />
            <div className="buttons">
                <button className="play" onClick={()=> showPopUp()}>
                    <PlayArrowIcon/>
                    <span>PLAY</span>
                    {showModal && createPortal (
                                              <div className="modal-overlay">
                                                <div className="modal-content"  onClick={(e) => e.stopPropagation()}>
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
                </button>
                <button className='moreInfo'>
                    <InfoOutlineIcon/>
                    <span>MORE INFO</span>
                </button>
            </div>
        </div>
    </div>
);
}

export default Featured;