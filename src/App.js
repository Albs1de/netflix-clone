import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ShowActualMovie from "./components/ShowActualMovie";
import GetRandomMovies from "./components/RandomActionBlock";
import GetRandomSeries from "./components/RandomSeriesBlock";
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
                <ShowActualMovie />
                <GetRandomMovies />
                <GetRandomSeries />
              </>
            }
          />
          <Route
            path="/show-series"
            element={
              <>
                <ShowSeries />
                <GetRandomSeries />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
