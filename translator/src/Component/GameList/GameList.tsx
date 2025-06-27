import "./GameList.scss";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";


const GameList = ()=>{
    return(
    <div className='list'>
        <span className="listTitle">Popular Mobile Games for You</span>
            <div className='wrapper'>
                <MdKeyboardArrowLeft/>
                <div className="container" >
                  
                </div>
                <MdKeyboardArrowRight className='sliderArrow right'/>

                <span>Pick Up and Play Mobile Games</span>
            </div>
        </div>
    );

}

export default GameList;