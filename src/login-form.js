import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import NewUserForm from "./components/NewUserForm/NewUserForm";

var loginForm = document.getElementById("loginForm");
loginForm ? ReactDOM.render(<LoginForm />, loginForm) : false;

var newUserForm = document.getElementById("newUserForm");
newUserForm ? ReactDOM.render(<NewUserForm />, newUserForm) : false;
