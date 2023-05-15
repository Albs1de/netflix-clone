import React, { useState, useEffect } from "react";
import CarouselFade from "../Carousel";

const FetchBlock = ({ title, endPoint }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(endPoint)
      .then((response) => {
        return response.json();
      })

      .then((response) => {
        console.log(response);
        setData(response.results);
      })
      .catch((error) => console.error(error));
  }, [endPoint]);

  return (
    <div className="series-fetch-block">
      <p className="heading-p">{title}</p>
      <CarouselFade movieOrTVShow={data} />
    </div>
  );
};

export default FetchBlock;
