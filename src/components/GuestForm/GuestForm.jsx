import React, { Component } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { InputText } from "../Form/Form";
import BtnPrimary from "../BtnPrimary/BtnPrimary";

import "../Form/styles/form.scss";
import "../LoginForm/styles/login-form.scss";
import "./styles/guest-form.scss";

class GuestForm extends Component {

    constructor() {
        super();
    }
    
    render() {
        let checkoutRedirect = window.checkoutRedirect ?
        <input type="hidden" name="redirect" value={window.checkoutRedirect} />
        : "";

        return (
            <div className="section__content guest-form__wrapper">
                <h1 className="login-form__header">Guest Checkout</h1>
                <Formik 
                    validationSchema={Yup.object().shape({
                        email: Yup.string()
                        .required('An email is required')
                    })}
                    initialValues={{
                        CRAFT_CSRF_TOKEN: window.csrfTokenValue,
                        action: "commerce/cart/update-cart",
                        email: ""
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
                                {checkoutRedirect}
                                <Field component={InputText} className="form-field__col-xs-12" onChange={handleChange} type="text" name="email" placeholder="Email" value={values.email}/>
                                <div className="form-field__wrapper form-field__col-xs-12">
                                    <BtnPrimary className="btn-primary--blue" submit="true">Guest Checkout</BtnPrimary>
                                </div>
                            </div>
                        </form>
                    )}
                />
            </div>
        );
    }

}

export default GuestForm;