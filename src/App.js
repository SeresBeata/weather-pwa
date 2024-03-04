import { useState } from "react";
import fetchWeather from "./api/fetchWeather";
import "./App.css";

function App() {
  //create state variables
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  //create function
  const search = async (e) => {
    //check if pressed key is equel to "enter"
    if (e.key === "Enter") {
      const data = await fetchWeather(query);

      //test if data is returned after API call
      console.log(data);

      //use setWeather
      setWeather(data);
      //clear query
      setQuery("");
    }
  };

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Type your city for weather!"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={search}
      />
      {/* Use the && operator */}
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C </sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
