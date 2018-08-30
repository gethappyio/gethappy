import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };
  }

  render() {
    return (
        <div>
            <Link to='/user'>User</Link>
            <Link to='/'>Home</Link>
            <Link to='/experience/selena-gomez'>Experience</Link>
        </div>
    );
  }
}

export default Nav;