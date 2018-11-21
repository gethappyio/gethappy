import React, { Component } from "react";
import { Formik, Field } from "formik";
import axios from "axios";
import qs from "qs";
import * as Yup from "yup";
import { FancyInputText } from "../Form/Form";

class FooterNewsletter extends Component {

    constructor() {
        super();
        this.state = {
            title: "",
            helper: ""
        };
      }

    onSubmit(values, {resetForm}) {
        let self = this;
        let payload = {};
        payload["action"] = 'mailchimp-subscribe/list/subscribe';
        payload["CRAFT_CSRF_TOKEN"] = window.csrfTokenValue;
        payload["email"] = values["email"];
    
        axios.post('/', qs.stringify(payload))
        .then(function (json) {
            let response = json.data;
            if(response.success == true) {
                self.setState({
                    helper: response.message
                });
                resetForm({});
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    onBlur() {
        console.log("blur");
        this.setState({
            helper: ""
        });
    }
    
    render() {
        return (
            <Formik 
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                    .email('Requires a valid email')
                    .required('Email is required')
                })}
                initialValues={{
                    email: ""
                }}
                onSubmit={this.onSubmit.bind(this)}
                validateOnBlur={false}
                render={({
                    errors,
                    touched,
                    values,
                    handleChange,
                    handleSubmit
                }) => (
                    <form method="post" className="form__wrapper footer-newsletter__wrapper" onSubmit={handleSubmit} ref={  (input) => { this.form = input } }>
                        <Field component={FancyInputText} 
                                className="form-field__col-xs-12" 
                                onChange={handleChange} 
                                onBlur={this.onBlur.bind(this)}
                                type="text" 
                                name="email" 
                                placeholder="Email" 
                                value={values.email || ""}
                                helper={this.state.helper}
                                insetSubmit="Ok"/>
                    </form>
                )}
            />
        );
    }
}

export default FooterNewsletter;