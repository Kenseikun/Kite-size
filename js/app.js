import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../scss/main.scss'
import { useLocalState } from './locHook'


import { Wages } from './Wages';
import { Main } from './Main';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="app">
                <Switch>
                    <Route path="/" exact component={Wages} />
                    <Route path="/main" component={Main} />
                </Switch>
            </div>
        </Router>
    )
}



ReactDOM.render(<App />, document.getElementById("app"));

