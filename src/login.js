import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Page from "./components/Page/Page";
import LoginForm from "./components/LoginForm/LoginForm";
import FacebookLogin from "./components/FacebookLogin/FacebookLogin";
import NewUserForm from "./components/NewUserForm/NewUserForm";

import "normalize.css";
import "./styles/app.scss";

ReactDOM.render(
    <BrowserRouter>
        <Page footer="false">
            <div class="base__pad">
                <div className="base__narrow base__margin-top">
                    <LoginForm />
                    <FacebookLogin />
                    <NewUserForm />
                </div>
            </div>
        </Page>
    </BrowserRouter>,
    document.getElementById("app"));