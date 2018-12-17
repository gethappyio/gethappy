import React, { Component } from "react";
import Page from "../Page/Page";
import FeaturedExperiences from "../FeaturedExperience/FeaturedExperiences";
import HomeSlider from "../HomeSlider/HomeSlider";
import "./styles/home.scss";

class Home extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Page className="base__abs app__slide" transparentNav="true">
                <HomeSlider slider={this.props.slider}/>
                <FeaturedExperiences experiences={this.props.experiences}/>
            </Page>
        );
    }

}

export default Home;