import React from "react";
import ReactDOM from "react-dom";
import AddressCard from "./components/AddressCard/AddressCard";

ReactDOM.render(
    window.customerAddressData.map((address) => 
        <AddressCard address={address} />
    ), 
    document.getElementById("userAddresses"));