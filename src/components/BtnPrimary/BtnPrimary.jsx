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

    outputBtn() {
        let {className} = this.props;
        let btnClasses = classNames("btn-primary", className);
        if(this.props.submit) {
            return (
                <button type="submit" className={btnClasses}>
                    {this.props.children}
                </button>
            );
        } else {
            return (
                <div className={btnClasses}>
                    {this.props.children}
                </div>
            );
        }
    }

    render() {
        let btn = this.outputBtn();
        return (
            <div className="btn-primary__wrapper">
                {btn}
            </div>
        );
    }
}

export default BtnPrimary;