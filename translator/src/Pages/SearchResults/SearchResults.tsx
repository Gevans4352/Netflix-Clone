
import "./SearchResults.scss";
import { useLocation } from 'react-router-dom';
import gameData from "../../data/GamesData";
import ProfileData from "../../data/Profile";
import tvShowData from "../../data/TvShowData";
import movieData from "../../data/Watch";
import newsData from "../../data/newsData";
import BrowseLangData from "../../data/BrowseLangData";

// import myListData from "../../data/myListData";



const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query")?.toLowerCase() || "";
  const from = searchParams.get("from") || "";
  let content: any[] = [];

  if (from.includes("games")) content = gameData;
  else if (from.includes("tv-show")) content = tvShowData;
  else if (from.includes("watch")) content = movieData;
  else if (from.includes("news-popular")) content = newsData;
  else if (from.includes("Profile")) content = ProfileData;
  else if (from.includes("browse-language")) content = BrowseLangData; 
  const results = content.filter((item) =>
    item.name.toLowerCase().includes(query) ||
    item.genre.toLowerCase().includes(query) ||
    item.age.toString().includes(query)
  );

  return (
    <div className="search-results-page">
      <h2>Search Results for: <em>{query}</em></h2>
      {results.length === 0 ? (
        <p className="emptySearch">
          Your search did not have any matches
          <br /> Suggestion:
          <br /> • Try different keywords
          <br /> • Looking for a Movie or Tv show?
          <br /> • Try using a movie, tvshow, title to search
          <br /> • Try genre like romance, sports or drama
        </p>
        ) : (
        <div className="results-list">
          {results.map((item) => (
           <div key={item.id} className="result-card">
              <div className="card-image-container">
                <img src={item.img} alt={item.name} className="card-image" />
              </div>
              <div className="card-text-content">
                <h4>{item.name}</h4>
                <p>{item.genre} • {item.age}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;









