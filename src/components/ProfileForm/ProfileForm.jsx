import React, { Component } from "react";
import { Formik, Field } from "formik";
import axios from "axios";
import qs from "qs";
import * as Yup from "yup";
import { InputText } from "../Form/Form";
import { Interstitial } from "../Loading/Loading";
import { CSSTransition } from 'react-transition-group';
import BtnPrimary from "../BtnPrimary/BtnPrimary";
import Page from "../Page/Page";
import NavigationBar from "../NavigationBar/NavigationBar";
import HeaderIcon from "../HeaderIcon/HeaderIcon";
import iconProfile from "./assets/icon-person.svg";
import "../Form/styles/form.scss";

class ProfileForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: "",
            email: "",
            firstName: "",
            lastName: "",
            in: true
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
                lastName: profileInfo.lastName,
                in: false
           });
        })
        .catch(function (error) {
            console.log(error);
        });
    
      }
    
    render() {
        return (
            <div className="base__expand">
                <CSSTransition
                    in={this.state.in}
                    timeout={400}
                    classNames="loading-interstitial"
                    unmountOnExit>
                    <Interstitial loading="true" solid="true" logo="true" />
                </CSSTransition>
                <Page navigation={
                    <NavigationBar title="Edit Account" href="/user" />
                } footer="false">
                    <div class="base__pad">
                        <HeaderIcon icon={iconProfile} /> 
                        <div className="base__narrow base__margin-top">
                        <div className="section__content">
                            <Formik 
                                validationSchema={Yup.object().shape({
                                    firstName: Yup.string()
                                    .required('First name is required'),
                                    lastName: Yup.string()
                                    .required('Last name is required')
                                })}
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
                                            <div className="form__collapse">
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
                                                <BtnPrimary className="btn-primary--blue" submit="true">Update</BtnPrimary>
                                            </div>
                                            </div> 
                                    </form>
                                )}
                            />
                            </div>
                        </div>
                    </div>
                </Page>
            </div>
        );
    }

}

export default ProfileForm;