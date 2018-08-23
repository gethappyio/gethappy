import React, { Component } from "react";
import Page from "../page/Page";
import { Switch, Route, Link } from "react-router-dom";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  render() {
    return (
        <Page>
            <h1>{this.props.match.params.title}</h1>
        </Page>
    );
  }
}

export default Experience;