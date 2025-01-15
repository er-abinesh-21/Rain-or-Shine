import React, { useState } from 'react';
import axios from 'axios';
import { FaSun, FaCloud, FaCloudRain, FaSnowflake, FaBolt, FaSmog } from 'react-icons/fa';
import Spinner from 'react-bootstrap/Spinner';
import './Weather.css';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [unit, setUnit] = useState('metric');

    const fetchWeather = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`http://localhost:5000/weather`, {
                params: { city, unit },
            });
            setWeather(response.data);
        } catch (err) {
            setError('City not found');
            setWeather(null);
        } finally {
            setLoading(false);
        }
    };

    const getWeatherIcon = (condition) => {
        switch (condition.toLowerCase()) {
            case 'clear':
                return <FaSun size={190} color="orange" />;
            case 'clouds':
                return <FaCloud size={190} color="rgb(85, 85, 85)" />;
            case 'rain':
                return <FaCloudRain size={190} color="blue" />;
            case 'snow':
                return <FaSnowflake size={190} color="skyblue" />;
            case 'thunderstorm':
                return <FaBolt size={190} color="yellow" />;
            case 'mist':
            case 'haze':
            case 'fog':
                return <FaSmog size={190} color="rgb(222, 222, 222)" />; 
            case 'dust':
            case 'smoke':    
                return <FaSmog size={190} color="rgb(128, 128, 128)" />;
            default:
                return null;
        }
    };

    return (
        <div>
            

            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
                className=" city-input"
            />

            <div>
            <button onClick={fetchWeather} className="button">
                Get Weather
            </button>
            </div>


            <div className='unit-selection'>
                <p className='unit'>Unit :</p>

                <label className='metric'>
                    <input
                        type="radio"
                        value="metric"
                        checked={unit === 'metric'}
                        onChange={() => setUnit('metric')}
                    /> Metric
                </label>

                <label className="imperial">
                    <input
                        type="radio"
                        value="imperial"
                        checked={unit === 'imperial'}
                        onChange={() => setUnit('imperial')}
                    /> Imperial
                </label>

            </div>


            {loading && <Spinner animation="border" />}
            {error && <div className="text-danger">{error}</div>}
            {weather && (


                <div>

                    <div className='ct'> <p className='city-name'>{weather.name}</p> </div>

                    <div className='weather-icon'> {getWeatherIcon(weather.weather[0].main)} </div>

                    <p className='degree'>{weather.main.temp}°{unit === 'metric' ? 'C' : 'F'}</p>


                    <div className='wr'> <p className='description'>{weather.weather[0].description}</p> </div>

                    <img className='humidity-logo' src="https://img.icons8.com/?size=60&id=15365&format=png&color=000000" alt="Humidity"/>
                    <p className='humidity'>{weather.main.humidity}%</p> 
                    <p className='name1'>Humidity</p>

                    <img className='wind-logo' src="https://img.icons8.com/?size=60&id=NFarzlQfH1Dz&format=png&color=ffffff" alt="Wind-Speed"/>
                    <p className='wind'> {weather.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}</p>
                    <p className='name2'>Wind Speed</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
