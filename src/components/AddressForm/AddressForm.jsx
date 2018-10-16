import React, { Component } from "react";
import { Formik, Field } from "formik";
import { InputText } from "../Form/Form";
import Select from "react-select";
import BtnPrimary from "../BtnPrimary/BtnPrimary";

import "../Form/styles/form.scss";

class AddressForm extends Component {

    constructor(props) {
        super(props);

        let { values } = this.props;
    }

    handleChange(selectedOption) {
        let {setFieldValue} = this.props;
        this.setState({ selectedOption });
        setFieldValue("countryId", selectedOption.value);
    }
    
    render() {
        
        const {
            errors,
            touched,
            values,
            handleChange,
            handleSubmit
        } = this.props;
        
        let selectedOption = this.state && this.state.selectedOption ? this.state.selectedOption : { value: values.countryId, label: values.countryText};
        const model = this.props.model;
        const options = [];
        Object.keys(values.countries).map((countryId) => 
            options.push({value: countryId, label: values.countries[countryId]})
        );

        return (
            <form method="post" className="form__wrapper" onSubmit={handleSubmit} ref={  (input) => { this.form = input } }>
                <div className="form__collapse">
                    <input type="hidden" name="CRAFT_CSRF_TOKEN" value={values.CRAFT_CSRF_TOKEN} />
                    <input type="hidden" name="action" value={values.action} />
                    <input type="hidden" name="id" value={values.id} />
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
                            name="countryId"
                            value={selectedOption}
                            onChange={this.handleChange.bind(this)}
                            options={options}
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
                        <BtnPrimary className="btn-primary--blue" submit="true">Save</BtnPrimary>
                    </div>
                </div>
            </form>
    
        );
    }

}

export default AddressForm;