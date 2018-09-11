import React, { Component } from "react";
import ReactDOM from "react-dom";
import Addresses from "./components/Addresses/Addresses";
import AddressForm from "./components/AddressForm/AddressForm";
import { BrowserRouter, Switch, Route} from "react-router-dom";

import "normalize.css";
import "./styles/app.scss";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/user/addresses' component={Addresses} />
            <Route exact path='/user/addresses/edit' component={AddressForm} />
            <Route exact path='/user/addresses/edit/:id' component={AddressForm} />
        </Switch>
    </BrowserRouter>, 
    document.getElementById("app"));