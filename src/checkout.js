import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import Checkout from "./components/Checkout/Checkout";

import "normalize.css";
import "./styles/app.scss";

ReactDOM.render(
    <BrowserRouter>
        <Checkout />
    </BrowserRouter>,
    document.getElementById("app"));