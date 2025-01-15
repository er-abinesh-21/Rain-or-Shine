import React from 'react';
import Weather from './Weather';
import './App.css';

const App = () => {
    return (
        
        <div>
           <div className="container">
                    <img className='logo' src="https://img.icons8.com/?size=100&id=15340&format=png&color=000000" alt="weather"/>
                    <h2 className="title">Rain or Shine - Weather App</h2>
                </div>

            <div className="App">
                <Weather />
            </div>
        </div>
    );
};

export default App;
