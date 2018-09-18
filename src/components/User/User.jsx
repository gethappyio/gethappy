import React, { Component } from "react";
import Page from "../Page/Page";
import { LevelButton, LevelButtons } from "../LevelButton/LevelButton";
import imgCartoon from "../../assets/images/cartoon-dude.png";
import "./styles/user-help.scss";

class User extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Page>
                <LevelButtons>
                    <LevelButton href="/user/profile">profile</LevelButton>
                    <LevelButton href="/user/orders">order history</LevelButton>
                    <LevelButton>addresses</LevelButton>
                </LevelButtons>
                <div className="user-help__wrapper">
                    <img className="user-help__cartoon" src={imgCartoon}/>
                    <h5 className="user-help__question">How can we help?</h5>
                    <p className="user-help__sub">We’re here to answer any questions you may have.</p>
                </div>
                <LevelButtons>
                    <LevelButton>contact us</LevelButton>
                    <LevelButton>faq</LevelButton>
                    <LevelButton>terms and conditions</LevelButton>
                </LevelButtons>  
            </Page>
        );
    }

}

export default User;