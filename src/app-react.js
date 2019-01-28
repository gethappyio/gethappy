import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactGA from 'react-ga';
import { BrowserRouter } from 'react-router-dom';
import App from "./components/App/App";
import { AuthProvider } from "./components/AuthContext/AuthContext";

import "normalize.css";
import "./styles/app.scss";

ReactGA.initialize(window.googleTrackingId);

ReactDOM.render(
    <BrowserRouter>
        <AuthProvider>
            <App />
        </AuthProvider>
    </BrowserRouter>, 
    document.getElementById("app"));