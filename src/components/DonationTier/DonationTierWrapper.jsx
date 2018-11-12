import React, { Component } from "react";
import "./styles/donation-tier.scss";

class DonationTierWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    
  }

  render() {
      return (
        <div className="section__wrapper donation-tier__wrapper">
            <h2 className="donation-tier__main-title">Campaign Perks</h2>
            {this.props.children}
        </div>
      );
  }
}

export default DonationTierWrapper;