import React, { Component } from "react";

import "./styles/share.scss";

class Share extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };
  }
  render() {

    let iconFb = window.cloudfront + "social-drawn-fb.svg";
    let iconInsta = window.cloudfront + "social-drawn-insta.svg";
    let iconTwitter = window.cloudfront + "social-drawn-twitter.svg";
    let iconYoutube = window.cloudfront + "social-drawn-youtube.svg";

    return (
        <div className="share__wrapper">
            <div className="share__icon"><img className="share__image" src={iconFb}/></div>
            <div className="share__icon"><img className="share__image" src={iconInsta}/></div>
            <div className="share__icon"><img className="share__image" src={iconTwitter}/></div>
            <div className="share__icon"><img className="share__image" src={iconYoutube}/></div>
        </div>
    );
  }
}

export default Share;