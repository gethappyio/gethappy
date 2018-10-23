import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";

import "normalize.css";
import "./styles/app.scss";

ReactDOM.render(
    <BrowserRouter>
         <Switch>
            <Route exact path='/forgotpassword' component={ForgotPassword}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById("app"));