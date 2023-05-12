import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Carousel.css";
import { Carousel } from "react-responsive-carousel";

function CarouselFade({ movieOrTVShow }) {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showIndicators={false}>
      {movieOrTVShow &&
        movieOrTVShow.map((item, index) => (
          <div key={index}>
            <img
              className="w-25 h-50"
              src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
              alt={item.title}
            />
            <p className="legend">{item.title || item.name}</p>
          </div>
        ))}
    </Carousel>
  );
}

export default CarouselFade;
