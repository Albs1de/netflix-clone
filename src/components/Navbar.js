import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import MyList from "./MyList";
import "../styles/Navbar.css";
const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    Promise.all([
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchValue}`
      ),
      fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&query=${searchValue}`
      ),
    ])
      .then(([movieResponse, seriesResponse]) => {
        if (!movieResponse.ok || !seriesResponse.ok) {
          throw new Error("Fehler beim Aufrufen der Daten!");
        }
        return Promise.all([movieResponse.json(), seriesResponse.json()]);
      })
      .then(([movieData, seriesData]) => {
        setSearchResults([...movieData.results, ...seriesData.results]);
      })
      .catch((error) => {
        console.log("Fehler beim Aufrufen der Daten: ", error);
      });
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <nav className="bg-black text-white p-3">
      <div className="nav-container container mx-auto flex justify-between items-center">
        <Link to="/" className="logo-name-link">
          Streamflix
        </Link>
        <div className="navbar-div">
          <form onSubmit={handleSearchSubmit}>
            <input
              className="input-nav"
              style={{ color: "black" }}
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
            />
            <button type="submit" className="navbar-button">
              {" "}
              Search
            </button>
          </form>
          <Link to="/" className="mx-2">
            Home
          </Link>
          <Link to="/show-series">Series</Link>
        </div>
      </div>
      <MyList searchResults={searchResults} />
    </nav>
  );
};

export default Navbar;
