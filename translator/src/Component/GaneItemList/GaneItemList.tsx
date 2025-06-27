import "./GaneItemList.scss";
import { v4 as uuid } from 'uuid';
import solitaire from "../../assets/Solitaire.png";
import videoOne from "../../assets/mixkit-poker-chips-and-cards-arranged-in-an-image-composition-5239-hd-ready.mp4";
import cafe from "../../assets/Cafe.png";
import ghost from "../../assets/GhostDetective .png";
import cake from "../../assets/mixkit-young-woman-giving-a-big-bite-a-donut-40830-hd-ready.mp4";
import videoTwo from "../../assets/mixkit-group-of-friends-partying-happily-4640-hd-ready.mp4";
import picThree from "../../assets/SonicPrimeDash.png";
import videoFour from "../../assets/mixkit-woman-drinking-coffee-in-a-cafe-223-hd-ready.mp4";
import picFour from "../../assets/Squid game.png";
import picFive from "../../assets/WordTrails.png";
import videoFive from "../../assets/100668-video-720.mp4";
import videoSix from "../../assets/mixkit-person-building-a-puzzle-on-a-table-42193-hd-ready.mp4";
import { useState } from "react";
import playPic from "../../assets/Screenshot 2025-05-20 230618.png";
import logo from "../../assets/netflixies 1.svg";
import { IoIosAddCircle, IoIosInformationCircleOutline } from "react-icons/io";

const GaneItemList = ()=>{

    const[ishovered, setIsHovered] = useState(false);

    const popular = [
        {
            id: uuid(),
            pic: solitaire,
            vid: videoOne,
            name: "Solitaire",
            age: "12+",
            genre: "Puzzle",
            desc: "Mobile game"
        },
        {
            id: uuid(),
            pic: cafe,
            age: "8+",
            genre: "interactive",
            desc: "Mobile game",
            vid: cake
        },
        {
            id: uuid(),
            pic: ghost,
            age: "18+",
            genre: "Puzzle",
            desc: "Mobile game",
            vid: videoTwo

        },
        {
            id: uuid(),
            pic: picThree,
            vid: videoFour,
            age: "12+",
            genre: "Arcade",
            desc: "Mobile game",
        },
        {
            id: uuid(),
            pic: picFour,
            vid: videoFive,
            age: "10+",
            genre: "Arcade",
            desc: "Mobile game",
        },
        {
            id: uuid(),
            pic: picFive,
            vid: videoSix,
            age: "9+",
            genre: "Puzzle • Word Game",
            desc: "Mobile game",
        }
    ]
    return(
        <>
        {popular.map((popular) => (
                    <div className="bestOfMe">
                    <div className="gameItem" key={popular.id}onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <div className="mediaWrapper">
                            <img src={popular.pic} alt="Movie image" />
                            {ishovered && (
                                <div className="action">
                                    <video autoPlay loop muted>
                                        <source src={popular.vid} type="video/mp4" />
                                    </video>
                                </div>
                            )}
                        </div>
                        <div className="itemInfo">
                            <div className="itemInfoWrapper">
                                <div className="gameImage">
                                    <img src={playPic} alt="game pic" className="playPic"/>
                                </div>
                                <div className="logoSection">
                                    <img src={logo} alt="Netflix Logo" className="netflixLogo"/>
                                    <span className="gameTag">GAME</span>
                                </div>
                            </div>
                                <h2 className="gameName">{popular.name}</h2>
                                <div className="buttonSection">
                                    <button className="infoBtn">
                                       <IoIosInformationCircleOutline className="svgIcon"/>
                                       <span>More Info</span>
                                    </button>
                                     <div className="tooltipWrapper">  
                                    <button className="addBtn">
                                        <IoIosAddCircle  className="svgIcon"/>
                                         <span className="tooltipText">Add to list on Mobile</span>
                                    </button>
                                    </div>
                                </div>
                                <div className="extraInfo">
                                    <span className="genre">{popular.genre}</span>
                                    <div className="descWithAge">
                                        <span className="limit">{popular.age}</span>
                                        <p className="desc">{popular.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    ))}
                </>
            );
    }

   

export default GaneItemList;