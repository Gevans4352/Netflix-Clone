import { Link } from "react-router-dom";
import "./ManageProfile.scss";
import firstPerson from "./16ad1bdf-14f4-48ae-a1cf-fd11b1b52e5e.jpg";
import feranmi from "./2018 Netflix Penguin profile icon by Norbert-Sloth _ Redbubble.jpg";
import samuel from "./Netflix 2018 Superhero profile ion by Norbert-Sloth _ Redbubble.jpg";
import temi from "./db45c249-6e8c-4b24-8416-b7b89e3cae00.jpg";
import { useEffect } from "react";
import { TiPencil } from "react-icons/ti";

const ManageProfile = ()=>{
      useEffect(() => {
      document.title = '  Manage Profile';
    }, []);
    return(
    <div className="space">
      <div className="box">
        <div className="container">
          <div className="profiles">
            <div className="info">
              <p>Manage Profile: </p>
            </div>
               <div className="images">
                    <div className="profile-item">
                      <img src={firstPerson} alt="first person" />
                      <span className="edit-icon"><TiPencil  className="pencil"/></span>
                      <p>First User</p>
                    </div>
                    <div className="profile-item">
                        <img src={samuel} alt="feranmi" />
                         <span className="edit-icon"><TiPencil className="pencil"/></span>
                        <p>Feranmi</p>
                    </div>
                    <div className="profile-item">
                        <img src={feranmi} alt="samuel" />
                         <span className="edit-icon"><TiPencil className="pencil"/></span>
                        <p>Samuel</p>
                    </div>
                    <div className="profile-item">
                        <img src={temi} alt="temi" />
                         <span className="edit-icon"><TiPencil className="pencil"/></span>
                        <p>Temi</p>
                    </div>
                </div>
                <Link to="/"><button>Done</button></Link>
          </div>
        </div>
      </div>
    
        </div>
    );
}


export default ManageProfile;