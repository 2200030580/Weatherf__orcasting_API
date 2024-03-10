import { useState } from "react";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
import Navbar from "./components/NavBar"
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import "./App.css";
import React from "react";
import { BrowserRouter as BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/signup/signup";
import SignIn from "./components/login-signup/login-signup";



function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };

  return (
    <div className="container" style={{marginTop : '-3.5rem'}}>
      <BrowserRouter > <Navbar/>
        <Routes> 
          
          <Route path="/signup" element ={<SignUp/>} /> 
          <Route path="/signin" element ={<SignIn/>} />
        </Routes> 
      </BrowserRouter> 
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
      
    </div>
    
  );
}

export default App;