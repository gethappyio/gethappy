import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactGA from 'react-ga';
import Addresses from "./components/Addresses/Addresses";
import AddressFormContainer from "./components/AddressForm/AddressFormContainer";
import { BrowserRouter, Switch, Route} from "react-router-dom";

import "normalize.css";
import "./styles/app.scss";

ReactGA.initialize(window.googleTrackingId);

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/user/addresses' component={Addresses} />
            <Route exact path='/user/addresses/edit' component={AddressFormContainer} />
            <Route exact path='/user/addresses/edit/:id' component={AddressFormContainer} />
        </Switch>
    </BrowserRouter>, 
    document.getElementById("app"));