import React from "react";
import ReactDOM from "react-dom";
import ReactGA from 'react-ga';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Page from "./components/Page/Page";
import CheckoutBar from "./components/Checkout/CheckoutBar";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import NewUserForm from "./components/NewUserForm/NewUserForm";
import LoginForm from "./components/LoginForm/LoginForm";
import GuestForm from "./components/GuestForm/GuestForm";
import FacebookLogin from "./components/FacebookLogin/FacebookLogin";
import Errors from "./components/Errors/Errors";

import "normalize.css";
import "./styles/app.scss";

ReactGA.initialize(window.googleTrackingId);
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/checkout/login' render={() =>
                <Page navigation={<CheckoutBar title="Checkout" />} footer="false">
                    <div class="base__pad">
                        <div className="base__narrow base__margin-top">
                            <Errors />
                            <LoginForm />
                            <FacebookLogin className="checkout-fblogin"/>
                            <GuestForm />
                        </div>
                    </div>
                </Page>
            } />
            <Route exact path='/checkout/login/new' render={() => 
                <Page navigation={
                    <NavigationBar title="New user" to="/checkout/login" />
                } footer="false">
                    <div class="base__pad">
                        <div className="base__narrow base__margin-top">
                            <Errors />
                            <NewUserForm />
                        </div>
                    </div>
                </Page>
            } />
        </Switch>
    </BrowserRouter>,
    document.getElementById("app"));