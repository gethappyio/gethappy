import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from "./components/App/App";
import { AuthProvider } from "./components/AuthContext/AuthContext";

import brandonWoff from './assets/fonts/brandon_reg-webfont.woff';
import brandonWoff2 from './assets/fonts/brandon_reg-webfont.woff2';
import brandonEot from './assets/fonts/brandon_reg-webfont.eot';
import brandonTtf from './assets/fonts/brandon_reg-webfont.ttf';
import brandonSvg from './assets/fonts/brandon_reg-webfont.svg';

import "normalize.css";
import "./styles/app.scss";

ReactDOM.render(
    <BrowserRouter>
        <AuthProvider>
            <App />
        </AuthProvider>
    </BrowserRouter>, 
    document.getElementById("app"));