import React, { Component } from "react";
import ReactDOM from "react-dom";
import Test from "./components/test/Test";
import Header from "./components/header/Header";
import Bottom from "./components/bottom/Bottom";

import "normalize.css";
import "./styles/app.scss";

var wrapperHeader = document.getElementById("happyHeader");
wrapperHeader ? ReactDOM.render(<Header />, wrapperHeader) : false;

var wrapperBottom = document.getElementById("happyBottom");
wrapperBottom ? ReactDOM.render(<Bottom />, wrapperBottom) : false;