import React, { Component } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import qs from "qs";
import { InputText } from "../Form/Form";
import Select from "react-select";
import PageNavigationBar from "../Page/PageNavigationBar"

import "../Form/styles/form.scss";

class AddressForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            address: ""
        }

        this.id = props.match.params.id;
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
    
               self.setState({
                    address: address
               });
            })
            .catch(function (error) {
                console.log(error);
            });    
        }
        
    }
    
    render() {
        const addressData = this.state.address;

        return (
            <PageNavigationBar title="Address" to="/user/addresses">
                <div className="base__pad">
            <Formik 
                initialValues={{
                    firstName: this.state.address.firstName,
                    lastName: this.state.address.lastName,
                    address1: this.state.address.address1,
                    address2: this.state.address.address2,
                    city: this.state.address.city,
                    zipCode: this.state.address.zipCode,
                    phone: this.state.address.phone,
                    countryId: 198
                }}
                onSubmit={(values) => {
                    console.log(values);
                    let addressObj = { 
                        firstName: values.firstName,
                        lastName: values.lastName,
                        address1: values.address1,
                        address2: values.address2,
                        city: values.city,
                        zipCode: values.zipCode,
                        phone: values.phone,
                        countryId: values.countryId
                    };

                    if(addressData.id) {
                        addressObj.id = addressData.id
                    }

                    axios.post('/', qs.stringify({
                        action: 'commerce/customer-addresses/save',
                        CRAFT_CSRF_TOKEN: window.csrfTokenValue,
                        address: addressObj
                    }))
                    .then(function (json) {
                        let response = json.data;
                        if(response.success == true) {
                            console.log('success');
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                }}
                enableReinitialize={true}
                validateOnBlur={false}
                render={({
                    errors,
                    touched,
                    values,
                    handleChange,
                    handleSubmit
                }) => (
                    <form method="post" className="form__wrapper" onSubmit={handleSubmit} ref={  (input) => { this.form = input } }>
                        <div className="form__collapse">
                            <input type="hidden" name="CRAFT_CSRF_TOKEN" value={values.CRAFT_CSRF_TOKEN} />
                            <input type="hidden" name="action" value={values.action} />
                            <Field component={InputText} 
                                   className="form-field__col-xs-12" 
                                   type="text" 
                                   name="firstName" 
                                   placeholder="Firstname" 
                                   value={values.firstName}/>
                            <Field component={InputText} 
                                   className="form-field__col-xs-12" 
                                   type="text" name="lastName" 
                                   placeholder="Lastname" 
                                   value={values.lastName}/>
                            <div className="form-field__wrapper form-field__col-xs-12">
                            <Select id="country"
                                    options={addressData.countries}
                                    defaultValue={values.countryId}
                                    />
                            </div>
                            <Field component={InputText} 
                                   className="form-field__col-xs-12" 
                                   type="text" 
                                   name="address1" 
                                   placeholder="Address 1"
                                   value={values.address1}/>
                            <Field component={InputText} 
                                   className="form-field__col-xs-12" 
                                   type="text" 
                                   name="address2"
                                   placeholder="Address 2" 
                                   value={values.address2}/>
                            <Field component={InputText} 
                                   className="form-field__col-xs-12" 
                                   type="text" 
                                   name="city"
                                   placeholder="City" 
                                   value={values.city}/>
                            <Field component={InputText} 
                                   className="form-field__col-xs-12" 
                                   type="text" 
                                   name="zipCode"
                                   placeholder="Zip Code" 
                                   value={values.zipCode}/>
                            <Field component={InputText} 
                                   className="form-field__col-xs-12" 
                                   type="text" 
                                   name="phone"
                                   placeholder="Phone" 
                                   value={values.phone}/>
                            
                            <div className="form-field__wrapper form-field__col-xs-12">
                                <button type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                )}
            />
                </div>
            </PageNavigationBar>
        );
    }

}

export default AddressForm;