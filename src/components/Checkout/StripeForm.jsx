import React, { Component } from "react";
import axios from "axios";
import qs from "qs";
import BtnPrimary from "../BtnPrimary/BtnPrimary";
import {CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe} from "react-stripe-elements";
import "../Form/styles/form.scss";
import "./styles/card-field.scss";

const createOptions = (border) => {
    return {
      style: {
        base: {
          fontSize: "16px",
          lineHeight: "1.5",
          "::placeholder": {
            color: "#cccccc"
          }
        }
      },
    };
  };

class StripeForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: undefined
        };

        this.submit = this.submit.bind(this);
        this.errors = {};
    }

    onChangeFor(e) {
        let type =  e.elementType;
        let error = e.error;

        if(type in this.errors && !error) {
            delete this.errors[type];
        } else if(error) {
            this.errors[type] = error;
        }

        this.setState({errors: this.errors});
    }

    submit(ev) {
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
                    <div className="form-field__wrapper form-field__col-xs-12 card-field">
                        <CardNumberElement onChange={this.onChangeFor.bind(this)} {...createOptions(this.props.border)} />
                    </div>
                    <div className="form-field__wrapper form-field__col-xs-6 card-field">
                        <CardExpiryElement onChange={this.onChangeFor.bind(this)} {...createOptions(this.props.border)} />
                    </div>
                    <div className="form-field__wrapper form-field__col-xs-6 card-field">
                        <CardCVCElement onChange={this.onChangeFor.bind(this)} {...createOptions(this.props.border)} />
                    </div>
                    <div className="form-field__wrapper form-field__col-xs-12">
                        <BtnPrimary className="btn-primary--blue" submit="true" onClick={this.submit}>Pay</BtnPrimary>
                    </div>
                    <div className="form-field__wrapper form-field__col-xs-12">
                        {this.state && this.state.errors ? Object.keys(this.state.errors).map( (key) => {
                            let error = this.state.errors[key];
                            return <p>{error.message}</p>
                        }) : ''}
                    </div>
                </div>

        );
    }

}

export default injectStripe(StripeForm);