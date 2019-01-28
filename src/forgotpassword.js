import React from "react";
import ReactDOM from "react-dom";
import ReactGA from 'react-ga';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";

import "normalize.css";
import "./styles/app.scss";

ReactGA.initialize('UA-133360397-1');
ReactDOM.render(
    <BrowserRouter>
         <Switch>
            <Route exact path='/forgotpassword' component={ForgotPassword}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById("app"));