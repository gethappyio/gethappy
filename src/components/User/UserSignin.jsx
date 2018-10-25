import React, { Component } from "react";
import BtnPrimary from "../BtnPrimary/BtnPrimary";
import FacebookLogin from "../FacebookLogin/FacebookLogin";
import "./styles/user-signin.scss";

class UserSignin extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="section__wrapper user-signin__wrapper">
                <div className="section__col-xs-12">
                    <div className="user-signin__option">
                        <FacebookLogin />
                    </div>
                    <div className="user-signin__option">
                        <a className="user-signin__link" href="/login">
                            <BtnPrimary className="btn-primary--vibrant-blue-outline">Sign in via email</BtnPrimary>
                        </a>
                    </div>
                </div>
            </div>
            
        );
    }

}

export default UserSignin;