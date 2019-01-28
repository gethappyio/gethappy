import React, { Component } from "react";
import Page from "../Page/Page";
import UserSignin from "./UserSignin";
import Header from "../Header/Header";
import { LevelButton, LevelButtons } from "../LevelButton/LevelButton";
import imgCartoon from "../../assets/images/cartoon-dude.png";
import "./styles/user.scss";
import "./styles/user-help.scss";

class User extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        let loggedIn = window.loggedIn;
        return (
            <Page className="base__abs app__slide" navigation={
                <Header returnType="logo-return" returnUrl="/" title="user-yellow" direction="right" />
            } footer="false">
                <div className="base__md-narrow">
                    {!loggedIn ? <UserSignin /> : ""}
                    <LevelButtons>
                        <LevelButton href="/user/profile" className="user__icon user__icon--profile">Edit Account</LevelButton>
                        <LevelButton href="/user/orders" className="user__icon user__icon--history">Order History</LevelButton>
                        <LevelButton href="/user/addresses" className="user__icon user__icon--address">Edit Address</LevelButton>
                    </LevelButtons>
                    <div className="user-help__wrapper">
                        <h2 className="user-help__question">How can we help?</h2>
                    </div>
                    <LevelButtons>
                        <LevelButton to="/contact" className="user__icon user__icon--contact">Contact Us</LevelButton>
                        <LevelButton to="/faq" className="user__icon user__icon--contact">FAQ</LevelButton>
                        <LevelButton to="/terms" className="user__icon user__icon--terms">Terms & Conditions</LevelButton>
                    </LevelButtons> 
                    {loggedIn ? <a className="user__logout" href="/logout">Logout</a> : ""} 
                </div>
            </Page>
        );
    }

}

export default User;