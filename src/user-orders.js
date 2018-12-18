import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import { CSSTransition } from 'react-transition-group'
import Orders from "./components/Orders/Orders";
import OrderView from "./components/OrderView/OrderView";

import "normalize.css";
import "./styles/app.scss";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/user/orders' component={Orders} />
            <Route exact path='/user/orders/view/:number' component={OrderView} />
        </Switch>
    </BrowserRouter>, 
    document.getElementById("app"));