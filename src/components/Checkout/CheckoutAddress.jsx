import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddressCard from "../AddressCard/AddressCard";
import "./styles/checkout-address.scss";

class CheckoutAddress extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const address = this.props.data;
        return (
            <div className="section__wrapper checkout-address__container">
                <div className="section__col-xs-12 checkout-address__inner">
                    <h2 className="checkout-address__title">Where should we send your stuff?</h2>
                    {address ? <AddressCard address={address} /> :
                         <p className="checkout-address__empty">No address</p>
                    }
                    <Link to="/checkout/new-address">New shipping address</Link>
                </div>
            </div>
        );
    }

}

export default CheckoutAddress;