import React from "react";
import ReactDOM from "react-dom";
import ReactGA from 'react-ga';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Page from "./components/Page/Page";
import CheckoutBar from "./components/Checkout/CheckoutBar";
import LoginForm from "./components/LoginForm/LoginForm";
import GuestForm from "./components/GuestForm/GuestForm";
import FacebookLogin from "./components/FacebookLogin/FacebookLogin";

import "normalize.css";
import "./styles/app.scss";

ReactGA.initialize('UA-133360397-1');
ReactDOM.render(
    <BrowserRouter>
        <Page navigation={<CheckoutBar title="Checkout" />} footer="false">
            <div class="base__pad">
                <div className="base__narrow base__margin-top">
                    <LoginForm />
                    <FacebookLogin className="checkout-fblogin"/>
                    <GuestForm />
                </div>
            </div>
        </Page>
    </BrowserRouter>,
    document.getElementById("app"));