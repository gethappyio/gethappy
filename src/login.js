import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Page from "./components/Page/Page";
import LoginForm from "./components/LoginForm/LoginForm";
import NewUserForm from "./components/NewUserForm/NewUserForm";

import "normalize.css";
import "./styles/app.scss";

var loginForm = document.getElementById("loginForm");
loginForm ? ReactDOM.render(<LoginForm />, loginForm) : false;

var newUserForm = document.getElementById("newUserForm");
newUserForm ? ReactDOM.render(<NewUserForm />, newUserForm) : false;

ReactDOM.render(
    <BrowserRouter>
        <Page>
            <div class="base__pad">
                <div className="base__narrow base__margin-top">
                    <div className="section__content">
                        <LoginForm />
                    </div>
                    <div className="section__content">
                        <NewUserForm />
                    </div>
                </div>
            </div>
        </Page>
    </BrowserRouter>,
    document.getElementById("app"));