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
                    <div className="location">Warsaw,PL</div>
                    <div className="date">{dateBuilder(new Date())}</div>
                </div>
            </main>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("app"));
