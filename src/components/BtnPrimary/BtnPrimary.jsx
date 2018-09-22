import React, { Component } from "react";
import "./styles/btn-primary.scss";

class BtnPrimary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  render() {
      return (
        <div className="btn-primary">
            {this.props.children}
        </div>
      );
  }
}

export default BtnPrimary;