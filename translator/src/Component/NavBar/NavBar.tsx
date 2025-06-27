import React, { useEffect, useState } from "react";
import "./NavBar.scss";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import user from "../../assets/16ad1bdf-14f4-48ae-a1cf-fd11b1b52e5e.jpg";
import logo from "../../assets/logo 1.svg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import PersonPinOutlinedIcon from "@mui/icons-material/PersonPinOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import firstUser from "../../assets/16ad1bdf-14f4-48ae-a1cf-fd11b1b52e5e.jpg";
import feranmi from "../../assets/2018 Netflix Penguin profile icon by Norbert-Sloth _ Redbubble.jpg";
import samuel from "../../assets/Netflix 2018 Superhero profile ion by Norbert-Sloth _ Redbubble.jpg";
import temi from "../../assets/db45c249-6e8c-4b24-8416-b7b89e3cae00.jpg";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import browseLangData from "../../data/BrowseLangData"; 
import myListData from "../../Pages/MyList/MyList";
import profileData from "../../data/Profile";
import gameData from "../../data/GamesData";
import tvShowData from "../../data/TvShowData";
import movieData from "../../data/Watch";
import newsData from "../../data/newsData";


interface NavBarProps {
  alwaysBlack?: boolean;
}



const NavBar = ({ alwaysBlack = false }: NavBarProps) => {
  const [showSearch, setShowSearch] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [text, setText] = useState("");
  const location = useLocation();
  const [filteredContent, setFilteredContent] = useState<any[]>([]);
  const [content, setContent] = useState<any[]>([]); 
  const navigate = useNavigate();
   useEffect(() => {
    if (location.pathname.includes("games")) {
      setContent(gameData);
    } else if (location.pathname.includes("tv-show")) {
      setContent(tvShowData);
    } else if (location.pathname.includes("news-popular")) {
      setContent(newsData);
    } else if (location.pathname.includes("watch")) {
      setContent(movieData);
    // } else if (location.pathname.includes("my-list")) {
    //   setContent(myListData);
    } else if(location.pathname.includes("browse-language")){
      setContent(browseLangData);
    } else if(location.pathname.includes("Profile")){
      setContent(profileData);
     } else {
      setContent([]); 
    }
  }, [location.pathname]);


     useEffect(() => {
    if (!text.trim()) {
      setFilteredContent([]);
      return;
    }

    const results = content.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase()) ||
      
      item.age.toString().includes(text.toLowerCase())
    );

    setFilteredContent(results);
  }, [text, content]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === "Enter" && text.trim()) {
    const searchText = text.trim();
    const encodedText = encodeURIComponent(searchText);
    const currentPage = location.pathname;
    navigate(`/search-results?query=${encodedText}&from=${currentPage}`);
    setText(""); 
    setShowSearch(false); 
  }
};

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  console.log("here again!");
  console.log(isScrolled);

  const navbarClass = alwaysBlack
    ? "navBar scrolled"
    : isScrolled
    ? "navBar scrolled"
    : "navBar";
  // useEffect(handleSearch, [text]);

  return (
    <div className={navbarClass}>
      <div className="container">
        <div className="left">
          <Link to="/">
            <img src={logo} alt="NetFlix logo" className="menu-logo" />
          </Link>
          <Link to="/" className="navLink">
            <span>Home</span>
          </Link>
          <Link to="/tv-show">
            <span>Tv shows</span>
          </Link>
          <Link to="/Watch" className="navLink">
            <span>Movies</span>
          </Link>
          <Link to="/games">
            <span>Games</span>
          </Link>
          <Link to="/news-popular">
            <span>News & Popular</span>
          </Link>
          <Link to="/my-list">
            <span>My List</span>
          </Link>
          <Link to="/browse-language">
            <span>Browse by Language</span>
          </Link>
        </div>
        <div className="right">
          <div className="search-container">
            {showSearch && (
              <input
                type="search" 
                placeholder="Search titles, genres..." 
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
                spellCheck="false"
              />
            )}
            {filteredContent.length > 0 && (
              <div className="searchResults">
                {filteredContent.slice(0, 8).map((item) => (
                  <div key={item.id} className="search-result-item">
                    <span>{item.name}</span>
                    <span>{item.genre}</span>
                    <span>{item.age}</span>
                  </div>
                ))}
              </div>
            )}
            <button
              className="btn"
              onClick={() => setShowSearch((prevState) => !prevState)}
            >
              {showSearch ? <IoMdClose /> : <CiSearch />}
            </button>
              {text && filteredContent.length === 0 && (
                <p className="emptySearch">
                  Your search did not have any matches
                  <br /> Suggestion:
                  <br /> • Try different keywords
                  <br /> • Looking for a Movie or Tv show?
                  <br /> • Try using a movie, tvshow, title to search
                  <br /> • Try genre like romance, sports or drama
                </p>
              )}
            </div>
            <Link to="#">
              <span className="kids">Kids</span>
            </Link>
            <NotificationsIcon className="icon" />
            <img src={user} alt="profile picture" />
            <div className="profile">
              <ArrowDropDownOutlinedIcon className="iconic" />
             <div className="options">
                <div className="picOne">
                  <img src={firstUser} alt="first user" />
                  <span>First User</span>
                </div>
                <div className="picOne">
                  <img src={feranmi} alt="feranmi" />
                  <span>Ferami</span>
                </div>
                <div className="picOne">
                  <img src={samuel} alt="samuel" />
                  <span>Samuel</span>
                </div>
                <div className="picOne">
                  <img src={temi} alt="temi" />
                  <span>Temi</span>
                </div>
                <Link to="/Manage Profile">
                  <div className="collectibles">
                    <CreateOutlinedIcon />
                    <span>Manage Profiles</span>
                  </div>
                </Link>
                  <Link to="/">
                  <div className="iconOne">
                  <PersonPinOutlinedIcon />
                  <span>Transfer Profile</span>
                </div>
                  </Link>
                <div className="iconTwo">
                  <PermIdentityOutlinedIcon />
                  <span>Accounts</span>
                </div>
                <div className="iconThree">
                  <HelpOutlineOutlinedIcon />
                  <span>Help Center</span>
                </div>
                <Link to="/LoginPage" className="navLink">
                  <span>Sign out of Netflix</span>
                </Link>
                <Link to="/Register" className="navLink">
                  <span>Register</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default NavBar;