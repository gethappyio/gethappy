import React, { Component } from "react";
import Page from "../Page/Page";
import CelebrateCanvas from "../CelebrateCanvas/CelebrateCanvas";
import iconCheck from "./assets/checkmark.svg";
import "./styles/success.scss";

class Checkout extends Component {

    constructor() {
        super();

        this.state = {
            title: ""
        }

    }

    render() {
        return (
            <Page noNav="true" transparentNav="true" footer="false">
                <CelebrateCanvas />
                <div className="section__wrapper success__wrapper">
                    <div className="section__col-xs-12">
                        <img className="success__checkmark" src={iconCheck} />
                        <h2 className="success__header">Perfect. <br/> You're done!</h2>
                        <p className="success__sub">Thanks for saving the world</p>
                    </div>
                    <div className="success__continue">
                        <a href="/" className="success__continue-text">Continue making others happy</a>
                        <div className="success__line"></div>
                    </div>
                </div>
            </Page>
        );
    }

}

export default Checkout;