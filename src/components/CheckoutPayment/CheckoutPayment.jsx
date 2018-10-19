import React, { Component } from "react";
import PaymentSwitcher from "../Checkout/PaymentSwitcher";
import StripeFormContainer from "../Checkout/StripeFormContainer";
import PaypalForm from "./PaypalForm";

class CheckoutPayment extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="section__wrapper">
                    <div className="section__col-xs-12">
                        <PaymentSwitcher />
                    </div>
                </div>
                <PaypalForm />
                <StripeFormContainer />
            </div>
        );
    }

}

export default CheckoutPayment;