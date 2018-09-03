import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { InputText } from "../Form/Form";

import "../Form/styles/form.scss";

class ContactForm extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Formik 
                initialValues={{
                    action: "users/login",
                    email: "",
                    name: ""
                }}
                onSubmit={values => {
                    this.form.submit();
                }}
                render={({
                    errors,
                    touched,
                    values,
                    handleSubmit
                }) => (
                    <form className="form__wrapper" onSubmit={handleSubmit} ref={  (input) => { this.form = input } }>
                        <input type="hidden" name="action" value={values.action} />
                        <Field component={InputText} type="email" name="email" value={values.email}/>
                        <Field component={InputText} type="text" name="name" value={values.name}/>
                        <button type="submit">Submit</button>
                    </form>
                )}
            />
        );
    }

}

export default ContactForm;