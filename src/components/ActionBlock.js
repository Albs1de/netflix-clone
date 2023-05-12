import React, { useEffect, useState } from "react";
import CarouselFadeExample from "./Carousel";

const GetMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?s=Movies&page=1&apikey=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.Search))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <CarouselFadeExample movies={movies} />;
    </div>
  );
};

export default GetMovies;
