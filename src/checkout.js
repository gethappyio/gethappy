import React from "react";
import ReactDOM from "react-dom";
import ReactGA from 'react-ga';
import { BrowserRouter } from 'react-router-dom';
import Checkout from "./components/Checkout/Checkout";

import "normalize.css";
import "./styles/app.scss";

ReactGA.initialize(window.googleTrackingId);
ReactDOM.render(
    <BrowserRouter>
        <Checkout />
    </BrowserRouter>,
    document.getElementById("app"));