import React from "react";
import CarouselFade from "./Carousel";

const MyList = ({ searchResults }) => {
  return (
    <div>
      <CarouselFade movieOrTVShow={searchResults} />
    </div>
  );
};
export default MyList;
