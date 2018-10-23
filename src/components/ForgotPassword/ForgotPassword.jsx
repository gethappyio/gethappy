import React, { Component } from "react";
import queryString from 'query-string';
import Page from "../Page/Page";
import NavigationBar from "../NavigationBar/NavigationBar";

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
            }>
                test
            </Page>
        );
      }
}

export default ForgotPassword;