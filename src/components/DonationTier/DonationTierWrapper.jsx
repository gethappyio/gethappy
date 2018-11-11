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
            {this.props.children}
        </div>
      );
  }
}

export default DonationTierWrapper;