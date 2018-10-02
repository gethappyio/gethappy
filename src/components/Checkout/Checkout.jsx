import React, { Component } from "react";
import axios from "axios";
import qs from "qs";
import { Link } from "react-router-dom";
import Page from "../Page/Page";
import CheckoutBar from "./CheckoutBar";
import Cart from "./Cart";
import AddressCard from "../AddressCard/AddressCard";
import PaymentForm from "./PaymentForm";

class Checkout extends Component {

    constructor() {
        super();

        this.state = {
            cart: "",
            shippingAddress: ""
        }
    }
    
    componentDidMount() {
        let self = this;
        axios.post('/',  qs.stringify({
            action: '/commerce/cart/get-cart',
            CRAFT_CSRF_TOKEN: window.csrfTokenValue
        }))
        .then(function (response) {
            const checkoutData = response.data.cart;
            self.setState({
                cart: checkoutData.lineItems,
                shippingAddress: checkoutData.shippingAddress
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    
    }

    render() {
        return (
            <Page navigation={<CheckoutBar title="Checkout" />}>
                <Cart data={this.state.cart}/>
                <Link to="/checkout/new-address">New shipping address</Link>
                <AddressCard address={this.state.shippingAddress} />
                <PaymentForm />
            </Page>
        );
    }

}

export default Checkout;