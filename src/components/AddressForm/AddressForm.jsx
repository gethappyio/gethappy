import React, { Component } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import qs from "qs";
import { InputText } from "../Form/Form";
import Select from "react-select";

import "../Form/styles/form.scss";

class AddressForm extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        const addressData = this.props.addressData;

        return (
            <Formik 
                initialValues={{
                    CRAFT_CSRF_TOKEN: window.csrfTokenValue,
                    action: "users/login",
                    firstName: addressData.firstName,
                    lastName: addressData.lastName,
                    address1: addressData.address1,
                    address2: addressData.address2,
                    city: addressData.city,
                    zipCode: addressData.zipCode,
                    phone: addressData.phone,
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

                    if(addressData.addressId) {
                        addressObj.id = addressData.addressId
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
                    //this.form.submit();
                }}
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
        );
    }

}

export default AddressForm;