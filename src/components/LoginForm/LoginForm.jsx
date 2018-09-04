import React, { Component } from "react";
import { Formik, Field } from "formik";
import { InputText } from "../Form/Form";

import "../Form/styles/form.scss";

class LoginForm extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Formik 
                initialValues={{
                    CRAFT_CSRF_TOKEN: window.csrfTokenValue,
                    action: "users/login",
                    loginName: "",
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
                        <Field component={InputText} type="text" name="loginName" placeholder="Username" value={values.loginName}/>
                        <Field component={InputText} type="password" name="password" placeholder="Password" value={values.password}/>
                        <button type="submit">Submit</button>
                    </form>
                )}
            />
        );
    }

}

export default LoginForm;