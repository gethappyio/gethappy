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
    action: 'gethappy/orders/get-order',
    CRAFT_CSRF_TOKEN: window.csrfTokenValue,
    orderId: 29
}))
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});