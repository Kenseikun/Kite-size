import React, { useState } from 'react';
import '../scss/main.scss'
import shaka from '../images/shaka.svg'
import { Link } from 'react-router-dom';
import { useLocalState } from './locHook';

const api = {
    key: "29dc34babeac1dbc1c3403ac23b711fb",
    base: "https://api.openweathermap.org/data/2.5/"
}

export const Main = () => {


    const [wage, setWages] = useLocalState(wage);

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = event => {
        if (event.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&unites=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                    console.log(result);

                });
        }
    }

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} - ${date} - ${month} - ${year}`

    }

    let arrowStyle = {
        transform: weather.wind === undefined ? "0deg" : `rotate(-${weather.wind.deg}deg)`
    }

    let locStorage = (wage);



    const kiteSize = () => {


        if (weather.wind.speed === undefined) {
            return "no data.."
        }
        const speedSize = weather.wind.speed * 1.94

        if (speedSize < 10) {
            return "Too low"
        }
        else if (speedSize >= 10 && speedSize < 12) {
            return (12 + parseInt(locStorage));
        }
        else if (speedSize >= 12 && speedSize < 17) {
            return (14 + parseInt(locStorage));
        }
        else if (speedSize >= 17 && speedSize < 21) {
            return (12 + parseInt(locStorage));
        }
        else if (speedSize >= 21 && speedSize < 24) {
            return (9 + parseInt(locStorage));
        }
        else if (speedSize >= 24) {
            return (7 + parseInt(locStorage));
        }
        else {
            return "Stay at home!"
        }
    }



    return (
        <main>
            <div className="search-box">
                <input type="text"
                    className="search-bar"
                    placeholder="Search your spot..."
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={search}
                >
                </input>
                <img className="shaka" src={shaka}></img>
                <Link to="/">
                    <button className="main-btn__back"><i className="return-arrow fas fa-arrow-alt-circle-left"></i></button>
                </Link>

            </div>
            {(typeof weather.main != "undefined") ? (
                <div>
                    <div className="location-box">
                        <div className="location">{weather.name},  {weather.sys.country}</div>
                        <div className="date">{dateBuilder(new Date())}</div>
                    </div>

                    <div className="weather-box">
                        <h1 className="size-info">What <span>kite</span> should I use?</h1>

                        <div className="kite-size">
                            {kiteSize()}
                        </div>

                        <div className="direction-box">
                            <p className="north">N</p>

                            <div className="wind-box">

                                <div className="temp">
                                    {Math.round(((weather.main.temp / 10) - 32) / 1.8)}°c
                                     </div>

                                <div className="wind" style={arrowStyle}><i className="arrow fas fa-location-arrow"></i></div>

                                <p className="knots">{Math.round(weather.wind.speed * 1.94)} kn</p>
                            </div>

                            <p className="south">S</p>
                        </div>

                    </div>
                </div>
            ) : ('')}
        </main>

    )
}

