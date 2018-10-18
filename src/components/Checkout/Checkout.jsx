import React, { Component } from "react";
import axios from "axios";
import qs from "qs";
import { Link } from "react-router-dom";
import Page from "../Page/Page";
import CheckoutBar from "./CheckoutBar";
import Cart from "./Cart";
import AddressCard from "../AddressCard/AddressCard";
import PaymentSwitcher from "./PaymentSwitcher";
import StripeFormContainer from "./StripeFormContainer";

class Checkout extends Component {

    constructor() {
        super();

        this.state = {
            cart: "",
            shippingAddress: "",
            email: ""
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
                shippingAddress: checkoutData.shippingAddress,
                email: checkoutData.email
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    outputAddress(address) {
        return (
            <AddressCard address={address} />
        );
    }

    render() {
        let addresses = this.state.shippingAddress ? this.outputAddress(this.state.shippingAddress) : "";
        return (
            <Page navigation={<CheckoutBar title="Checkout" />}>
                <Cart data={this.state.cart}/>
                <Link to="/checkout/new-address">New shipping address</Link>
                {addresses}
                <div className="section__wrapper">
                    <div className="section__col-xs-12">
                        <PaymentSwitcher />
                    </div>
                </div>
                <StripeFormContainer />
            </Page>
        );
    }

}

export default Checkout;