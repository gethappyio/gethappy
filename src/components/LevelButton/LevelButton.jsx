import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/level-button.scss";

class LevelButton extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    buildLink() {
        const {href, link, children} = this.props;

        if(href) {
            return (
                <a href={href} className="level-button">
                    {children}
                </a>
            );
        } else if (link) {
            return (
                <Link to={link} className="level-button">
                    {children}
                </Link>
            );
        } else {
            return (
                <div className="level-button">{children}</div>
            );
        }
        
    }

    render() {

        const link = this.buildLink();
        
        return (
            <div className="level-button__wrapper">{link}</div>
        );
    }

}

export { LevelButton };

class LevelButtons extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {children} = this.props; 

        return (
            <div className="level-buttons">{children}</div>
        );
    }

}
export { LevelButtons };
