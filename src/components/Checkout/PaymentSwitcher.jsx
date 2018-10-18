import React, { Component } from "react";
import axios from "axios";
import qs from "qs";
import "./styles/payment-switcher.scss";

class PaymentSwitcher extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: "1"
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setPaymentMethod(this.state.type);
    }

    handleChange(event) {
        this.setState({type: event.target.value});
        this.setPaymentMethod(event.target.value);
    }

    setPaymentMethod(id) {
        axios.post('/',  qs.stringify({
            action: '/commerce/cart/update-cart',
            CRAFT_CSRF_TOKEN: window.csrfTokenValue,
            gatewayId: id
        }))
        .then(function (response) {
    
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="payment-switcher__container">
                <div className="payment-switcher__option">
                    <input id="payment-switcher__paypal" className="payment-switcher__radio" onChange={this.handleChange} checked={this.state.type === "1"} type="radio" value="1" name="type"/>
                    <label for="payment-switcher__paypal" className="payment-switcher__label">
                        <div className="payment-switcher__label-inner">
                            <div className="payment-switcher__content">
                                Paypal
                            </div>
                        </div>
                    </label>
                </div>
                <div className="payment-switcher__option">
                    <input id="payment-switcher__credit" className="payment-switcher__radio" onChange={this.handleChange} checked={this.state.type === "2"} type="radio" value="2" name="type"/>
                    <label for="payment-switcher__credit" className="payment-switcher__label">
                        <div className="payment-switcher__label-inner">
                            <div className="payment-switcher__content">
                                <p>Credit Card</p>
                                <p>Checkout with your credit card</p>
                            </div>  
                        </div>
                    </label>
                </div>
            </div>
        );
    }

}

export default PaymentSwitcher;