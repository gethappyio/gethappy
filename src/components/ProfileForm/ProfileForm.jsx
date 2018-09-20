import React, { Component } from "react";
import { Formik, Field } from "formik";
import axios from "axios";
import qs from "qs";
import { InputText } from "../Form/Form";
import PageNavigationBar from "../Page/PageNavigationBar";

import "../Form/styles/form.scss";
import Page from "../Page/Page";

class ProfileForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: "",
            email: "",
            firstName: "",
            lastName: ""
          };
    }

    componentDidMount() {
        let self = this;
        axios.post('/',  qs.stringify({
            action: '/gethappy/users/profile',
            CRAFT_CSRF_TOKEN: window.csrfTokenValue
        }))
        .then(function (response) {
           var profileInfo = response.data.user;

           self.setState({
                id: profileInfo.id,      
                email: profileInfo.email,
                firstName: profileInfo.firstName,
                lastName: profileInfo.lastName
           });
        })
        .catch(function (error) {
            console.log(error);
        });
    
      }
    
    render() {
        return (
            <PageNavigationBar title="Profile" href="/user">
            <Formik 
                enableReinitialize={true}
                onSubmit={(values) => {

                    axios.post('/', qs.stringify({
                        action: 'users/save-user',
                        CRAFT_CSRF_TOKEN: window.csrfTokenValue,
                        userId: this.state.id,
                        firstName: values.firstName,
                        lastName: values.lastName
                    }))
                    .then(function (json) {
                        let response = json.data;
                        if(response.success == true) {
                            console.log('success');
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                }}
                initialValues={{
                    email: this.state.email,
                    firstName: this.state.firstName,
                    lastName: this.state.lastName
                }}
                validateOnBlur={false}
                render={({
                    values,
                    handleSubmit
                }) => (
                    <form method="post" className="form__wrapper" onSubmit={handleSubmit}>
                            <Field component={InputText} 
                                   className="form-field__col-xs-12" 
                                   type="email" 
                                   name="email" 
                                   placeholder="Email" 
                                   value={values.email }
                                   disabled="true"/>
                            <Field component={InputText} 
                                   className="form-field__col-xs-12" 
                                   type="text" 
                                   name="firstName" 
                                   placeholder="Firstname" 
                                   value={values.firstName}/>
                            <Field component={InputText} 
                                   className="form-field__col-xs-12" 
                                   type="text" 
                                   name="lastName" 
                                   placeholder="Lastname" 
                                   value={values.lastName}/>
                            <div className="form-field__wrapper form-field__col-xs-12">
                                <button type="submit">Submit</button>
                            </div>
                    </form>
                )}
            />
            </PageNavigationBar>
        );
    }

}

export default ProfileForm;