import React, { Component } from "react";
import ScrollMagic from 'scrollmagic/scrollmagic/minified/ScrollMagic.min';
import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min';
import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min';
import TweenMax from 'gsap/src/minified/TweenMax.min';
import ScrollToPlugin from "gsap/ScrollToPlugin";
import axios from "axios";
import qs from "qs";
import PaymentSwitcher from "./PaymentSwitcher";
import StripeFormContainer from "./StripeFormContainer";
import PaypalForm from "./PaypalForm";

import "./styles/checkout-payment.scss";

class CheckoutPayment extends Component {

    constructor(props) {
        super(props);
        this.state = {type: ""};
        this.onPaymentSelection = this.onPaymentSelection.bind(this);
        this.controller  = new ScrollMagic.Controller();

        this.controller.scrollTo(function(newpos) {
            setTimeout(function(){
                var scroll = document.getElementById("scrollWindow");
                TweenMax.to(scroll, 0.5, {scrollTo: {y: newpos}});
            },100);
        });
    }

    onPaymentSelection(id) {
         this.setPaymentMethod(id);
    }

    setPaymentMethod(id) {
        let self = this;
        axios.post('/',  qs.stringify({
            action: '/commerce/cart/update-cart',
            CRAFT_CSRF_TOKEN: window.csrfTokenValue,
            gatewayId: id
        }))
        .then(function (response) {
            self.setState({type: id});
            self.controller.scrollTo("#card");
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <div id="payment" className="section__wrapper">
                    <div className="section__col-xs-12">
                        <h2 className="checkout-payment__title">Payment method</h2>
                        <PaymentSwitcher onChangeCallback={this.onPaymentSelection}/>
                    </div>
                </div>
                {this.state && this.state.type == "3" ? <PaypalForm /> : ""}
                {this.state && this.state.type == "2" ? <StripeFormContainer loadingCallback={this.props.loadingCallback}/> : ""}
            </div>
        );
    }

}

export default CheckoutPayment;