import Carousel from "react-bootstrap/Carousel";

function CarouselFadeExample({ movies }) {
  return (
    <Carousel fade>
      {movies ? (
        movies.map((movie, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={movie.Poster}
              alt={movie.Title}
            />
            <Carousel.Caption>
              <h3>{movie.Title}</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </Carousel>
  );
}

export default CarouselFadeExample;
