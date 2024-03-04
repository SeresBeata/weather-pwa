import { useState } from "react";
import fetchWeather from "./api/fetchWeather";
import "./App.css";

function App() {
  return <div className="App">Hello World!</div>;
  //create state variable
  const [query, setQuery] = useState("");

  //create function
  const search = async (e) => {
    //check if pressed key is equel to "enter"
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
    }
  };
}

export default App;
