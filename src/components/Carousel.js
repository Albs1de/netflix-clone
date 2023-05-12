// CarouselFade.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselFade({ movieOrTVShow }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <Slider {...settings}>
        {movieOrTVShow &&
          movieOrTVShow.map((movie, index) => (
            <div key={index}>
              <img
                className="w-100"
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title || movie.name}
              />
              <h2 style={{ color: "white" }}>{movie.title || movie.name}</h2>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default CarouselFade;
