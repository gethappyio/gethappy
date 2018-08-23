import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles/bottom.scss";

class Bottom extends Component {
  constructor() {
    super();

    this.state = {
      title: ""
    };
  }

  render() {
    return (
      <div className="bottom">Bottom</div>
    );
  }
}

export default Bottom;