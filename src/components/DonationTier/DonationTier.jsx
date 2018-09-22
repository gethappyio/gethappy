import React, { Component } from "react";
import DonationTierButton from "../DonationTierButton/DonationTierButton";
import "./styles/donation-tier.scss";

class DonationTier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.data = props.tierData;
  }

  render() {
      return (
        <div className="donation-tier section__col-xs-12">
            <h2 className="donation-tier__entries-wrapper">
                <span className="donation-tier__entries">{this.data.tierEntries}</span>
                <span className="donation-tier__entries-label">entries</span>
            </h2>
            <p className="donation-tier__description">{this.data.tierDescription}</p>
            <DonationTierButton purchaseableId={this.data.id} price={this.data.price}/>
        </div>
      );
  }
}

export default DonationTier;