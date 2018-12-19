import React, { Component } from "react";
import Page from "../Page/Page";
import ExperienceMain from "./ExperienceMain";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.slug = props.match.params.slug;
  }

  render() {
    return (
        <Page footer="false" noNav="true" className="base__abs app__swoop experience__wrapper" transparentNav="true">
            <ExperienceMain slug={this.slug} data={this.props.data}/>
        </Page>
    );
  }
}

export default Experience;