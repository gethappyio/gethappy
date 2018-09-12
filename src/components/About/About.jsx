import React, { Component } from "react";
import Page from "../Page/Page";
import imgCartoon from "../../assets/images/cartoon-dude.png";
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
            <Page>
                <div className="section__wrapper">
                    <div className="about__section section__col-xs-12">
                        <img className="about__cartoon-head" src={imgCartoon} />
                        <h1 className="about__title">get Happy?</h1>
                        <p className="about__statement">We are a digital giving platform for a new generation.</p>
                    </div>
                    <div className="about__section section__col-xs-12">
                        <h2 className="about__title">How it works</h2>
                        <p className="about__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt, odio vitae porta convallis, justo leo tempus magna, quis laoreet elit nisi ac est. Etiam lacinia eget leo consectetur consectetur. Quisque blandit, orci in scelerisque euismod, neque neque vulputate ipsum, nec rhoncus ligula quam sed elit. Praesent sed dictum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Morbi tincidunt efficitur nisi, in fermentum orci blandit ut. Suspendisse pulvinar malesuada viverra. Mauris molestie porttitor quam ac dapibus.</p>
                    </div>
                    <div className="about__section section__col-xs-12">
                        <h2 className="about__title">Track your impact</h2>
                        <p className="about__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt, odio vitae porta convallis, justo leo tempus magna, quis laoreet elit nisi ac est. Etiam lacinia eget leo consectetur consectetur. Quisque blandit, orci in scelerisque euismod, neque neque vulputate ipsum, nec rhoncus ligula quam sed elit. Praesent sed dictum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Morbi tincidunt efficitur nisi, in fermentum orci blandit ut. Suspendisse pulvinar malesuada viverra. Mauris molestie porttitor quam ac dapibus.</p>
                    </div>
                </div>
            </Page>
        );
      }
}

export default About;