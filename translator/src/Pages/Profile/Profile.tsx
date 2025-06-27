 import { Link } from "react-router-dom";
import "./Profile.scss";
import firstPerson from "./16ad1bdf-14f4-48ae-a1cf-fd11b1b52e5e.jpg";
import feranmi from "./2018 Netflix Penguin profile icon by Norbert-Sloth _ Redbubble.jpg";
import samuel from "./Netflix 2018 Superhero profile ion by Norbert-Sloth _ Redbubble.jpg";
import temi from "./db45c249-6e8c-4b24-8416-b7b89e3cae00.jpg";
import { v4 as uuid } from 'uuid';
import { useEffect } from "react";

const Profile = () => {

const firstUserId = uuid();
const feranmiId = uuid();
const samuelId = uuid();
const temiId = uuid();
    useEffect(() => {
    document.title = 'NetFlix';
  }, []);
  return (
    <div className="space">
      <div className="box">
        <div className="container">
          <div className="profiles">
            <div className="info">
              <p>Who's Watching?</p>
            </div>
               <div className="images">
                        <Link to={`/Profile?${firstUserId}`}>
                            <div className="profile-item">
                              <img src={firstPerson} alt="first person" />
                              <p>First User</p>
                            </div>
                        </Link>
                        <Link to={`/profile?${feranmiId}`}>
                            <div className="profile-item">
                                <img src={samuel} alt="feranmi" />
                                <p>Feranmi</p>
                            </div>
                        </Link>
                        <Link to={`/profile?${samuelId}`}>
                            <div className="profile-item">
                                <img src={feranmi} alt="samuel" />
                                <p>Samuel</p>
                            </div>
                        </Link>
                          <Link to={`/profile?${temiId}`}>
                            <div className="profile-item">
                                <img src={temi} alt="temi" />
                                <p>Temi</p>
                            </div>
                         </Link>
                </div>
                <Link to="/Manage Profile"><button>Manage Profiles</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;