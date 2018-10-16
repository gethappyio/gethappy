import React, { Component } from "react";
import axios from "axios";
import qs from "qs";
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
        this.submit = this.onSubmit.bind(this);
    }

    onSubmit(ev) {
        let {stripe} = this.props;

        stripe.createToken({name: "Name"})
        .then(({token}) => {
            console.log('Received Stripe token:', token);

            return axios.post('/',  qs.stringify({
                action: '/commerce/payments/pay',
                CRAFT_CSRF_TOKEN: window.csrfTokenValue,
                redirect: window.orderRedirect,
                cancelUrl: window.cancelRedirect,
                orderEmail: "adam@gethappy.io",
                token: token.id
            }));
        }).then((response) => {
            console.log(response);
        })
        .catch((e) => {
        console.log('got error', e);
        });

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
                    <button type="submit" onClick={this.submit}>Pay</button>
                </div>
        );
    }

}

export default injectStripe(StripeForm);