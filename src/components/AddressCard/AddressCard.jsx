import React, { Component } from "react";

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
                <a href={"addresses/edit?addressId=" + address.id}>Edit</a>
            </div>
        );
    }
}

export default AddressCard;