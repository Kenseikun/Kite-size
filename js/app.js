import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../scss/main.scss';

const api = {
    key: "29dc34babeac1dbc1c3403ac23b711fb",
    base: "https://api.openweathermap.org/data/2.5/"
}


const App = () => {


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

    let arrowStyle = {
        color: 'yellow',
        transform: 'rotate({weather.wind.speed})',

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


    return (
        <div className="app">
            <main>
                <div className="search-box">
                    <input type="text"
                        className="search-bar"
                        placeholder="Search..."
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}>
                    </input>
                </div>
                {(typeof weather.main != "undefined") ? (
                    <div>
                        <div className="location-box">
                            <div className="location">{weather.name}</div>
                            <div className="date">{dateBuilder(new Date())}</div>
                        </div>
                        <div className="weather-box">
                            <div className="temp">
                                {Math.round(weather.main.temp)}°c
                                </div>
                            <div className="wind" style={arrowStyle}><i className="arrow fas fa-arrow-right"></i></div>
                        </div>
                    </div>
                ) : ('')}
            </main>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("app"));
