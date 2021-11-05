import React, { useEffect, useState } from "react";


export const WeatherContext = React.createContext();


const WeatherContextProvider = (props) => {
    const [selectedCity, setSelectedCity] = useState("istanbul")
    const [coordinates, setCoordinates] = useState([]);
    const [weather, setWeather] = useState([]);
    const api = {
        key: "a46e88f9ca6506ff398f35bb08161d91",
        URL: "https://api.openweathermap.org/data/2.5/"
    }
    console.log(selectedCity)
    const cityApi = `${api.URL}weather?q=${selectedCity}&appid=${api.key}`;
    const dailyApi = `${api.URL}onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=current,minutely,hourly&appid=${api.key}`;



    useEffect(() => {
        fetch(cityApi)
            .then(res => res.json())
            .then(data => setCoordinates(data.coord))
            .catch((err) => { });
        fetch(dailyApi)
            .then(res => res.json())
            .then(result => setWeather(result))
            .catch((err) => { });
    }, [cityApi, dailyApi])

    return (
        <WeatherContext.Provider value={{ selectedCity, setSelectedCity, weather }}>
            {props.children}
        </WeatherContext.Provider>
    )
}

export default WeatherContextProvider;