import React from "react";
import ReactDOM from "react-dom";
import ReactGA from 'react-ga';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import ProfileForm from "./components/ProfileForm/ProfileForm";

import "normalize.css";
import "./styles/app.scss";

ReactGA.initialize(window.googleTrackingId);
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/user/profile' component={ProfileForm} />
        </Switch>
    </BrowserRouter>, 
    document.getElementById("app"));