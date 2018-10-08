import React, { Component } from "react";
import BtnPrimary from "../BtnPrimary/BtnPrimary";
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
                    <a className="user-signin__link" href="/login">
                        <BtnPrimary className="btn-primary--blue-outline">Sign-in</BtnPrimary>
                    </a>
                </div>
            </div>
            
        );
    }

}

export default UserSignin;