import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import qs from "qs";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let self = this;

        axios.post('/', qs.stringify({
            action: 'users/login',
            CRAFT_CSRF_TOKEN: window.csrfTokenValue,
            redirect: "/",
            loginName: this.state.loginName,
            password: this.state.password
        }))
        .then(function (json) {
            let response = json.data;
            if(response.success == true) {
                self.setState({ redirectToReferrer: true });
                self.props.context.authenticate(() => {
                    console.log('what');
                    
                });
            }
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }

    render() {
        
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const redirectToReferrer = this.state.redirectToReferrer;
        console.log(redirectToReferrer);
        if(redirectToReferrer) {
            return <Redirect to={from} />;
        }

        return(
            <form onSubmit={this.handleSubmit}>
                <h3><label for="loginName">Username or email</label></h3>
                <input id="loginName" type="text" name="loginName" value={this.state.loginName} onChange={this.handleChange}/>

                <h3><label for="password">Password</label></h3>
                <input id="password" type="password" name="password" onChange={this.handleChange}/>

                <input type="submit" value="Login"/>
            </form>
        );
    }

}

export default Login;