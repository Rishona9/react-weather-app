import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Cleveland" />
        <footer>
          This app was coded by Rishona Lee and is {""}
          <a
            href="https://github.com/Rishona9/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-source
          </a>{" "}
          <a
            href="https://dapper-pithivier-acdbbe.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            and hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
