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
    action: 'commerce/cart/update-cart',
    CRAFT_CSRF_TOKEN: window.csrfTokenValue,
    redirect: "/cart",
    qty: 1,
    purchasableId: 14
}))
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});