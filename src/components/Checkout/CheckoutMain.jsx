import React, { Component } from "react";
import axios from "axios";
import qs from "qs";
import { Interstitial } from "../Loading/Loading";
import { CSSTransition } from 'react-transition-group';
import {siftJSON, findImages, preLoadImages} from "../../utils/preload";
import Page from "../Page/Page";
import CheckoutBar from "./CheckoutBar";
import Cart from "./Cart";
import CheckoutAddress from "./CheckoutAddress";
import AddressCard from "../AddressCard/AddressCard";
import CheckoutPayment from "../CheckoutPayment/CheckoutPayment";
import "./styles/checkout.scss";

class CheckoutMain extends Component {

    constructor() {
        super();

        this.state = {
            cart: "",
            shippingAddress: "",
            email: "",
            loading: false,
            in: true
        }

        this.setLoading = this.setLoading.bind(this);
    }
    
    componentDidMount() {
        let self = this;
        axios.post('/',  qs.stringify({
            action: '/gethappy/cart/get-cart',
            CRAFT_CSRF_TOKEN: window.csrfTokenValue
        }))
        .then(function (response) {
            const checkoutData = response.data.cart;

            var testArray = [];
            siftJSON(response.data,testArray);
            preLoadImages(findImages(testArray), function() {
                self.setState({
                    cart: response.data,
                    shippingAddress: checkoutData.shippingAddress,
                    email: checkoutData.email,
                    in: false
                });
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    setLoading(isLoading) {
        this.setState({
            loading: isLoading
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
            <div className="base__expand">
                <CSSTransition
                    in={this.state.in}
                    timeout={400}
                    classNames="loading-interstitial"
                    unmountOnExit>
                    <Interstitial loading="true" solid="true" />
                </CSSTransition>
                <Page navigation={<CheckoutBar title="Checkout" />} footer="false" scrollId="scrollWindow">
                    <Interstitial loading={this.state.loading} prompt="processing payment... do not refresh" />
                    <div className="base__narrow">
                        <h2 className="checkout__msg">Awesome, almost there!</h2>
                        {this.state.cart ? <Cart data={this.state.cart}/> : "" }
                        <CheckoutAddress data={this.state.shippingAddress}/>                
                        <CheckoutPayment loadingCallback={this.setLoading} />
                    </div>
                </Page>
            </div>
        );
    }

}

export default CheckoutMain;