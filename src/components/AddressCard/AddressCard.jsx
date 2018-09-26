import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/address-card.scss";

class AddressCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const address = this.props.address;

        let editable = this.props && this.props.editable ?
        <Link to={"/user/addresses/edit/" + address.id}>Edit</Link>
         : <span></span>;

        return (
            <div className="address-card">
                <p className="address-card__line">{address.firstName} {address.lastName}</p>
                <p className="address-card__line">{address.address1}</p>
                <p className="address-card__line">{address.address2}</p>
                <p className="address-card__line">{address.countryText}, {address.zipCode}</p>
                {editable}
            </div>
        );
    }
}

export default AddressCard;