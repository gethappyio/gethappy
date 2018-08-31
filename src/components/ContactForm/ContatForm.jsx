import React, { Component } from "react";
import { Formik, Form, Field } from "formik";

class ContactForm extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Formik 
                render={({
                    errors,
                    touched,
                    isSubmitting,
                }) => (
                    <Form>
                        <Field type="email" name="email" />
                        <Field type="text" name="name" />
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    </Form>
                )}
            />
        );
    }

}

export default ContactForm;