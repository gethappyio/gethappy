import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from "./components/App/App";
import { AuthProvider } from "./components/AuthContext/AuthContext";

import "normalize.css";
import "./styles/app.scss";

ReactDOM.render(
    <BrowserRouter>
        <AuthProvider>
            <App />
        </AuthProvider>
    </BrowserRouter>, 
    document.getElementById("app"));