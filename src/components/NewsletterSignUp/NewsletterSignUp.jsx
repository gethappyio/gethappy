import React, { Component } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { InputText } from "../Form/Form";
import "./styles/newsletter.scss";

class NewsletterSignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };
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
                            <Field component={InputText} 
                                    className="form-field__col-xs-12" 
                                    onChange={handleChange} 
                                    type="text" 
                                    name="email" 
                                    placeholder="Email" 
                                    value={values.email}
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