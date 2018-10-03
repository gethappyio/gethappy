import React, { Component } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { InputText } from "../Form/Form";
import BtnPrimary from "../BtnPrimary/BtnPrimary";

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
                        <div className="form__collapse">
                            <input type="hidden" name="CRAFT_CSRF_TOKEN" value={values.CRAFT_CSRF_TOKEN} />
                            <input type="hidden" name="action" value={values.action} />
                            <Field component={InputText} className="form-field__col-xs-12" type="text" name="username" placeholder="Username" value={values.username}/>
                            <Field component={InputText} className="form-field__col-xs-12" type="email" name="email" placeholder="Email" value={values.email}/>
                            <Field component={InputText} className="form-field__col-xs-12" type="password" name="password" placeholder="Password" value={values.password}/>
                            <div className="form-field__wrapper form-field__col-xs-12">
                                <BtnPrimary className="btn-primary--blue">Signup</BtnPrimary>
                            </div>
                        </div>
                    </form>
                )}
            />
        );
    }

}

export default NewUserForm;