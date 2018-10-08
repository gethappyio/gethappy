import React, { Component } from "react";
import Page from "../Page/Page";
import FeaturedExperiences from "../FeaturedExperience/FeaturedExperiences";
import NewsletterSignUp from "../NewsletterSignUp/NewsletterSignUp";

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
            </Page>
        );
    }

}

export default Home;