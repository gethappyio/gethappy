import React, { Component } from "react";
import iconFb from "./assets/social-drawn-fb.svg";
import iconInsta from "./assets/social-drawn-insta.svg";
import iconTwitter from "./assets/social-drawn-twitter.svg";
import iconYoutube from "./assets/social-drawn-youtube.svg";
import "./styles/share.scss";

class Share extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };
  }
  render() {
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