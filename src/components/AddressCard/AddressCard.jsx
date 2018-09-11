import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddressCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const address = this.props.address;
        return (
            <div>
                <p>{address.firstName}</p>
                <p>{address.lastName}</p>
                <p>{address.address1}</p>
                <p>{address.address2}</p>
                <p>{address.countryText}</p>
                <p>{address.zipCode}</p>
                <p>{address.phone}</p>
                <Link to={"/user/addresses/edit/" + address.id}>Edit</Link>
            </div>
        );
    }
}

export default AddressCard;