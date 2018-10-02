import React, { Component } from "react";

class PaymentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {

        return (
            <div>
                <form method="POST" id="paymentForm">
                    <input type="hidden" name="paymentMethod" value="gateway:1" />
                    <input type="hidden" name="action" value="commerce/payments/pay"/>
                    <input type="hidden" name="redirect" value={window.orderRedirect}/>
                    <input type="hidden" name="cancelUrl" value={window.cancelRedirect}/>
                    <input type="hidden" name="orderEmail" value="adam@gethappy.io"/>
                    <input type="hidden" name="CRAFT_CSRF_TOKEN" value={window.csrfTokenValue} />

                    <input onChange={this.handleChange} value={this.state.firstName} class="text card-holder-first-name fullwidth" type="text" name="firstName" maxlength="70" autocomplete="off" placeholder="First Name"></input>
                    <input onChange={this.handleChange} value={this.state.lastName} class="text card-holder-last-name fullwidth" type="text" name="lastName" maxlength="70" autocomplete="off" placeholder="Last Name"></input>
                    <input onChange={this.handleChange} value={this.state.number} class="text card-number fullwidth" type="text" name="number" maxlength="19" autocomplete="off" placeholder="Card Number"></input>
                    <input onChange={this.handleChange} value={this.state.expiry} class="text card-expiry fullwidth" type="tel" name="expiry" autocomplete="off" placeholder="MM / YYYY"></input>
                    <input onChange={this.handleChange} value={this.state.cvv} class="text card-cvc fullwidth" type="tel" name="cvv" autocomplete="off" placeholder="CVV"></input>
                    <button type="submit">Pay</button>
                </form>
            </div>
        );
    }

}

export default PaymentForm;