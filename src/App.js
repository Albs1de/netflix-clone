import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ShowMovies from "./components/ShowMovies";
import GetMovies from "./components/ActionBlock";
import GetSeries from "./components/SeriesBlock";
import ShowSeries from "./components/ShowSeries";
function App() {
  return (
    <div className="app-div">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ShowMovies />
                <GetMovies />
              </>
            }
          />
          <Route
            path="/show-series"
            element={
              <>
                <ShowSeries />
                <GetSeries />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
