import React, { useContext } from 'react'
import { WeatherContext } from '../context/WeatherContext';
import Dropdown from './Dropdown';
import "../App.css"

const Weather = () => {

    const { selectedCity, weather } = useContext(WeatherContext)


    function dtConverter(UNIX_TIMESTAMP) {
        var date = new Date(UNIX_TIMESTAMP * 1000).toString().split(" ")[0];
        return date;

    }

    return (
        <div>
            <Dropdown />
            <ul className="weather">
                {
                    weather.daily && weather.daily.map((e, i) => (
                        <li key={i} className="weatherBody">
                            <div className="cardInfo">
                                <div className="carHeader">{dtConverter(e.dt)}</div>
                                <div>
                                    <img
                                        src={`https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`}
                                        alt="weatherImg"
                                    />
                                </div>
                                <div className="description">
                                    {e.weather[0].description.toUpperCase()}
                                </div>
                                <div className="derece">
                                    <span>
                                        {Math.floor(e.temp.min - 272, 15)}º
                                    </span>
                                    <span>/</span>
                                    <span>
                                        {Math.floor(e.temp.max - 272, 15)}º
                                    </span>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Weather;
