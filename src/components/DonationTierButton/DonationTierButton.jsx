import React, { Component } from "react";

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
            <input type="submit" value="Donate" />
        </form>
      );
  }
}

export default DonationTierButton;