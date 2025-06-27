import "./Games.scss";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
import sample from "../../assets/mixkit-lovers-walking-hand-in-hand-on-a-date-4617-hd-ready.mp4";
import gamePic from "../../assets/Screenshot 2025-05-20 230618.png";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoIosShareAlt } from "react-icons/io";
import netflixLogo from "../../assets/netflixies 1.svg";
import GameListItem from "../../Component/GameListItem/GameListItem";
import GaneItemList from "../../Component/GaneItemList/GaneItemList";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { v4 as uuid } from 'uuid';
import grandTheft from "../../assets/storyteller.png";
import storyTeller from "../../assets/grand theft.png";
import secrets from "../../assets/Secrets.png";
import tooMuchToHandle from "../../assets/Too much to handle.png"
import loveIsBlind from "../../assets/loveIsBlind.png";
import videoOne from "../../assets/100938-video-720.mp4";
import videoTwo from "../../assets/mixkit-a-young-man-raises-his-professional-camera-to-take-a-50551-hd-ready.mp4";
import videoThree from "../../assets/mixkit-couple-on-the-dance-floor-having-fun-344-hd-ready.mp4";
import videoFour from "../../assets/mixkit-girl-lying-down-chatting-on-her-cell-phone-before-sleeping-39789-hd-ready.mp4";
import videoFive from "../../assets/mixkit-hands-of-a-man-playing-on-a-computer-43527-hd-ready.mp4";
import videoSix from "../../assets/mixkit-two-cars-speeding-615-hd-ready.mp4";
import playpic from "../../assets/Screenshot 2025-05-20 230618.png";
import { useContent } from "../../Context";


const games = [
    {
        id: uuid(),
        image: grandTheft,
        age: "12+",
        genre: "Puzzle | interactive",
        desc: "Mobile game",
        preview: videoFive,
        name: "Grand Theft Auto"

    },
    {
        id: uuid(),
        image: secrets,
        picture: playpic,
        age: "17+",
        genre: "interactive story",
        desc: "Mobile game",
        preview: videoFour,
        name: "Secrets By Episode"

    },
    {
        id: uuid(),
        image: tooMuchToHandle,
        age: "17+",
        genre: "interactive story",
        desc: "Mobile game",
        preview: videoOne,
        name: "Too Hot To Handle"

    },
    {
        id: uuid(),
        image: storyTeller,
        age: "17+",
        genre: "Adventure", 
        desc: "Mobile game",
        preview: videoSix,
        name: "Storyteller"

    },
    {
        id: uuid(),
        image: loveIsBlind,
        age: "+12",
        genre: "Action",
        desc: "Mobile game", 
        preview: videoThree,
        name: "Emily in Paris"

    },
    {
        id: uuid(),
        image: loveIsBlind,
        age: "+12",
        genre: "Action",
        desc: "Mobile game",
        preview: videoTwo,
        name: "Secrets by choice"

    }
]



