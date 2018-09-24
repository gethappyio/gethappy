import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import NewUserForm from "./components/NewUserForm/NewUserForm";

import "normalize.css";
import "./styles/app.scss";

var loginForm = document.getElementById("loginForm");
loginForm ? ReactDOM.render(<LoginForm />, loginForm) : false;

ReactDOM.render(
    <div><LoginForm /></div>,
    document.getElementById("app"));