import React, { Component } from "react";
import { Formik, Field } from "formik";
import axios from "axios";
import qs from "qs";
import * as Yup from "yup";
import { InputText } from "../Form/Form";
import "./styles/newsletter.scss";

class NewsletterSignUp extends Component {
  constructor(props) {
    super(props);

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
        <div className="newsletter__wrapper">
            <div className="section__wrapper">
                <div className="section__col-xs-12 newsletter__border">
                    <h2 className="newsletter__header">More experiences coming soon</h2>
                    <p className="newsletter__statement">Sign up to get the latest news</p>
                </div>
            </div>
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
                        <form method="post" className="form__wrapper" onSubmit={handleSubmit} ref={  (input) => { this.form = input } }>
                            <Field component={InputText} 
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
        </div>
    );
  }
}

export default NewsletterSignUp;