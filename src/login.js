import React from "react";
import ReactDOM from "react-dom";
import ReactGA from 'react-ga';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Page from "./components/Page/Page";
import LoginForm from "./components/LoginForm/LoginForm";
import Errors from "./components/Errors/Errors";
import NewUserForm from "./components/NewUserForm/NewUserForm";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import "normalize.css";
import "./styles/app.scss";

ReactGA.initialize(window.googleTrackingId);
ReactDOM.render(
    <BrowserRouter>
        <Page navigation={
            <NavigationBar title="Login" href="/user" /> 
        } footer="false">
            <div class="base__pad">
                <div className="base__narrow base__margin-top">
                    <Errors />
                    <LoginForm />
                    <NewUserForm />
                </div>
            </div>
        </Page>
    </BrowserRouter>,
    document.getElementById("app"));
