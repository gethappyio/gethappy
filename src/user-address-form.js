import React from "react";
import ReactDOM from "react-dom";
import AddressForm from "./components/AddressForm/AddressForm";

var addressForm = document.getElementById("userAddressForm");
addressForm ? ReactDOM.render(<AddressForm addressData={window.addressData}/>, addressForm) : false;