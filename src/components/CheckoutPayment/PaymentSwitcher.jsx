import React, { Component } from "react";
import "./styles/payment-switcher.scss";
import paypalIcon from "./assets/paypal-option.svg";
import cardIcon from "./assets/card-option.svg";

class PaymentSwitcher extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: "3"
        };

        this.handleChange = this.handleChange.bind(this);
        
    }

    componentDidMount() {
        this.props.onChangeCallback(this.state.type);
    }

    handleChange(event) {
        this.props.onChangeCallback(event.target.value);
        this.setState({type: event.target.value});
    }

    render() {
        return (
            <div className="payment-switcher__container">
                <div className="payment-switcher__option">
                    <input id="payment-switcher__paypal" className="payment-switcher__radio" onChange={this.handleChange} checked={this.state.type === "3"} type="radio" value="3" name="type"/>
                    <label for="payment-switcher__paypal" className="payment-switcher__label">
                        <div className="payment-switcher__label-inner">
                            <div className="payment-switcher__content">
                                <img src={paypalIcon} />
                                <p className="payment-switcher__caption">Checkout with Paypal</p>
                            </div>
                        </div>
                    </label>
                </div>
                <div className="payment-switcher__option">
                    <input id="payment-switcher__credit" className="payment-switcher__radio" onChange={this.handleChange} checked={this.state.type === "2"} type="radio" value="2" name="type"/>
                    <label for="payment-switcher__credit" className="payment-switcher__label">
                        <div className="payment-switcher__label-inner">
                            <div className="payment-switcher__content">
                                <img src={cardIcon} />
                                <p className="payment-switcher__caption">Pay with credit card</p>
                            </div>  
                        </div>
                    </label>
                </div>
            </div>
        );
    }

}

export default PaymentSwitcher;