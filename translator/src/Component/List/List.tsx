import './List.scss'
import ListItem from '../ListItem/ListItem'; 
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React, { useRef, useState } from 'react';
import NewandPopular from '../newsListItem/newListItem';



const List = ()=>{
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const [ishovered, setIsHovered] = useState(false);

    const listRef = useRef<HTMLDivElement>(null)

    const handleClick = (direction: string)=>{
        setIsMoved(true)
        if(!listRef.current){
            return;
        }
        let distance = listRef.current.getBoundingClientRect().x - 50
        if(direction === 'left' && slideNumber > 0){
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${200 + distance}px)`
        }
        if(direction === 'right' && slideNumber < 5){
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-200 + distance}px)`
        }
        console.log("object")
    }
    return(
    <div className="sectionDance">
        <div className='list'>
            <span className="listTitle">Continue Watching</span>
            <div className='wrapper'>
                <KeyboardArrowLeftIcon 
                className='sliderArrow left'
                   onClick={()=>{handleClick("left")}}
                   style={{ display: !isMoved ? "none" : "block"}}
                />
                <div className="container" ref={listRef}>
                    <ListItem/>
                    <br />
                    <ListItem/>
                    <br />
                    <NewandPopular/>
                    <br />
                </div>
                <KeyboardArrowRightIcon className='sliderArrow right'  onClick={()=>{handleClick("right")}}/>
            </div>
        </div>
        </div>
    )
}

export default List;