const Games = ()=>{
    const { registerContent } = useContent();
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumberOne, setSlideNumberOne] = useState(0);
    const [slideNumberTwo, setSlideNumberTwo] = useState(0);

    const gameRef = useRef<HTMLDivElement>(null);
    const secondRef = useRef<HTMLDivElement>(null);

   const handleClick = (direction: "left" | "right") => {
                if (!gameRef.current) {
                  return;
                };
                let newSlide = slideNumberOne;
                if (direction === "left" && slideNumberOne > 0){
                 newSlide--;
                }
                if (direction === "right" && slideNumberOne < 5){
                 newSlide++;
                }
                gameRef.current.style.transform = `translateX(-${newSlide * 230}px)`;
                setSlideNumberOne(newSlide);
                console.log(newSlide);
    };

    const clickMe = (crossway: "left" | "right" )=>{
        setIsMoved(true);
        if(!secondRef.current){
            return;
        };
        let newSlate = slideNumberTwo;
        if(crossway === "left" && slideNumberTwo > 0){
            newSlate--;
        }
        if(crossway === "right" && slideNumberTwo < 5){
            newSlate++;
        }
        secondRef.current.style.transform = `translateX(-${newSlate * 230}px)`;
        setSlideNumberTwo(newSlate);
        console.log(newSlate);
     }
     useEffect(() => {
    document.title = 'Games - Netflix';
  }, []);
    return(
        <>
        <section className="beginning">
            <div className="feature">
                <video className='videoPlayer' autoPlay loop muted>
                   <source src={sample} type="video/mp4" />
                </video>
                <div className="deets">
               <img src={gamePic} alt="game pic" width={70}/>
                <div className="logoshit">
                    <div className="logoshit-top">
                <img src={netflixLogo} alt="Netflix logo" width={40} />
                <p>GAME</p>
                </div>
                <p className='topic'>Single's Inferno: Choices</p>
                </div>
                <p>Mobile game • Interactive story</p>
                <h4>Included with your membership</h4>
                <span className='tea'>
                  Take a romantic beach walk, send a sweet note and... win "chicken fight" ? Do 
                  whatever it takes to spend quality time with your crush in this story game.
                </span>
                <br />
                <div className="buttons">
                    <button className="get">
                        <IoIosPhonePortrait/>
                        <span><strong>Get Mobile Game</strong></span>
                    </button>
                   <button className='share'>
                       <IoIosShareAlt/>
                       <span><strong>Send to My Moblie Phone</strong></span>
                   </button>
                </div>
            </div>
            </div>
        </section>
        <section className="toughThings">
            <div className="gameList">
                <span>Popular Mobile Games for You</span>
                <div className="wrapper">
                    <MdKeyboardArrowLeft className="sliderArrow left"  onClick={() => handleClick("left")} style={{ display: !isMoved ? "none" : "block"}}/>
                    <div className="container" ref={gameRef}  style={{ display: 'flex', transition: 'transform 0.5s ease' }}>
                        <GameListItem games={games}/>
                        <GameListItem games={games}/>
                        <GameListItem games={games}/>
                        <GameListItem games={games}/>
                        <GameListItem games={games}/>
                        <GameListItem games={games}/>
                    </div>
                    <MdKeyboardArrowRight className="sliderArrow right" onClick={()=>handleClick("right")}/>
                </div>
            </div>
        </section>
        <section className="dontLast">
            <div className="secondList">
                <span>Pick Up and Play Mobile Games</span>
                <div className="wrapperTwo">
                    <MdKeyboardArrowLeft className="seederArrow Left" onClick={()=>clickMe("left")} style={{ display: !isMoved ? "none" : "block"}}/>
                    <div className="wrap"  ref={secondRef} style={{ display: 'flex', transition: 'transform 0.5s ease' }}>
                        <GaneItemList/>
                        <GaneItemList/>
                        <GaneItemList/>
                        <GaneItemList/>
                        <GaneItemList/>
                        <GaneItemList/>
                        <GaneItemList/>
                        <GaneItemList/>
                        <GaneItemList/>
                    </div>
                    <MdKeyboardArrowRight className="seederArrow Right" onClick={()=>clickMe("right")}/>
                </div>
            </div>
        </section>
         <div className="background-container"></div>
            <section className="upper">
                <div className="firstPart">
                    <h2>Find more games in the mobile app</h2>
                    <p>From familiar favourites to Netflix exclusives, get unlimited mobile games in the 
                        Netflix app - included with your membership.
                    </p>
                </div>
            </section>
                <section className="lower">
                    <div className="support">
                        <div className="socials">
                            <a href="http://facebook.com">
                               <FaFacebookF/>
                            </a>
                            <a href="https://www.instagram.com/" >
                                <FaInstagram/>
                            </a>
                            <a href="https://www.youtube.com/">
                                <FaYoutube/>
                            </a>
                        </div>
                        <div className="parent">
                            <div className="div1">
                                <p><a href="#">Audio Description</a></p>
                            </div>
                           <div className="div2">
                                <p><a href="#">Investor Relations</a></p>
                            </div>
                            <div className="div3">
                                <p><a href="#">Legal Notices</a></p>
                            </div>
                            <div className="div4">
                                <Link to="#">
                                    <button>Service Code</button>
                                </Link>
                            </div>
                            <div className="div5">
                                <small>©1997-2025 Netflix, Inc</small>
                            </div>
                            <div className="div6">
                                <p><a href="#">Help Center</a></p>
                            </div>
                            <div className="div7">
                                <p><a href="#">Jobs</a></p>
                            </div>
                            <div className="div8">
                                <p><a href="#">Cookie Preferences</a></p>
                            </div>
                            <div className="div9">
                                <p><a href="#">Gift Cards</a></p>
                            </div>
                            <div className="div10">
                                <p><a href="#">Terms of Use</a></p>
                            </div>
                            <div className="div11">
                                <p><a href="#">Co-operate Information</a></p>
                            </div>
                            <div className="div12">
                                <p><a href="#">Media Center</a></p>
                            </div>
                            <div className="div13">
                                <p><a href="#">Privacy</a></p>
                            </div>
                            <div className="div14">
                                <p><a href="#">Contact</a></p>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    );
}

export default Games;