import React, { Component } from "react";
import Page from "../Page/Page";
import CheckoutBar from "./CheckoutBar";

class Checkout extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Page navigation={<CheckoutBar title="Checkout" />}>
                Checkout
            </Page>
        );
    }

}

export default Checkout;