import React from "react";
import FetchBlock from "./APIFetches/SeriesFetchBlock";

const ShowSeries = () => {
  return (
    <div>
      <FetchBlock
        title="Action Series"
        endPoint={`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10759`}
      />

      <FetchBlock
        title="Comedy Series"
        endPoint={`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`}
      />
      <FetchBlock
        title="Crime Series"
        endPoint={`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=80`}
      />
    </div>
  );
};

export default ShowSeries;
