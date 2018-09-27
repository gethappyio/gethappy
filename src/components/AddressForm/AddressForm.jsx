import React, { Component } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import qs from "qs";
import { InputText } from "../Form/Form";
import Select from "react-select";
import Page from "../Page/Page"
import NavigationBar from "../NavigationBar/NavigationBar";

import "../Form/styles/form.scss";

class AddressForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            address: "",
            model: "address"
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

    onSubmit(values) {
        let payload = {};
        payload["action"] = 'commerce/customer-addresses/save';
        payload["CRAFT_CSRF_TOKEN"] = window.csrfTokenValue;
        payload[this.state.model] = values[this.state.model];

        axios.post('/', qs.stringify(payload))
        .then(function (json) {
            let response = json.data;
            if(response.success == true) {
                console.log('success');
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    render() {
        const addressData = this.state.address;
        const model = this.state.model;


        return (
            <Page navigation={ <NavigationBar title="Address" to="/user/addresses" /> }>
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
                            <input type="hidden" name="id" value={values[model].id} />
                            <Field component={InputText} 
                                   className="form-field__col-xs-12" 
                                   type="text" 
                                   name={ model + '[firstName]'}
                                   placeholder="Firstname" 
                                   value={values[model].firstName}/>
                            <Field component={InputText} 
                                   className="form-field__col-xs-12" 
                                   type="text" name={ model + '[lastName]'} 
                                   placeholder="Lastname" 
                                   value={values[model].lastName}/>
                            <div className="form-field__wrapper form-field__col-xs-12">
                            <Select id="country"
                                    options={addressData.countries}
                                    defaultValue={values.countryId}
                                    />
                            </div>
                            <Field component={InputText} 
                                   className="form-field__col-xs-12" 
                                   type="text" 
                                   name={ model + '[address1]'} 
                                   placeholder="Address 1"
                                   value={values[model].address1}/>
                            <Field component={InputText} 
                                   className="form-field__col-xs-12" 
                                   type="text" 
                                   name={ model + '[address2]'}
                                   placeholder="Address 2" 
                                   value={values[model].address2}/>
                            <Field component={InputText} 
                                   className="form-field__col-xs-12" 
                                   type="text" 
                                   name={ model + '[city]'}
                                   placeholder="City" 
                                   value={values[model].city}/>
                            <Field component={InputText} 
                                   className="form-field__col-xs-12" 
                                   type="text" 
                                   name={ model + '[zipCode]'}
                                   placeholder="Zip Code" 
                                   value={values[model].zipCode}/>
                            <Field component={InputText} 
                                   className="form-field__col-xs-12" 
                                   type="text" 
                                   name={ model + '[phone]'}
                                   placeholder="Phone" 
                                   value={values[model].phone}/>
                            
                            <div className="form-field__wrapper form-field__col-xs-12">
                                <button type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                )}
            />
                </div>
            </Page>
        );
    }

}

export default AddressForm;