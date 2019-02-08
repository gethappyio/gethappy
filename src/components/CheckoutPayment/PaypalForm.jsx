import React, { Component } from "react";
import axios from "axios";
import qs from "qs";
import { Redirect } from "react-router-dom";
import "./styles/paypal.scss";

class PaypalForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
    }

    componentDidMount() {
        /*axios.post('/',  qs.stringify({
            action: '/gethappy/gateway/get-gateway-by-id',
            CRAFT_CSRF_TOKEN: window.csrfTokenValue,
            id: 3
        }))
        .then(function (response) {
            
        })
        .catch(function (error) {
            console.log(error);
        });*/

        let self = this;

        paypal.Button.render({

            env: "sandbox",
            commit: true,

            payment: function() { 
                var postData = {};
             
                postData["CRAFT_CSRF_TOKEN"] = window.csrfTokenValue;
                postData["redirect"] = window.orderRedirect;
                postData["cancelUrl"] = window.cancelRedirect;
                postData["orderEmail"] = "adam@gethappy.io";

                return paypal.request.post(window.actionUrl, postData).then(function(data) {
                    if (data.error) {
                        alert(data.error);
                        
                        return false;
                    }

                    return data.transactionId;
                });
               
            },

            onAuthorize: function(data) {
                return paypal.request.post(window.orderRedirect).then(function(data) {
                    self.setState({
                        redirect: true
                    });
                });
            }

        }, '#paypal-button');
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to={window.orderRedirect} />
        }
        return (
            <div className="form__wrapper paypal__wrapper">
                <div className="form-field__wrapper form-field__col-xs-12">
                    <div id="paypal-button"></div>
                </div>
            </div>
        );
    }

}

export default PaypalForm;