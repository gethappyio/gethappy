import React, { Component } from "react";

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
        <div>
            <a href={url}>Forgot password?</a>
        </div>
    );
  }
}

export default ForgotPasswordLink;