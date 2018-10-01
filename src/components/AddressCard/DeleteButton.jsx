import React, { Component } from "react";
import axios from "axios";
import qs from "qs";

class DeleteButton extends Component {
    constructor(props) {
        super(props);
    }

    deleteAddress(id) {
        let self = this;
        axios.post('/',  qs.stringify({
            action: 'commerce/customer-addresses/delete',
            CRAFT_CSRF_TOKEN: window.csrfTokenValue,
            id: id
        }))
        .then(function (response) {
           self.props.callback();
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
     
        return (
           <button onClick={() => this.deleteAddress(this.props.id)}>delete</button>
        );
    }
}

export default DeleteButton;