import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/main.scss';

const api = {
    key: "29dc34babeac1dbc1c3403ac23b711fb",
    base: "https://api.openweathermap.org/data/2.5/"
}

const App = () => {

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
                        placeholder="Search...">
                    </input>
                </div>
                <div className="location-box">
                    <div className="location">Warsaw , PL</div>
                    <div className="date">{dateBuilder(new Date())}</div>
                </div>
                <div className="weather-box">
                    <div className="temp">15*c</div>
                    <div className="weather">Sunny</div>
                </div>
            </main>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("app"));
