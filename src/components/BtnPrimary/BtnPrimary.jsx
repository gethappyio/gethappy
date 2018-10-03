import React, { Component } from "react";
import "./styles/btn-primary.scss";
var classNames = require('classnames');

class BtnPrimary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  render() {
      let {className} = this.props;
      let btnClasses = classNames("btn-primary", className);
      return (
        <div className={btnClasses}>
            {this.props.children}
        </div>
      );
  }
}

export default BtnPrimary;