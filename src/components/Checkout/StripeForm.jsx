import React, { Component } from "react";
import {CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe} from "react-stripe-elements";
import "../Form/styles/form.scss";

const createOptions = (border) => {
    return {
      style: {
        base: {
          fontSize: "16px"
        }
      },
    };
  };

class StripeForm extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div className="form__wrapper">
                <div className="form-field__col-xs-12">
                    <CardNumberElement {...createOptions(this.props.border)} />
                </div>
                <div className="form-field__col-xs-6">
                    <CardExpiryElement />
                </div>
                <div className="form-field__col-xs-6">
                    <CardCVCElement />
                </div>
            </div>
        );
    }

}

export default injectStripe(StripeForm);