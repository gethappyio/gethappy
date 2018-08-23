import React, { Component } from "react";
import ReactDOM from "react-dom";
import Test from "./components/test/Test";
import Header from "./components/header/Header";

import "normalize.css";
import "./styles/app.scss";

const wrapper = document.getElementById("happyHeader");
wrapper ? ReactDOM.render(<Header />, wrapper) : false;