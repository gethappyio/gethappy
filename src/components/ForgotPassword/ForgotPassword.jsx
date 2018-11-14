import React, { Component } from "react";
import queryString from 'query-string';
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { InputText } from "../Form/Form";
import BtnPrimary from "../BtnPrimary/BtnPrimary";
import Page from "../Page/Page";
import NavigationBar from "../NavigationBar/NavigationBar";

import "../Form/styles/form.scss";

class ForgotPassword extends Component {

    constructor() {
        super();
    
        this.state = {
          title: "",
          backUrl: ""
        };
      }

      componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        var backUrl = "";
        if (values.redirect == "checkout") {
            backUrl = "/checkout/login";
        } else {
            backUrl = "/login";
        }

        this.setState({backUrl: backUrl});
            
      }
    
      render() {
        return (
            <Page navigation={
                <NavigationBar title="Forgot Password" href={this.state.backUrl} />
            } footer="false">
                <div className="section__content">
                    
                    <Formik 
                        validationSchema={Yup.object().shape({
                            username: Yup.string()
                            .required('A username is required')
                        })}
                        initialValues={{
                            CRAFT_CSRF_TOKEN: window.csrfTokenValue,
                            action: "users/send-password-reset-email",
                            username: ""
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
                                <div className="form__col-xs-12">
                                    <input type="hidden" name="CRAFT_CSRF_TOKEN" value={values.CRAFT_CSRF_TOKEN} />
                                    <input type="hidden" name="action" value={values.action} />                                    <Field component={InputText} className="form-field__col-xs-12" onChange={handleChange} type="text" name="username" placeholder="Username / Email" value={values.username}/>
                                    <div className="form-field__wrapper form-field__col-xs-12">
                                        <BtnPrimary className="btn-primary--blue" submit="true">Request password</BtnPrimary>
                                    </div>
                                </div>
                            </form>
                        )}
                    />
                </div>
            </Page>
        );
      }
}

export default ForgotPassword;