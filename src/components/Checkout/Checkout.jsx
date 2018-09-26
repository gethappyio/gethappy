import React, { Component } from "react";
import axios from "axios";
import qs from "qs";
import Page from "../Page/Page";
import CheckoutBar from "./CheckoutBar";
import Cart from "./Cart";
import AddressCard from "../AddressCard/AddressCard";

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
                Checkout
                <Cart data={this.state.cart}/>
                <AddressCard address={this.state.shippingAddress} />
            </Page>
        );
    }

}

export default Checkout;