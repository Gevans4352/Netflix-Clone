import "./GameListItem.scss";
import { v4 as uuid } from 'uuid';
import grandTheft from "../../assets/storyteller.png";
import storyTeller from "../../assets/grand theft.png";
import secrets from "../../assets/Secrets.png";
import tooMuchToHandle from "../../assets/Too much to handle.png"
import loveIsBlind from "../../assets/loveIsBlind.png";
import { IoIosAddCircle } from "react-icons/io";
import videoOne from "../../assets/100938-video-720.mp4";
import videoTwo from "../../assets/mixkit-a-young-man-raises-his-professional-camera-to-take-a-50551-hd-ready.mp4";
import videoThree from "../../assets/mixkit-couple-on-the-dance-floor-having-fun-344-hd-ready.mp4";
import videoFour from "../../assets/mixkit-girl-lying-down-chatting-on-her-cell-phone-before-sleeping-39789-hd-ready.mp4";
import videoFive from "../../assets/mixkit-hands-of-a-man-playing-on-a-computer-43527-hd-ready.mp4";
import videoSix from "../../assets/mixkit-two-cars-speeding-615-hd-ready.mp4";
import { useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import netFlixLogo from "../../assets/netflixies 1.svg";
import playpic from "../../assets/Screenshot 2025-05-20 230618.png";



const GameListItem = ({games}:any) =>{

    const trailer = "";
    const [ishovered, setIsHovered] = useState(false);
        return (
            <>
                {games.map((game:any) => (
                    <div className="sarang">
                    <div className="gameItem" key={game.id} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <div className="mediaWrapper">
                            <img src={game.image} alt="Movie image" />
                            {ishovered && (
                                <div className="action">
                                    <video autoPlay loop muted>
                                        <source src={game.preview} type="video/mp4" />
                                    </video>
                                </div>
                            )}
                        </div>
                        <div className="itemInfo">
                            <div className="itemInfoWrapper">
                                <div className="gameImage">
                                    <img src={playpic} alt="game pic" className="playPic"/>
                                </div>
                                <div className="logoSection">
                                    <img src={netFlixLogo} alt="Netflix Logo" className="netflixLogo"/>
                                    <span className="gameTag">GAME</span>
                                </div>
                            </div>
                                <h2 className="gameName">{game.name}</h2>
                                <div className="buttonSection">
                                    <button className="infoBtn">
                                       <IoIosInformationCircleOutline className="svgIcon"/>
                                       <span>More Info</span>
                                    </button>
                                    <button className="addBtn">
                                        <IoIosAddCircle  className="svgIcon"/>
                                    </button>
                                </div>
                                <div className="extraInfo">
                                    <span className="genre">{game.genre}</span>
                                    <div className="descWithAge">
                                        <span className="limit">{game.age}</span>
                                        <p className="desc">{game.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    ))}
                </>
            );
        }

export default GameListItem;
