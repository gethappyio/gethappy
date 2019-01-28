import React from "react";
import ReactDOM from "react-dom";
import ReactGA from 'react-ga';
import { BrowserRouter } from 'react-router-dom';
import Checkout from "./components/Checkout/Checkout";

import "normalize.css";
import "./styles/app.scss";

ReactGA.initialize('UA-133360397-1');
ReactDOM.render(
    <BrowserRouter>
        <Checkout />
    </BrowserRouter>,
    document.getElementById("app"));