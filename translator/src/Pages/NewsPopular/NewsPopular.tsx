import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./NewsPopular.scss";
import ToptenShows from "../../Component/ToptenShows/ToptenShows";
import NewOnNetflix from "../../Component/NewOnNetflix/NewOnNetFlix";
import ComingNextWeek from "../../Component/ComingNextWeek/ComingNextWeek";
import Worththewait from "../../Component/Worththewait/Worththewait";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import  { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ComingThisWeek from "../../Component/ThisWeek/ComingThisWeek";

const NewsPopular = ()=>{
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumberThree, setSlideNumberThree] = useState(0);
    const [sliderNumberFour, setSliderNumberFour] = useState(0);
    const [sliderNumberFive, setSliderNumberFive] = useState(0);
    const [sliderNumberSix, setSliderNumberSix] = useState(0);
    const [sliderNumberSeven, setSliderNumberSeven] = useState(0);
    const [sliderNumberEight, setSliderNumberEight] = useState(0);
    const eightRef = useRef<HTMLDivElement>(null);
    const seventhRef = useRef<HTMLDivElement>(null);
    const fifthRef = useRef<HTMLDivElement>(null);
    const fourthRef = useRef<HTMLDivElement>(null);
    const thirdRef = useRef<HTMLDivElement>(null);
    const sixthRef = useRef<HTMLDivElement>(null);

    const handleClick = (direction: "left" | "right") => {
                if (!thirdRef.current) {
                  return;
                };
                let newSlide = slideNumberThree;
                if (direction === "left" && slideNumberThree > 0){
                 newSlide--;
                }
                if (direction === "right" && slideNumberThree < 5){
                 newSlide++;
                }
                thirdRef.current.style.transform = `translateX(-${newSlide * 230}px)`;
                setSlideNumberThree(newSlide);
                console.log(newSlide);
    };

    const filterMeLuv = (filter: "left" | "right")=>{
        if(!eightRef.current){
            return;
        };
        let newSlideEight = sliderNumberEight;
        if(filter === "left" && sliderNumberEight > 0){
            newSlideEight--;
        }
        if(filter === "right" && sliderNumberEight < 5){
            newSlideEight++;
        }
        eightRef.current.style.transform = `translateX(-${newSlideEight * 230}px)`;
        setSliderNumberSeven(newSlideEight);
        console.log(newSlideEight);
    }

    const adjustMeLuv = (adjust: "left" | "right")=>{
        if(!seventhRef.current){
            return;
        };
        let newSlideSeven = sliderNumberSeven;
        if(adjust === "left" && sliderNumberSeven > 0){
            newSlideSeven--;
        }
        if(adjust === "right" && sliderNumberSeven < 5){
            newSlideSeven++;
        }
        seventhRef.current.style.transform = `translateX(-${newSlideSeven * 230}px)`;
        setSliderNumberSeven(newSlideSeven);
        console.log(newSlideSeven);
    }

    const pressMeLuv = (direction: "left" | "right")=>{
        if(!sixthRef.current){
            return;
        };
        let newSlideSix = sliderNumberSix;
        if(direction === "left" && sliderNumberSix > 0){
            newSlideSix--;
        }
        if(direction === "right" && sliderNumberSix < 5){
            newSlideSix++;
        }
        sixthRef.current.style.transform = `translateX(-${newSlideSix * 230}px)`;
        setSliderNumberSix(newSlideSix);
        console.log(newSlideSix);
    }

    const clickMePooks = (arrow: "left" | "right")=>{
        if(!fourthRef.current){
            return;
        }
        let newSlideOne = sliderNumberFour;
        if(arrow === "left" && sliderNumberFour > 0){
            newSlideOne--;
        }
        if(arrow === "right" && sliderNumberFour < 5){
            newSlideOne++
        }
        fourthRef.current.style.transform = `translateX(-${newSlideOne * 230}px)`;
        setSliderNumberFour(newSlideOne);
        console.log(newSlideOne);
    }
    const clickMeLuv = (click: "left" | "right")=>{
        if(!fifthRef.current){
            return;
        }
        let newSliderTwo = sliderNumberFive;
        if(click === "left" && sliderNumberFive > 0){
            newSliderTwo--;
        }
        if(click === "right" && sliderNumberFive < 5){
            newSliderTwo++;
        }
        fifthRef.current.style.transform = ` translateX(-${newSliderTwo * 230}px)`;
        setSliderNumberFive(newSliderTwo);
        console.log(newSliderTwo)
    }
        useEffect(() => {
        document.title = 'News & Popular';
      }, []);
    return(
        <>
            <section className="newsPopular">
                <div className="newsPopularList">
                    <span className="newToNetflix">New on Netflix</span>
                    <div className="wrapperThree">
                        <MdKeyboardArrowLeft className="sleederArrow left" onClick={() => handleClick("left")} style={{ display: !isMoved ? "block" : "none"}}/>
                        <div className="container" ref={thirdRef} style={{ display: 'flex', transition: 'transform 0.5s ease' }}>
                            <NewOnNetflix/>
                            <NewOnNetflix/>
                            <NewOnNetflix/>
                            <NewOnNetflix/>
                            <NewOnNetflix/>
                            <NewOnNetflix/>
                        </div>
                        <MdKeyboardArrowRight className="sleederArrow right" onClick={()=>handleClick("right")}/>
                    </div>
                </div>
           </section>
           <section className="nextWeek">
            <div className="nextWeekList">
                <span className="newToNetflix"> Coming Next Week</span>
                <div className="wrapperFive">
                    <MdKeyboardArrowLeft className="sladerArrow left" onClick={()=> clickMePooks("left")} style={{display: !isMoved ? "block" : "none"}} />
                    <div className="container" ref={fourthRef} style={{ display: 'flex', transition: 'transform 0.5s ease' }}>
                        <ComingNextWeek/>
                        <ComingNextWeek/>
                        <ComingNextWeek/>
                        <ComingNextWeek/>
                        <ComingNextWeek/>
                        <ComingNextWeek/>
                    </div>
                    <MdKeyboardArrowRight className="sladerArrow right" onClick={()=> clickMePooks("right")}/>
                </div>
            </div>
        </section>
        <section className="topShows">
            <div className="topShowsList">
                <span className="inNigeria">Top 10 shows in Nigeria Today</span>
                <div className="wrapperFour">
                    <MdKeyboardArrowLeft className="slideMeAway left" onClick={()=> clickMeLuv("left")} style={{display: !isMoved ? "block" : "none"}} />
                    <div className="container" ref={fifthRef} style={{ display: "flex", transition: 'transform 0.5s ease' }}>
                        <ToptenShows/>
                        <ToptenShows/>
                        <ToptenShows/>
                        <ToptenShows/>
                        <ToptenShows/>
                        <ToptenShows/>
                    </div>
                    <MdKeyboardArrowRight className="slideMeAway right" onClick={()=> clickMeLuv("right")} />
                </div>
            </div>
        </section>
        <section className="worthThewait">
            <div className="worthTheWaitList">
                <span>Worth the wait</span>
                <div className="wrapperSix">
                    <MdKeyboardArrowLeft className="pushMeAway left" onClick={()=> filterMeLuv("left")} style={{display: !isMoved ? "block" : "none"}} />
                    <div className="container" ref={eightRef} style={{ display: 'flex', transition: 'transform 0.5s ease' }}>
                        <Worththewait/>
                        <Worththewait/>
                        <Worththewait/>
                        <Worththewait/>
                        <Worththewait/>
                        <Worththewait/>
                    </div>
                    <MdKeyboardArrowRight className="pushMeAway right" onClick={()=> filterMeLuv("right")} />
                </div>
            </div>
        </section>
        <section className="Showstop">
               <div className="topList">
                <span className="NigeriaLive">Top 10 Movies in Nigeria Today</span>
                <div className="wrapperSeven">
                    <MdKeyboardArrowLeft  className="idktbhtspmo left" onClick={()=> pressMeLuv("left")} style={{display: !isMoved ? "block" : "none"}}/>
                    <div className="container" ref={sixthRef} style={{ display: 'flex', transition: 'transform 0.5s ease' }}>
                        <ToptenShows/>
                        <ToptenShows/>
                        <ToptenShows/>
                        <ToptenShows/>
                        <ToptenShows/>
                        <ToptenShows/>
                    </div>
                    <MdKeyboardArrowRight  className="idktbhtspmo right" onClick={()=> pressMeLuv("right")}/>
                </div>
            </div>
        </section>
          <section className="nextWeek">
            <div className="nextWeekList">
                <span>Coming This Week</span>
                <div className="wrapperEight">
                    <MdKeyboardArrowLeft className="midnightFiction left" onClick={()=> adjustMeLuv("left")} style={{display: !isMoved ? "block" : "none"}}/>
                    <div className="container" ref={seventhRef} style={{ display: 'flex', transition: 'transform 0.5s ease' }}>
                        <ComingThisWeek/>
                        <ComingThisWeek/>
                        <ComingThisWeek/>
                        <ComingThisWeek/>
                        <ComingThisWeek/>
                        <ComingThisWeek/>
                    </div> 
                    <MdKeyboardArrowRight  className="midnightFiction right" onClick={()=> adjustMeLuv("right")}/>
                </div>
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

export default NewsPopular;