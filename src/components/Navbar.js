import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import MyList from "./MyList";
const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchValue}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSearchResults(data.results);
      });
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <nav className="bg-black text-white p-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-semibold text-xl">
          Streamflix
        </Link>
        <div>
          <form onSubmit={handleSearchSubmit}>
            <input
              style={{ color: "black" }}
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
            />
            <button type="submit"> Search</button>
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
