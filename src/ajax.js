import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";


axios.get('/experience.json')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });