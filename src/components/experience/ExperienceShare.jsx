import React, { Component } from "react";
import "./styles/experience-share.scss";
import iconLink from "./assets/link.svg";
import iconFb from "./assets/fb.svg";
import iconTwitter from "./assets/twitter.svg";


class ExperienceShare extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="section__wrapper">
                 <div className="section__col-xs-12">
                    <div className="experience-share__line"></div>
                    <div className="experience-share__inner">
                        <div><h2 className="experience-share__title">share me!</h2></div>
                        <div><img className="experience-share__icon" src={iconLink} /></div>
                        <div><img className="experience-share__icon" src={iconFb} /></div>
                        <div><img className="experience-share__icon" src={iconTwitter} /></div>
                    </div>
                    <div className="experience-share__line"></div>
                </div>
            </div>
        );
    }

}

export default ExperienceShare;