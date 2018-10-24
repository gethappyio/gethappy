import React, { Component } from "react";
import "./styles/checkout-bar.scss";
import logo from "../../assets/icons/logo-full-navy.svg";

class CheckoutBar extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="checkout-bar__wrapper">
                <div className="checkout-bar__wrapper-inner">
                    <div className="checkout-bar__element"></div>
                    <div className="checkout-bar__element"><a href="/"><img className="checkout-bar__logo" src={logo} /></a></div>
                    <div className="checkout-bar__element"></div>
                </div>
            </div>
        );
    }

}

export default CheckoutBar;