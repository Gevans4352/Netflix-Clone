import { useEffect } from "react";
import "./BrowseLanguage.scss";
import NewandPopular from "../../Component/newsListItem/newListItem";
import NewOnNetflix from "../../Component/NewOnNetflix/NewOnNetFlix";
import NewsPopular from "../NewsPopular/NewsPopular";


const BrowseLanguage = ()=>{
        useEffect(() => {
        document.title = 'Browse Languages';
      }, []);
    return(
        <>
        <div className="anotherRando">

        <br />
        <NewsPopular/>
        </div>
        </>
    );
}

export default BrowseLanguage;