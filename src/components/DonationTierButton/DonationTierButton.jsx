import React, { Component } from "react";
import BtnPrimary from "../BtnPrimary/BtnPrimary";
import "./styles/donation-tier-btn.scss";

class DonationTierButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  render(props) {
      return (
        <form method="POST">
            <input type="hidden" name="action" value="commerce/cart/update-cart"></input>
            <input type="hidden" name="redirect" value={window.donateRedirect}/>
            <input type="hidden" name="CRAFT_CSRF_TOKEN" value={window.csrfTokenValue}></input>
            <input type="hidden" name="qty" value="1" />
            <input type="hidden" name="purchasableId" value={this.props.purchaseableId}></input>
            <button type="submit" className="donation-tier-btn__submit">
                <BtnPrimary>Donate ${parseFloat(this.props.price).toFixed(0)}</BtnPrimary>
            </button>
        </form>
      );
  }
}

export default DonationTierButton;