// src/Weather.js
import React, { useState } from 'react';
import axios from 'axios';
import MyNavbar from '../components/MyNavbar';
import Footer from '../components/Footer';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeatherData = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          q: city,
          appid: 'd9cd7656c459dff4f0527fdf1bdd2485', // Replace with your OpenWeather API key
          units: 'metric' // For temperature in Celsius
        }
      });
      setWeatherData(response.data);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <MyNavbar />
      <div className="pt-16"> {/* Adjust the padding to create space for the navbar */}
        <div className="max-w-3xl mx-auto my-8 p-4 bg-white shadow-lg rounded-lg">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg w-full"
            />
            <button
              onClick={fetchWeatherData}
              className="mt-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Get Weather
            </button>
          </div>

          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {weatherData && (
            <div>
              <h1 className="text-4xl font-bold mb-4 text-center">{weatherData.name}</h1>
              <div className="flex items-center justify-center mb-6">
                <img
                  src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                  alt={weatherData.weather[0].description}
                  className="w-16 h-16"
                />
                <div className="ml-4">
                  <h2 className="text-2xl font-semibold">{weatherData.main.temp}°C</h2>
                  <p className="text-xl">{weatherData.weather[0].description}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-100 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Temperature</h3>
                  <p>Feels Like: {weatherData.main.feels_like}°C</p>
                  <p>Min Temp: {weatherData.main.temp_min}°C</p>
                  <p>Max Temp: {weatherData.main.temp_max}°C</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Weather Details</h3>
                  <p>Humidity: {weatherData.main.humidity}%</p>
                  <p>Pressure: {weatherData.main.pressure} hPa</p>
                  <p>Visibility: {weatherData.visibility / 1000} km</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Wind</h3>
                  <p>Speed: {weatherData.wind.speed} m/s</p>
                  <p>Direction: {weatherData.wind.deg}°</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Clouds</h3>
                  <p>Coverage: {weatherData.clouds.all}%</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Sunrise/Sunset</h3>
                  <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
                  <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Weather;
