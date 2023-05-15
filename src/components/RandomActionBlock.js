import React, { useEffect, useState } from "react";
import CarouselFade from "./Carousel";
import "../styles/ActionBlock.css";
const GetRandomMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <p className="heading-p">Some random Movies</p>
      <CarouselFade movieOrTVShow={movies} />;
    </div>
  );
};

export default GetRandomMovies;
