// GetSeries.js
import React, { useEffect, useState } from "react";
import CarouselFade from "./Carousel";
import "../styles/SeriesBlock.css";
const GetSeries = () => {
  const [tvShow, setTvShow] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
    )
      .then((response) => response.json())
      .then((response) => setTvShow(response.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <p>Some random Series</p>
      <CarouselFade movieOrTVShow={tvShow} />
    </div>
  );
};

export default GetSeries;
