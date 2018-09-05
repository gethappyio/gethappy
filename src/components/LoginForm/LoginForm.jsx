import React, { Component } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { InputText } from "../Form/Form";

import "../Form/styles/form.scss";

class LoginForm extends Component {

    constructor() {
        super();
    }
    
    render() {
        return (
            <Formik 
                validationSchema={Yup.object().shape({
                    loginName: Yup.string()
                    .required('A username is required'),
                    password: Yup.string()
                    .required('A password is required')
                })}
                initialValues={{
                    CRAFT_CSRF_TOKEN: window.csrfTokenValue,
                    action: "users/login",
                    loginName: "",
                    password: ""
                }}
                onSubmit={() => {
                    this.form.submit();
                }}
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
                            <Field component={InputText} className="form-field__col-xs-12" onChange={handleChange} type="text" name="loginName" placeholder="Username" value={values.loginName}/>
                            <Field component={InputText} className="form-field__col-xs-12" type="password" name="password" placeholder="Password" value={values.password}/>
                            <div className="form-field__wrapper form-field__col-xs-12">
                                <button type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                )}
            />
        );
    }

}

export default LoginForm;