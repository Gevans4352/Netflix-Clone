import "./Worththewait.scss";
import firstPic from "../../assets/GameplayOne.png";
import secondPic from "../../assets/GameplayTwo.png";
import thirdPic from "../../assets/Forget u not.png";
import fourthPic from "../../assets/Marriage.png";
import fifthPic from "../../assets/SoulMate.png";
import sixthPic from "../../assets/SuperSubbu.png";
import firstVid from "../../assets/100570-video-720.mp4";
import secondVid from "../../assets/100668-video-720.mp4";
import thirdVid from "../../assets/100938-video-720.mp4";
import fourthVid from "../../assets/100941-video-720.mp4";
import fifthVid from "../../assets/2251680-uhd_3840_2160_25fps.mp4";
import sixthVid from "../../assets/3198216-hd_1920_1080_25fps.mp4";
import { useState } from "react";
import { MdCircleNotifications, MdOutlineKeyboardArrowDown } from "react-icons/md";

const Worththewait = ()=>{
    const [videoId, setVideoId] = useState(0);
    const [ishovered, setIsHovered] = useState(false);

    const Worth = [
        {
            id: 1,
            pic: firstPic,
            vid: firstVid,
            desc: "Sport event • Football • TV",
        },
        {
            id: 2,
            pic: secondPic,
            vid: secondVid,
            desc: "Sport event • Football • TV",
        },
        {
            id: 3,
            pic:  thirdPic,
            vid:  thirdVid,
            desc: "Understated • Bittersweet • Drama",
            periodicity: "Coming August 2025"
        },
        {
            id: 4,
            pic: fourthPic,
            vid: fourthVid,
            desc: "Irrevent • Heartfelt • Dramedy",
        },
        {
            id: 5,
            pic: fifthPic,
            vid: fifthVid,
            periocity: "Coming Soon",
            desc: "Sentimental • Romantic • Dramedy",
        },
        {
            id: 6,
            name: "Save the date: Madea retuens july 11",
            pic: sixthPic,
            vid: sixthVid,
            desc: "Feel Good • Irevent • Comedy",
        },
    ]

    return(
        <>
        {Worth.map((Worth) => (
            <div className="mainCollection">
            <div className="listWorth" key={Worth.id} onMouseEnter={() => { setVideoId(Worth.id); setIsHovered(true);}} onMouseLeave={() => {setIsHovered(false);}}>
              <div className="mediasWorth">
              <img src={Worth.pic} alt="Movie image" />
                    {Worth.id === videoId && ishovered && (
                    <div className="action">
                        <video autoPlay loop muted>
                            <source src={Worth.vid} type="video/mp4" />
                        </video>
                    </div>
                    )}
              </div>
              <div className="itemInfoWorth">
                <div className="iconsWorth">
                    <div className="tooltipWrapper">
                        <MdCircleNotifications className="icon"/>
                        <span className="tooltipText">Remind Me!</span>
                    </div>
                    <div className="tooltipWrapper">
                        <MdOutlineKeyboardArrowDown className="icon"/>
                        <span className="tooltipText">Episodes & info</span>
                    </div>
                </div>
                <div className="itemWorthTop">
                  <span>{Worth.name}</span>
                </div>
                <div className="Worthdesc">{Worth.desc}</div>
              </div>
            </div>
            </div>
          ))}
        </>
    );
};


export default Worththewait;