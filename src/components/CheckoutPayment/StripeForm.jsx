import React, { Component } from "react";
import classNames from 'classnames/bind';
import axios from "axios";
import qs from "qs";
import BtnPrimary from "../BtnPrimary/BtnPrimary";
import { Redirect } from "react-router-dom";
import {CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe} from "react-stripe-elements";
import cardPlaceholder from "./assets/card-placeholder.svg";
import cardVisa from "./assets/visa.svg";
import cardMaster from "./assets/mastercard.svg";
import cardAmex from "./assets/amex.svg";
import "../Form/styles/form.scss";
import "./styles/card.scss";
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
            errors: undefined,
            showBottom: false,
            brand: cardPlaceholder,
            fullName: "",
            redirect: false
        };

        this.customInputChange = this.onCustomInputChange.bind(this);
        this.submit = this.submit.bind(this);
        this.errors = {};
        this.cardFilled = false;
    }

    onCustomInputChange(e) {
        let value = e.target.value;
        let name = e.target.name;

        this.setState({[name]: value});

    }

    onChangeFor(e) {
        let type =  e.elementType;
        let error = e.error;
        let brand = e.brand;

        if(type == "cardNumber") {
            if(e.empty) {
                this.cardFilled = false;
            } else {
                this.cardFilled = true;
            }
        }

        if (brand == "visa") {
            this.setState({brand: cardVisa});
        } else if (brand == "mastercard") {
            this.setState({brand: cardMaster});
        } else if (brand == "amex") {
            this.setState({brand: cardAmex});
        } else {
            this.setState({brand: cardPlaceholder});
        }

        if(type in this.errors && !error) {
            delete this.errors[type];
        } else if(error) {
            this.errors[type] = error;
        }

        this.setState({errors: this.errors});
    }

    onBlur(e) {
        if(this.cardFilled == false) {
            this.setState({ showBottom: false });
        }
    }

    onFocus(e) {
        this.setState({ showBottom: true });
    }

    submit(ev) {
        let self = this;
        let {stripe} = this.props;
        let name = this.state.fullName;

        this.props.loadingCallback(true);

        stripe.createToken({name: name})
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
            let data = response.data;
            if (data.success) {
                self.setState({
                    redirect: "/checkout/success"
                });
            } else {
                self.errors = {
                    stripe: {
                        message: "There has been an error. Please try again."
                    }
                };

                self.setState({
                    errors: self.errors
                });
                this.props.loadingCallback(false);
            }
            
        })
        .catch((e) => {
            self.errors = {
                stripe: {
                    message: "There has been an error. Please try again."
                }
            };

            self.setState({
                errors: self.errors
            });
            this.props.loadingCallback(false);
        });

    }

    render() {
        let bottomClasses = classNames("form-field__col-xs-12 card-field__bottom-container ", {
            "card-field__bottom-container--active": this.state.showBottom
        });

        if(this.state.redirect) {
            return <Redirect to="/checkout/success" />
        }
        
        return (
                <div id="card" className="card__container">
                    <div className="form__wrapper card__inner">
                        <div className="form-field__wrapper form-field__col-xs-12 card-field">
                            <input name="fullName" placeholder="Full name" onChange={this.customInputChange} className="card-field__custom" />
                        </div>
                        <div className="form-field__wrapper form-field__col-xs-12 card-field card-field__number">
                            <img className="card-field__brand" src={this.state.brand} />
                            <CardNumberElement 
                                onBlur={this.onBlur.bind(this)} 
                                onFocus={this.onFocus.bind(this)} 
                                onChange={this.onChangeFor.bind(this)} 
                                {...createOptions(this.props.border)} />
                        </div>
                        <div className={bottomClasses}>
                            <div className="form__collapse">
                                <div className="form-field__wrapper form-field__col-xs-6 card-field">
                                    <CardExpiryElement onChange={this.onChangeFor.bind(this)} {...createOptions(this.props.border)} />
                                </div>
                                <div className="form-field__wrapper form-field__col-xs-6 card-field">
                                    <CardCVCElement onChange={this.onChangeFor.bind(this)} {...createOptions(this.props.border)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form__wrapper">
                        <div className="form-field__wrapper form-field__col-xs-12">
                            {this.state && this.state.errors ? Object.keys(this.state.errors).map( (key) => {
                                let error = this.state.errors[key];
                                return <p className="card__error">{error.message}</p>
                            }) : ''}
                        </div>
                        <div className="form-field__wrapper form-field__col-xs-12">
                            <BtnPrimary className="btn-primary--blue" submit="true" onClick={this.submit}>Pay</BtnPrimary>
                        </div>
                    </div>
                </div>

        );
    }

}

export default injectStripe(StripeForm);