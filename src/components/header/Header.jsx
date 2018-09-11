import React, { Component } from "react";
import ReactDOM from "react-dom";

import imgLogo from "../../assets/icons/logo.svg";
import imgInfo from "../../assets/icons/info.svg";

import "./styles/header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  processHeader() {
    if(this.props.container == "false") {
        return (
            this.renderHeader()
        );
    }

    return (
        <div id="happyHeader" class="header-container">
            {this.renderHeader()}
        </div>
    );
  }

  renderHeader() {
      return (
        <div className="header__container-inner">
            <div className="header__icon header__icon--user"></div>
            <div className="header__icon header__icon--logo"></div>
            <div className="header__icon header__icon--info"></div>
        </div>
      );
  }

  render() {
    return (
        this.processHeader()
    );
  }
}

export default Header;