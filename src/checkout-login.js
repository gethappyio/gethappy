import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Page from "./components/Page/Page";
import CheckoutBar from "./components/Checkout/CheckoutBar";
import LoginForm from "./components/LoginForm/LoginForm";
import GuestForm from "./components/GuestForm/GuestForm";

import "normalize.css";
import "./styles/app.scss";

ReactDOM.render(
    <BrowserRouter>
        <Page navigation={<CheckoutBar title="Checkout" />}>
            <div class="base__pad">
                <div className="base__narrow base__margin-top">
                    <LoginForm />
                    <GuestForm />
                </div>
            </div>
        </Page>
    </BrowserRouter>,
    document.getElementById("app"));