import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { InputText } from "../Form/Form";

class ContactForm extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Formik 
                onSubmit={values => {
                    console.log(values);
                    this.form.submit();
                }}
                render={({
                    errors,
                    touched,
                    handleSubmit
                }) => (
                    <form onSubmit={handleSubmit} ref={  (input) => { this.form = input } }>
                        <Field component={InputText} type="email" name="email" />
                        <Field component={InputText} type="text" name="name" />
                        <button type="submit">Submit</button>
                    </form>
                )}
            />
        );
    }

}

export default ContactForm;