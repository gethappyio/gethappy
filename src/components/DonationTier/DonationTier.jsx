import React, { Component } from "react";

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
        </div>
      );
  }
}

export default DonationTier;