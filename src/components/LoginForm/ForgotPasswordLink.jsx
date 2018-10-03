import React, { Component } from "react";

class ForgotPasswordLink extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
        <div>
            <a href="/forgotpassword">Forgot password?</a>
        </div>
    );
  }
}

export default ForgotPasswordLink;