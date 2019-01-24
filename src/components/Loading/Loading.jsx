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

  svgLogo() {
      return(
        <svg className="loading-interstitial__logo" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.34 40.14">
            <path className="loading-interstitial__logo--nose" d="M26,17.91a.92.92,0,0,1-.39.3,1.9,1.9,0,0,1-1.42.06,1.74,1.74,0,0,1-.5-.33.44.44,0,0,1-.19-.42V16.17c0-1.14,0-2.63,0-4.3s0-3.17,0-4.31V6.2a.43.43,0,0,1,.19-.4,1.56,1.56,0,0,1,.5-.33,1.9,1.9,0,0,1,1.42,0,1,1,0,0,1,.44.37L26.79,7,31,3.86l-.73-1.07a6.12,6.12,0,0,0-1.18-1.3A6.21,6.21,0,0,0,27.74.64,6.4,6.4,0,0,0,26.26.16a6.92,6.92,0,0,0-4.19.39A7,7,0,0,0,19.82,2a4.28,4.28,0,0,0-1.46,3.32V18.45a4.34,4.34,0,0,0,1.51,3.36A7.36,7.36,0,0,0,26,23.63v1.29h5V14.34H26Z"/>
            <path className="loading-interstitial__logo--left" d="M43.76,0a4.92,4.92,0,1,0,4.92,4.92A4.92,4.92,0,0,0,43.76,0"/>
            <path className="loading-interstitial__logo--right" d="M44.27,24.86H44.2v.59c0,5.09-9.12,9.56-19.53,9.56S5.14,30.54,5.14,25.45v-.59H5.08V20.61H0V40.14H5.08V34.38c4.47,3.5,11.48,5.76,19.59,5.76s15.13-2.26,19.6-5.76v5.76h5.07V20.61H44.27Z"/>
            <path className="loading-interstitial__logo--mouth" d="M5.52,0a4.92,4.92,0,1,0,4.92,4.92A4.91,4.91,0,0,0,5.52,0"/>
        </svg>
      );
  }

  render() {
    let {className} = this.props;
    let classes = classNames({
        "loading-interstitial__wrapper": true,
        "loading-interstitial--solid": this.props.solid ? true : false,
        "loading-interstitial--active": this.props.loading ? true : false
    }, className);

    let svg = this.svgLogo();

    return (
        <div className={classes}>
            {this.props.logo  ? <div>{svg}</div> : 
                <div className="loader">loading...</div>}
            {this.props.prompt ? <p className="loading-interstitial__prompt">{this.props.prompt}</p> : ""}
        </div>
    );
  }
}

export {Interstitial};