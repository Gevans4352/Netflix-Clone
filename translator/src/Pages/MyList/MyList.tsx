 import { Link } from "react-router-dom";
 import "./MyList.scss";
 import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
 import { useEffect, useState } from "react";

    const MyList = ()=>{
       const [myList, setMyList] = useState([]);
       useEffect(() => {
       const stored = localStorage.getItem("myList");
        if (stored) {
            setMyList(JSON.parse(stored));
        }
       }, []);
        useEffect(() => {
        document.title = 'My List';
      }, []);
      
        return(
           <>
                <section className="MyList">
                   <div className="naminishardidk">
                      <span>My List</span>
                   </div>
                   <div className="newerList">
                        <div className="wrapperNine">            
                            <div className="container">
                                {myList.length === 0 && (
                                    <div className="empty-list-message">
                                        <p className="empty">Your list is empty</p>
                                    </div>
                                )}{myList.map((movie: any) => (
                                <div key={movie.id} className="myListItem">
                                    <img src={movie.image} alt={movie.name} />
                                    
                                    
                                        
                                        <div className="infoContent">
                                        <h3>{movie.name}</h3>
                                        <p>{movie.desc}</p>
                                        <p>{movie.genre}</p>
                                   
                                    </div>
                                </div>
                                ))}
                                </div> 
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

export default MyList;