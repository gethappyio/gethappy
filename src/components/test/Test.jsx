import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles/Test.scss";

class Test extends Component {
  constructor() {
    super();

    this.state = {
      title: ""
    };
  }

  render() {
    return (
      <div id="test">Tits</div>
    );
  }
}

export default Test;

const wrapper = document.getElementById("app-test-component");
wrapper ? ReactDOM.render(<Test />, wrapper) : false;