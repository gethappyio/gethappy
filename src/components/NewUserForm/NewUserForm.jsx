import React, { Component } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { InputText } from "../Form/Form";

import "../Form/styles/form.scss";

class NewUserForm extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Formik
                validationSchema={Yup.object().shape({
                    username: Yup.string()
                    .required('Username is required'),
                    email: Yup.string()
                    .required('Email is required'),
                    password: Yup.string()
                    .required('Password is required')
                })}
                initialValues={{
                    CRAFT_CSRF_TOKEN: window.csrfTokenValue,
                    action: "users/save-user",
                    username: "",
                    email: "",
                    password: ""
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
                    <form method="post" className="form__wrapper" onSubmit={handleSubmit} ref={  (input) => { this.form = input } }>
                        <input type="hidden" name="CRAFT_CSRF_TOKEN" value={values.CRAFT_CSRF_TOKEN} />
                        <input type="hidden" name="action" value={values.action} />
                        <Field component={InputText} type="text" name="username" placeholder="Username" value={values.username}/>
                        <Field component={InputText} type="email" name="email" placeholder="Email" value={values.email}/>
                        <Field component={InputText} type="password" name="password" placeholder="Password" value={values.password}/>
                        <button type="submit">Register</button>
                    </form>
                )}
            />
        );
    }

}

export default NewUserForm;