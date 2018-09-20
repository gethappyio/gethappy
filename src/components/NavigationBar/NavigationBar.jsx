import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles/navigation-bar.scss";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  buildBack() {
      if(this.props.href) {
        return (<a href={this.props.href} className="navigation-bar__back"></a>);
      } else if(this.props.to) {
        return (<Link to={this.props.to} className="navigation-bar__back"></Link>);
      }
  }

  render() {
      const back = this.buildBack();
    return (
        <div className="navigation-bar__wrapper">
            <div className="navigation-bar__wrapper-inner">
                <div className="navigation-bar__element">{back}</div>
                <div className="navigation-bar__element">{this.props.title}</div>
                <div className="navigation-bar__element"></div>
            </div>
        </div>
    );
  }
}

export default NavigationBar;