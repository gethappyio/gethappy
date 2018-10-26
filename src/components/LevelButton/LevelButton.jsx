import React, { Component } from "react";
import classNames from 'classnames/bind';
import { Link } from "react-router-dom";
import "./styles/level-button.scss";

class LevelButton extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    buildLink() {
        const {href, to, children, className} = this.props;
        let classes = classNames("level-button", className);

        if(href) {
            return (
                <a href={href} className={classes}>
                    {children}
                </a>
            );
        } else if (to) {
            return (
                <Link to={to} className={classes}>
                    {children}
                </Link>
            );
        } else {
            return (
                <div className={classes}>{children}</div>
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
