import React, { Component } from "react";
import { Formik, Field } from "formik";
import { Redirect } from "react-router-dom";
import axios from "axios";
import qs from "qs";
import Page from "../Page/Page"
import NavigationBar from "../NavigationBar/NavigationBar";
import AddressForm from "../AddressForm/AddressForm";

class CheckoutAddressFormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            address: "",
            model: "address",
            redirect: false
        }

    }

    onSubmit(values) {
        let self = this;
        let payload = {};
        payload["action"] = 'commerce/customer-addresses/save';
        payload["CRAFT_CSRF_TOKEN"] = window.csrfTokenValue;
        payload[this.state.model] = values[this.state.model];

        axios.post('/', qs.stringify(payload))
        .then(function (json) {
            let response = json.data;
            if(response.success == true) {
               self.setState({
                   redirect: true
               });
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }


    render() {

        if(this.state.redirect) {
            return <Redirect to="/checkout" />;
        }
        
        const model = this.state.model;
        return (
            <Page navigation={ <NavigationBar title="New Shipping Address" to="/checkout" /> }>
                <div className="base__pad">
                    <Formik 
                        initialValues={{
                            [model]: {
                                id: this.state.address.id,
                                firstName: this.state.address.firstName,
                                lastName: this.state.address.lastName,
                                address1: this.state.address.address1,
                                address2: this.state.address.address2,
                                city: this.state.address.city,
                                zipCode: this.state.address.zipCode,
                                phone: this.state.address.phone,
                                countryId: 198
                            }
                        }}
                        onSubmit={this.onSubmit.bind(this)}
                        enableReinitialize={true}
                        validateOnBlur={false}
                        render={props => ( <AddressForm model={this.state.model} {...props}/> )} />
                </div>
            </Page>
        );
    }
}

export default CheckoutAddressFormContainer;