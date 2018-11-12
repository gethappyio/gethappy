import React, { Component } from "react";
import {Elements, StripeProvider} from "react-stripe-elements";
import StripeForm from "./StripeForm";

class StripeFormContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <StripeProvider apiKey="pk_test_4ShmpSjoZ0tn9cIY0i8Er3Me">
                <Elements>
                    <StripeForm loadingCallback={this.props.loadingCallback} />
                </Elements>
            </StripeProvider>
        );
    }

}

export default StripeFormContainer;