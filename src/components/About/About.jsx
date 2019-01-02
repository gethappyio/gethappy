import React, { Component } from "react";
import Page from "../Page/Page";
import Header from "../Header/Header";
import HowWorks from "../HowWorks/HowWorks";
import "./styles/about.scss";

class About extends Component {

    constructor() {
        super();
    
        this.state = {
          title: ""
        };
      }
    
      render() {
        return (
            <Page className="base__abs app__slide about__wrapper" navigation={
                <Header returnType="logo-return" returnUrl="/" title="info-yellow" direction="left" />
            } footer="false" transparentNav="true">
                <div className="base__md-narrow">
                    <div className="section__wrapper about__first">
                        <div className="about__section section__col-xs-12">
                            <h1 className="about__title">Hi there!<br/>We’re a digital giving platform for a new generation.</h1>
                            <p className="about__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt, odio vitae porta convallis, justo leo tempus magna, quis laoreet elit nisi ac est. Etiam lacinia eget leo consectetur consectetur. Quisque blandit, orci in scelerisque euismod, neque neque vulputate ipsum, nec rhoncus ligula quam sed elit.</p>
                            <div className="about__line"></div>
                        </div>
                    </div>
                    <HowWorks />
                    <div className="section__wrapper">
                        <div className="about__section section__col-xs-12">
                            <p className="about__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt, odio vitae porta convallis, justo leo tempus magna, quis laoreet elit nisi ac est. Etiam lacinia eget leo consectetur consectetur. Quisque blandit, orci in scelerisque euismod, neque neque vulputate ipsum, nec rhoncus ligula quam sed elit. Praesent sed dictum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Morbi tincidunt efficitur nisi, in fermentum orci blandit ut. Suspendisse pulvinar malesuada viverra. Mauris molestie porttitor quam ac dapibus.</p>
                        </div>
                        <div className="about__section section__col-xs-12">
                            <h2 className="about__title">Track your impact</h2>
                            <p className="about__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt, odio vitae porta convallis, justo leo tempus magna, quis laoreet elit nisi ac est. Etiam lacinia eget leo consectetur consectetur. Quisque blandit, orci in scelerisque euismod, neque neque vulputate ipsum, nec rhoncus ligula quam sed elit. Praesent sed dictum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Morbi tincidunt efficitur nisi, in fermentum orci blandit ut. Suspendisse pulvinar malesuada viverra. Mauris molestie porttitor quam ac dapibus.</p>
                        </div>
                    </div>
                </div>
            </Page>
        );
      }
}

export default About;