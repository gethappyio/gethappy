import React, { Component } from "react";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import "./styles/experience-share.scss";

class ExperienceShare extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.nativeShare = this.nativeShare.bind(this);
    }

    nativeShare() {
        navigator.share({
            title: 'Get Happy experience',
            text: this.props.quote,
            url: this.props.url
        })
    }

    navigatorShare() {
        if (navigator.share) {
            return (
            <div>
                <img className="experience-share__icon" onClick={this.nativeShare} src={window.cloudfront + "link.svg"} />
            </div>);
        } else {
            return "";
        }
    }

    render() {
        return (
            <div className="section__wrapper">
                 <div className="section__col-xs-12">
                    <div className="experience-share__line"></div>
                    <div className="experience-share__inner">
                        <div><h2 className="experience-share__title">share me!</h2></div>
                        {this.navigatorShare()}
                        <div>
                            <FacebookShareButton quote={this.props.quote} url={this.props.url}>
                                <img className="experience-share__icon" src={window.cloudfront + "fb.svg"} />
                            </FacebookShareButton>
                        </div>
                        <div>
                            <TwitterShareButton title={this.props.quote} url={this.props.url}>
                                <img className="experience-share__icon" src={window.cloudfront + "twitter.svg"} />
                            </TwitterShareButton>
                        </div>
                    </div>
                    <div className="experience-share__line"></div>
                </div>
            </div>
        );
    }

}

export default ExperienceShare;