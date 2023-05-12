import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Carousel.css";
import { Carousel } from "react-responsive-carousel";

function CarouselFadeExample({ movies }) {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showIndicators={false}>
      {movies.map((movie, index) => (
        <div key={index}>
          <img className="w-25 h-50" src={movie.Poster} alt={movie.Title} />
          <p className="legend">{movie.Title}</p>
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselFadeExample;
