import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles/bottom.scss";

class Bottom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };
  }

  processBottom() {
    if(this.props.container == "false") {
        return (
            this.renderBottom()
        );
    }

    return (
        <div id="happyBottom">
            {this.renderBottom()}
        </div>
    );
  }

  renderBottom() {
      return (
        <div className="bottom">Bottom</div>
      );
  }

  render() {
    return (
        this.processBottom()
    );
  }
}

export default Bottom;