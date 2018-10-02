import React, { Component } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { InputText } from "../Form/Form";
import Select from "react-select";

import "../Form/styles/form.scss";

class AddressForm extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        
        const {
            errors,
            touched,
            values,
            handleChange,
            handleSubmit
        } = this.props;

        const model = this.props.model;

        return (
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
                            defaultValue={values[model].countryId}
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
    
        );
    }

}

export default AddressForm;