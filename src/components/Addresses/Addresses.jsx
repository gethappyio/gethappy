import React, { Component } from "react";
import axios from "axios";
import qs from "qs";
import Page from "../Page/Page";
import AddressCard from "../AddressCard/AddressCard";

class Addresses extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addresses: null
        };
    }

    componentDidMount() {
        let self = this;
        axios.post('/',  qs.stringify({
            action: '/gethappy/customer-addresses/retrieve',
            CRAFT_CSRF_TOKEN: window.csrfTokenValue
        }))
        .then(function (response) {
           var addresses = response.data.addresses;

           self.setState({
                addresses: addresses
           });
        })
        .catch(function (error) {
            console.log(error);
        });
    
    }

    getOutput() {
        if(this.state.addresses) {
            return this.state.addresses.map((address) => <AddressCard address={address} />);
        } else {
            return "";
        }
    }

    render() {
        const addresses = this.getOutput(); 
        return (
            <Page>
                {addresses}
            </Page>
        );
    }
}

export default Addresses;