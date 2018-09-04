import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./components/LoginForm/LoginForm";

var loginForm = document.getElementById("loginForm");
loginForm ? ReactDOM.render(<LoginForm />, loginForm) : false;
