import React, { Component } from "react";
import Page from "../Page/Page";
import FeaturedExperiences from "../FeaturedExperience/FeaturedExperiences";
import NewsletterSignUp from "../NewsletterSignUp/NewsletterSignUp";
import imgPlaceholder from "../../assets/images/homepage-placeholder.png";
import "./styles/home.scss";

class Home extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Page>
                <FeaturedExperiences />
                <NewsletterSignUp />
                <img className="home__imgwide" src={imgPlaceholder} />
            </Page>
        );
    }

}

export default Home;