import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/row-button.scss";

class RowButton extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    buildLink() {
        const {href, link, children} = this.props;

        if(href) {
            return (
                <a href={href} className="row-button">
                    {children}
                </a>
            );
        } else if (link) {
            return (
                <Link to={link} className="row-button">
                    {children}
                </Link>
            );
        } else {
            return (
                <div className="row-button">{children}</div>
            );
        }
        
    }

    render() {
        const link = this.buildLink();
        return (
            <div className="row-button__wrapper">{link}</div>
        );
    }

}

export default RowButton;
