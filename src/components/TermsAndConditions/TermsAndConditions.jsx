import React, { Component } from "react";
import Page from "../Page/Page";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./styles/terms.scss";

class TermsAndConditions extends Component {

    constructor() {
        super();
    
        this.state = {
          title: ""
        };
      }
    
      render() {
        return (
            <Page navigation={
                <NavigationBar title="Terms & Conditions" to="/user" />
            } footer="false">
                <div className="section__wrapper">
                    <div className="section__col-xs-12">
                        <h2 className="terms__heading">Description of service</h2>
                        <p className="terms__body">Welcome to the Grana Group Limited (Grana) website (“the Site,” “we,” “us,” or “our”). Grana is a Limited Liability Company incorporated under the laws of the Hong Kong Special Administrative Region. Grana provides this site as a service to its customers. Please read the following terms of service (“Terms”) as they govern your use of our site. By using this Site, you agree to follow and be bound by the following rule below. If you do not agree to these Terms, please do not use this Site in any way.</p>
                        <p className="terms__body">Additionally, Grana reserves the right to modify these Terms at any time without prior notification. Site users must agree upon and abide by these changes accordingly. Please review this page periodically for changes. Any use of our Site at any time constitutes full acceptance of our service Terms.</p>
                    </div>
                    <div className="section__col-xs-12">
                        <h2 className="terms__heading">Usage restrictions</h2>
                        <p className="terms__body">All of the content that appears on the Grana web site, including all visuals, text, audio and video clips are subject to copyright protections and /or other intellectual property rights or licenses held by Grana. The entire content of the Grana web site is copyrighted as a collective work under Hong Kong copyright laws. Grana grants you a limited license to access and make personal use of the content on this website. Content of the Grana website is intended solely for the personal, noncommercial use by the users of our Site.</p>
                    </div>
                </div>
            </Page>
        );
      }
}

export default TermsAndConditions;