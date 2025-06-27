import React, { useEffect } from "react";
import "./Home.scss";
import NavBar from "../../Component/NavBar/NavBar";
import Featured from "../../Component/Featured/Featured";
import List from "../../Component/List/List";
import { Link } from "react-router-dom";
import ListItem from "../../Component/ListItem/ListItem";

const Home = () => {
      useEffect(() => {
      document.title = 'Home';
    }, []);
  return (
    <>
    <div className="home">
      <Featured type="movie" />
    </div>
    <div className="home">
      <List />
      <List />
    </div>
    </>
  );
};

export default Home;
