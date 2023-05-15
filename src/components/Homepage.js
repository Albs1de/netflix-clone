import React from "react";
import GetMovies from "./ActionBlock";
import GetSeries from "./SeriesBlock";

const ShowMovies = () => {
  return (
    <div>
      <GetMovies />
      <GetSeries />
    </div>
  );
};

export default ShowMovies;
