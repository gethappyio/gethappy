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
        let {submit, className, ...rest} = this.props;
        let btnClasses = classNames("btn-primary", className);
        if(submit) {
            return (
                <button type="submit" className={btnClasses} {...rest}>
                    {this.props.children}
                </button>
            );
        } else {
            return (
                <div className={btnClasses} {...rest}>
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