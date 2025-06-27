import React from "react";
import "./Watch.scss"
import { Link } from "react-router-dom";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { FaPlay } from "react-icons/fa";
import "./Watch.scss";
import sample from "./2795745-uhd_3840_2160_25fps.mp4";
import { useEffect, useState } from "react";
import { FiInfo } from "react-icons/fi";
import netflixLogo from "../../assets/netflixies 1.svg";
import NewsPopular from "../NewsPopular/NewsPopular";

const Watch= () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setHide(currentScrollPos > prevScrollPos);
      console.log("i was here");
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    console.log("i was here too");
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    document.title = "Movies - Netflix";
  }, []);

  return (
    <>
      <section className="beninging">
        <div className="feature">
          <video className="videoPlayer" autoPlay loop muted>
            <source src={sample} type="video/mp4" />
          </video>
        </div>
        <div className="dets">
          <div className="logosh">
            <div className={`logosh-up ${hide ? "moveTopicDown" : ""}`}>
              <img src={netflixLogo} alt="Netflix logo" width={40} />
              <p>SERIES</p>
            </div>
            <p className={`topic ${hide ? "moveTopicDown" : ""}`}>
              The Silent Twins
            </p>
          </div>
          <h5 className={hide ? "hideH5" : ""}>
                Twin sisters who grow up speaking only to each other create a rich fantasy world
                to escape the reality of their own lives. Based on a true story 
                <br /> Season 3 coming out friday
          </h5>
          <br />
          <div className="buttons">
            <button className="get">
              <FaPlay />
              <span>
                <strong> Play</strong>
              </span>
            </button>
            <button className="share">
              <FiInfo />
              <span>
                <strong> More Info</strong>
              </span>
            </button>
          </div>
        </div>
      </section>
      <section className="call">
        <NewsPopular />
      </section>
    </>
  );
};

export default Watch;
