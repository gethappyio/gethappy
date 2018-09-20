import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import ProfileForm from "./components/ProfileForm/ProfileForm";

import "normalize.css";
import "./styles/app.scss";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/user/profile' component={ProfileForm} />
        </Switch>
    </BrowserRouter>, 
    document.getElementById("app"));