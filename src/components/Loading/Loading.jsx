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
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 31 31" className="loading-interstitial__logo">
            <g id="Symbols">
                <g id="Group-9">
                    <path id="Fill-1" className="loading-interstitial__logo--nose" d="M12.9,20.4c0.7,0.3,1.4,0.4,2.2,0.4c0.4,0,0.8,0,1.2-0.1c0.3-0.1,0.5-0.2,0.7-0.2V22H20v-8.4
                        h-2.9v2.8L17,16.6c-0.2,0.3-0.5,0.5-0.8,0.7c-0.6,0.3-1.3,0.3-1.9,0.1c-0.3-0.1-0.5-0.3-0.7-0.5c-0.2-0.2-0.4-0.4-0.4-1
                        c0-1.1,0-3,0-5.4c0-2.3,0-4.3,0-5.4c0-0.6,0.3-0.8,0.4-1c0.2-0.2,0.5-0.4,0.7-0.5c0.6-0.3,1.3-0.2,1.9,0.1C16.5,3.8,16.7,4,17,4.3
                        l0.2,0.3l2.6-2l-0.2-0.3c-0.3-0.4-0.6-0.8-0.9-1c-0.3-0.3-0.7-0.5-1.1-0.7c-0.4-0.2-0.8-0.3-1.2-0.4C15.9,0,15.5,0,15.1,0
                        c-0.8,0-1.5,0.2-2.2,0.4c-0.7,0.3-1.3,0.6-1.8,1.1C10.7,2.1,10,2.7,10,4.2v3.7V13v3.7c0,1.4,0.7,2.1,1.2,2.6
                        C11.7,19.8,12.3,20.1,12.9,20.4"/>
                    <path id="Fill-3" className="loading-interstitial__logo--left" d="M6,6c0-1.7-1.3-3-3-3C1.3,3,0,4.3,0,6s1.3,3,3,3C4.7,9,6,7.7,6,6"/>
                    <path id="Fill-5" className="loading-interstitial__logo--right" d="M28,3c-1.7,0-3,1.3-3,3c0,1.7,1.3,3,3,3c1.7,0,3-1.3,3-3C31,4.3,29.7,3,28,3"/>
                    <path id="Fill-7" className="loading-interstitial__logo--mouth" d="M27,22.4L27,22.4l0,0.3c0,2.9-5.4,5.4-11.5,5.4C9.4,28.1,4,25.6,4,22.7v-0.3h0V20H1v2.4v0.3V31h3
                        v-3.2c2.6,2,6.7,3.2,11.5,3.2c4.8,0,8.9-1.3,11.5-3.2V31h3v-8.3v-0.3V20h-3V22.4z"/>
                </g>
            </g>
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