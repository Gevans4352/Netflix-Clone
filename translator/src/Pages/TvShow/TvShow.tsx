import { FaPlay } from "react-icons/fa";
import "./TvShow.scss";
import sample from "../../assets/mixkit-lovers-walking-hand-in-hand-on-a-date-4617-hd-ready.mp4";
import { useEffect, useState } from "react";
import { FiInfo } from "react-icons/fi";
import netflixLogo from "../../assets/netflixies 1.svg";
import NewsPopular from "../NewsPopular/NewsPopular";

const TvShow = () => {
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
    document.title = "TV Shows - Netflix";
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
              KING OF JO'BURG
            </p>
          </div>
          <h5 className={hide ? "hideH5" : ""}>
            Kings of Jo'burg is a South African television series about a
            Johannesburg criminal family, the Masire family. The series combines
            elements of crime, drama <br /> Season 3 coming out friday
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

export default TvShow;
