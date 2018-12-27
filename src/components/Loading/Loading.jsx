import React, { Component } from "react";
import classNames from 'classnames/bind';
import "./styles/loading-interstitial.scss";
import "./styles/loading-spinner.scss";

class Interstitial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };
  }

  render() {
    let {className} = this.props;
    let classes = classNames({
        "loading-interstitial__wrapper": true,
        "loading-interstitial--solid": this.props.solid ? true : false,
        "loading-interstitial--active": this.props.loading ? true : false
    }, className);

    return (
        <div className={classes}>
            {this.props.logo  ? 
                <img className="loading-interstitial__logo" src={window.cloudfront + "logo-happy.svg"} /> : 
                <div className="loader">loading...</div>}
            {this.props.prompt ? <p className="loading-interstitial__prompt">{this.props.prompt}</p> : ""}
        </div>
    );
  }
}

export {Interstitial};