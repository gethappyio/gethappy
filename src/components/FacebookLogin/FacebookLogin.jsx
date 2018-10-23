import React, { Component } from "react";

class FacebookLogin extends Component {
  constructor(props) {
    super(props);

    this.url = "/index.php?p=actions/social/login-accounts/login&provider=facebook";
  }


  render() {
    
    return (
        <a href={this.url}>Facebook login</a>
    );
  }
}

export default FacebookLogin;