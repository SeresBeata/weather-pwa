import { useState } from "react";
import fetchWeather from "./api/fetchWeather";
import "./App.css";

function App() {
  //create state variable
  const [query, setQuery] = useState("");

  //create function
  const search = async (e) => {
    //check if pressed key is equel to "enter"
    if (e.key === "Enter") {
      const data = await fetchWeather(query);

      //test if data is returned after API call
      console.log(data);
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
    </div>
  );
}

export default App;
