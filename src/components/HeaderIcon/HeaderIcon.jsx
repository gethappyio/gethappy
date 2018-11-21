import React, { Component } from "react";
import "./styles/header-icon.scss";

class HeaderIcon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };
  }

  render() {
    return (
        <div>
            <img className="header-icon" src={this.props.icon} />
        </div>
    );
  }
}

export default HeaderIcon;