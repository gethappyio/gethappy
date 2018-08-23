import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles/header.scss";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      title: ""
    };
  }

  render() {
    return (
      <div>Header Tits</div>
    );
  }
}

export default Header;