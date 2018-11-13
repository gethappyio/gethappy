import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import CheckoutAddressFormContainer from "./components/Checkout/CheckoutAddressFormContainer";
import SuccessPage from "./components/SuccessPage/SuccessPage";

import "normalize.css";
import "./styles/app.scss";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/checkout/new-address' component={CheckoutAddressFormContainer} />
            <Route exact path='/checkout/success' component={SuccessPage} />

        </Switch>
    </BrowserRouter>,
    document.getElementById("app"));