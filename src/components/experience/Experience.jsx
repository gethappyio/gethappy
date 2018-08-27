import React, { Component } from "react";
import axios from "axios";
import Page from "../page/Page";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };

    this.slug = props.match.params.slug;
  }

  componentDidMount() {
    let self = this;
    axios.get('/experience/' + this.slug + '.json')
    .then(function (response) {
        var product = response.data.product;
        var title = product.title;
        console.log(product);
        self.setState({title: title});
    })
    .catch(function (error) {
        console.log(error);
    });

  }

  render() {
    return (
        <Page>
            <h1>{this.state.title}</h1>
        </Page>
    );
  }
}

export default Experience;