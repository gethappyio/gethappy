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
    let classes = classNames({
        "loading-interstitial__wrapper": true,
        "loading-interstitial--active": this.props.loading ? true : false
    });

    return (
        <div className={classes}>
            <div className="loader">loading...</div>
            <p className="loading-interstitial__prompt">prcoessing payment... do not refresh</p>
        </div>
    );
  }
}

export {Interstitial};