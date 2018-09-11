import React, { Component } from "react";
import { Link } from "react-router-dom";

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
            <div className="header__icon header__icon--user"><Link to='/user' className="header__icon-link"></Link></div>
            <div className="header__icon header__icon--logo"><Link to='/' className="header__icon-link"></Link></div>
            <div className="header__icon header__icon--info"><Link to='/experience/selena-gomez' className="header__icon-link"></Link></div>
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