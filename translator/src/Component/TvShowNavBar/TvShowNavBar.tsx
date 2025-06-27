import { MdSegment } from "react-icons/md";
import { PiSquaresFour } from "react-icons/pi";
import "./TvShowNavBar.scss";
import { useState } from "react";
import { GoTriangleDown } from "react-icons/go";

const TvShowNavBar = () => {
  const [scrollDown, setScrollDown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  window.onscroll = () => {
    setScrollDown(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  console.log(scrollDown);
  return (
    <>
      <div className={scrollDown ? "TvShowNavBar scrolled" : "TvShowNavBar"}>
        <div className="categories">
          <span className="fall">Tv Shows</span>
          <div className="genre">
            <span>Genre</span>
            <GoTriangleDown className="triangle" onClick={toggleDropdown} />
            <ul className={`parent ${isOpen ? "show" : ""}`}>
              <p className="div1">
                <a href="#">Adventure</a>
              </p>
              <p className="div2">
                <a href="#">Comedy</a>
              </p>
              <p className="div3">
                <a href="#">Crime</a>
              </p>
              <p className="div4">
                <a href="#">Fantasy</a>
              </p>
              <p className="div5">
                <a href="#">Historical</a>
              </p>
              <p className="div6">
                <a href="#">Horror</a>
              </p>
              <p className="div7">
                <a href="#">Romance</a>
              </p>
              <p className="div8">
                <a href="#">Sci-fi</a>
              </p>
              <p className="div9">
                <a href="#">Thriller</a>
              </p>
              <p className="div10">
                <a href="#">Western</a>
              </p>
              <p className="div11">
                <a href="#">Animation</a>
              </p>
              <p className="div12">
                <a href="#">Dramas</a>
              </p>
              <p className="div13">
                <a href="#">Documentary</a>
              </p>
              <p className="div14">
                <a href="#">Anime</a>
              </p>
              <p className="div15">
                <a href="#">Asian</a>
              </p>
              <p className="div16">
                <a href="#">British</a>
              </p>
              <p className="div17">
                <a href="#">European</a>
              </p>
            </ul>
          </div>
          <div className="buttohns">
            <button>
              <MdSegment className="ikonic" />
            </button>
            <button>
              <PiSquaresFour className="ikonic" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TvShowNavBar;
