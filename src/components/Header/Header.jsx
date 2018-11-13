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

  returnedHeader(type, url, title, direction) {
    if(direction == "left") {
        return (
            <div className="header__container-inner">
                <div className={"header__icon header__icon--" + type}><Link to={{ pathname: url, state: {slide: "right", timeout:200}}} className="header__icon-link"></Link></div>
                <div className={"header__icon header__icon--" + title}></div>
                <div className="header__icon"></div>   
            </div>
        );
    } else {
        return (
            <div className="header__container-inner">
                <div className="header__icon"></div>   
                <div className={"header__icon header__icon--" + title}></div>
                <div className={"header__icon header__icon--" + type}><Link to={{ pathname: url, state: {slide: "left", timeout:200}}} className="header__icon-link"></Link></div>
            </div>
        );
    }
      
  }

  defaultHeader() {
      return (
        <div className="header__container-inner">
            <div className="header__icon header__icon--user"><Link to={{ pathname: '/user', state: {slide: "right", timeout:200}}} className="header__icon-link"></Link></div>
            <div className="header__icon header__icon--logo"><Link to='/' className="header__icon-link"></Link></div>
            <div className="header__icon header__icon--info"><Link to={{ pathname: '/about', state: {slide: "left", timeout:200}}} className="header__icon-link"></Link></div>   
        </div>
      );
  }

  renderHeader() {
      let {returnType, returnUrl, title, direction} = this.props;
      let header = returnType ? this.returnedHeader(returnType, returnUrl, title, direction) : this.defaultHeader();
      return (
          <div className="base__expand">
              {header}
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
