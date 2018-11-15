import React, { Component } from "react";
import Page from "../Page/Page";
import NavigationBar from "../NavigationBar/NavigationBar";
import logo from "./assets/logo-blue.svg";
import "./styles/contact.scss";

class Contact extends Component {

    constructor() {
        super();
    
        this.state = {
          title: ""
        };
      }
    
      render() {
        return (
            <Page navigation={
                <NavigationBar title="Contact Us" to="/user" />
            }>
                <div className="section__wrapper contact__wrapper">
                    <div className="section__col-xs-12">
                        <img className="contact__logo" src={logo}/>
                        <h1 className="contact__header">We're here to help.</h1>
                        <div>
                            <div><a className="contact__info" href="mailto:support@gethappy.io">support@gethappy.io</a></div>
                            <div className="contact__info">estimated response time: 24hr</div>
                        </div>
                        <div className="contact__more">
                            <h2 className="contact__more-header">want more?</h2>
                            <div className="contact__more-line"></div>
                            <div>press@gethappy.io</div>
                            <div>hello@gethappy.io</div>
                        </div>
                    </div>
                </div>
            </Page>
        );
      }
}

export default Contact;