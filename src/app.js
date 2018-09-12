import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "normalize.css";
import "./styles/app.scss";

var wrapperHeader = document.getElementById("happyHeader");
wrapperHeader ? ReactDOM.render(<Header container="false" />, wrapperHeader) : false;

var wrapperFooter = document.getElementById("happyFooter");
wrapperFooter ? ReactDOM.render(<Footer container="false" />, wrapperFooter) : false;