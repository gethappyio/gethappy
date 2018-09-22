import React, { Component } from "react";
import axios from "axios";
import Page from "../Page/Page";
import DonationTier from "../DonationTier/DonationTier";
import Nav from "../Nav/Nav";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      tiers: {}
    };

    this.slug = props.match.params.slug;
  }

  componentDidMount() {
    let self = this;
    axios.get('/experience/' + this.slug + '.json')
    .then(function (response) {
        var product = response.data.product;
        var tiers = response.data.tiers;
        self.setState({title: product.title});
        self.setState({tiers: tiers});
    })
    .catch(function (error) {
        console.log(error);
    });

  }

  render() {
    let donations = this.state && this.state.tiers.length > 0 ?
    this.state.tiers.map(tier =>
        <DonationTier tierData={tier}/>
    ) : <span></span>;
    return (
        <Page>
            <Nav />
            <h1>{this.state.title}</h1>
            <div className="section__wrapper">
            {donations}
            </div>
        </Page>
    );
  }
}

export default Experience;