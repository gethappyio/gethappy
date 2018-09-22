import React, { Component } from "react";
import DonationTierButton from "../DonationTierButton/DonationTierButton";

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
        <div>
            {this.data.title}
            {this.data.sku}
            <DonationTierButton purchaseableId={this.data.id} price={this.data.price}/>
        </div>
      );
  }
}

export default DonationTier;