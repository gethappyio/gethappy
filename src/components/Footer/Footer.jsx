import React, { Component } from "react";
import imgLogo from "../../assets/icons/logo-full-navy.svg";
import "./styles/footer.scss";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };
  }

  processFooter() {
    if(this.props.container == "false") {
        return (
            this.renderFooter()
        );
    }

    return (
        <div id="happyFooter">
            {this.renderFooter()}
        </div>
    );
  }

  renderFooter() {
      return (
        <div className="footer footer--grey section__wrapper">
            <div className="footer__wrapper section__col-xs-12">
                <div className="footer__logo"><img src={imgLogo} /></div>
                <div className="footer__copyright">All Rights Reserved 2018</div>
            </div>
        </div>
      );
  }

  render() {
    return (
        this.processFooter()
    );
  }
}

export default Footer;