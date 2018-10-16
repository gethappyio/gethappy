import React, { Component } from "react";
import { Formik, Field } from "formik";
import { Redirect } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import qs from "qs";
import Page from "../Page/Page"
import NavigationBar from "../NavigationBar/NavigationBar";
import AddressForm from "./AddressForm";

class AddressFormContainer extends Component {
    constructor(props) {
        super(props);
        this.id = props.match.params.id;

        this.state = {
            address: "",
            countries: "",
            model: "address",
            redirect: false
        }

    }

    componentDidMount() {
        let self = this;

        if(this.id) {
            axios.post('/',  qs.stringify({
                action: '/gethappy/customer-addresses/retrieve-by-id',
                CRAFT_CSRF_TOKEN: window.csrfTokenValue,
                id: this.id
            }))
            .then(function (response) {
               var address = response.data.address;
               var countries = response.data.countries;
                
               self.setState({
                    address: address,
                    countries: countries
               });
            })
            .catch(function (error) {
                console.log(error);
            });    
        } else {
            axios.post('/',  qs.stringify({
                action: '/gethappy/customer-addresses/get-countries',
                CRAFT_CSRF_TOKEN: window.csrfTokenValue
            }))
            .then(function (response) {
               var countries = response.data.countries;
                
               self.setState({
                    countries: countries
               });
            })
            .catch(function (error) {
                console.log(error);
            });    
        }
        
    }

    onSubmit(values) {
        let self = this;
        let payload = {};
        payload["action"] = 'commerce/customer-addresses/save';
        payload["CRAFT_CSRF_TOKEN"] = window.csrfTokenValue;
        payload[this.state.model] = values;
        console.log(values);

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
            return <Redirect to="/user/addresses" />;
        }

        const addressData = this.state.address;
        const model = this.state.model;
        return (
            <Page navigation={ <NavigationBar title="Address" to="/user/addresses" /> }>
                <div className="base__pad">
                    <div className="base__narrow base__margin-top">
                    <Formik 
                        validationSchema={Yup.object().shape({
                            firstName: Yup.string()
                            .required('First name is required'),
                            lastName: Yup.string()
                            .required('Last name is required'),
                            address1: Yup.string()
                            .required('Address1 is required'),
                            city: Yup.string()
                            .required('City is required'),
                            zipCode: Yup.string()
                            .required('zipCode is required'),
                            phone: Yup.string()
                            .required('Phone is required')
                        })}

                        initialValues={{
                            id: this.state.address.id,
                            firstName: this.state.address.firstName,
                            lastName: this.state.address.lastName,
                            address1: this.state.address.address1,
                            address2: this.state.address.address2,
                            city: this.state.address.city,
                            zipCode: this.state.address.zipCode,
                            phone: this.state.address.phone,
                            countryId: this.state.address.countryId,
                            countryText: this.state.address.countryText,
                            countries: this.state.countries
                        }}
                        onSubmit={this.onSubmit.bind(this)}
                        enableReinitialize={true}
                        validateOnBlur={false}
                        render={props => ( <AddressForm model={this.state.model} {...props}/> )} />
                    </div>
                </div>
            </Page>
        );
    }
}

export default AddressFormContainer;