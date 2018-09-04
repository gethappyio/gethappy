import React, { Component } from "react";
import ReactDOM from "react-dom";

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
        <div>Header</div>
      );
  }

  render() {
    return (
        this.processHeader()
    );
  }
}

export default Header;