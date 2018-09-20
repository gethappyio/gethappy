import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/address-card.scss";

class AddressCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const address = this.props.address;
        return (
            <div className="address-card">
                <p className="address-card__line">{address.firstName}</p>
                <p className="address-card__line">{address.lastName}</p>
                <p className="address-card__line">{address.address1}</p>
                <p className="address-card__line">{address.address2}</p>
                <p className="address-card__line">{address.countryText}</p>
                <p className="address-card__line">{address.zipCode}</p>
                <p className="address-card__line">{address.phone}</p>
                <Link to={"/user/addresses/edit/" + address.id}>Edit</Link>
            </div>
        );
    }
}

export default AddressCard;