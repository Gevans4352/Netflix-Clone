import "./App.scss";
import Home from "./Pages/Homepage/Home";
import Register from "./Pages/Registered/Register";
import Watch from "./Pages/Watch/Watch";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Pages/Profile/Profile";
import ManageProfile from "./Pages/ManageProfile/ManageProfile";
import NavBar from "./Component/NavBar/NavBar";
import { Outlet } from "react-router";
import TvShow from "./Pages/TvShow/TvShow";
import Games from "./Pages/Games/Games";
import NewsPopular from "./Pages/NewsPopular/NewsPopular";
import MyList from "./Pages/MyList/MyList";
import BrowseLanguage from "./Pages/BrowseLanguage/BrowseLanguage";
import SearchResults from "./Pages/SearchResults/SearchResults";
import TvShowNavBar from "./Component/TvShowNavBar/TvShowNavBar";
import BrowseNavBar from "./Component/BrowseLangLayout/BrowseNavBar";
import MoviesNavBar from "./Component/MoviesLayOut/MoviesNavBar";

// main layout
const SomeParent = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

const TvShowLayout = () => {
  return (
    <>
      <NavBar alwaysBlack={true}/>
      <TvShowNavBar />
      <Outlet />
    </>
  );
};

const MoviesLayout = () =>{
  return(
    <>
    <NavBar alwaysBlack={true}/>
    <MoviesNavBar/>
    <Outlet/>
    </>
  );
};

const BrowseLangLayout = () => {
  return(
    <><NavBar alwaysBlack={true} />
    <BrowseNavBar />
    <Outlet /></>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <main id="app">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/Register" element={<Register />} />
          <Route element={<SomeParent />}>
            <Route path="/Profile" element={<Home />} />
            <Route path="/search-results" element={<SearchResults />} />
            <Route path="/Manage Profile" element={<ManageProfile />} />
            <Route path="/games" element={<Games />} />
            <Route path="/news-popular" element={<NewsPopular />} />
            <Route path="/my-list" element={<MyList />} />
          </Route>
          <Route element={<TvShowLayout />}>
            <Route path="/tv-show" element={<TvShow />} />
          </Route>
          <Route element={<BrowseLangLayout/>}>
            <Route path="/browse-language" element={<BrowseLanguage />} />
          </Route>
          <Route element={<MoviesLayout/>}>
           <Route path="/Watch" element={<Watch />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
