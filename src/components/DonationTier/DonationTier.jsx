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
            <h5 className="donation-tier__title">{this.data.tierTitle}</h5>
            <h2 className="donation-tier__entries-wrapper">
                <span className="donation-tier__entries">{this.data.title}</span>
            </h2>
            {this.data.tierGift ?
            <img className="donation-tier__gift-image" src={this.data.tierGift.image} /> :
             ""}
            <p className="donation-tier__description">{this.data.tierDescription}</p>

            {this.data.tierGift ?
            <p className="donation-tier__gift-left">{this.data.tierGift.stock} left</p> :
             ""}
            <DonationTierButton purchaseableId={this.data.id} price={this.data.price}/>
        </div>
      );
  }
}

export default DonationTier;