import React, { Component } from "react";
import "./styles/forgot-password.scss";

class ForgotPasswordLink extends Component {
  constructor(props) {
    super(props);
  }


  render() {
      let from;
      if (this.props.from == "/checkout/login") {
        from = "checkout";
      } else {
        from = "login";
      }
      
      let url = "/forgotpassword?redirect=" + from;
    return (
        <div className="forgot-password__wrapper">
            Forgot password? <a href={url} className="forgot-password__link">Click here</a>
        </div>
    );
  }
}

export default ForgotPasswordLink;