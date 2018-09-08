import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import qs from "qs";


axios.get('/experience.json')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

axios.post('/', qs.stringify({
    action: 'gethappy/customer-addresses/retrieve',
    CRAFT_CSRF_TOKEN: window.csrfTokenValue
}))
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});