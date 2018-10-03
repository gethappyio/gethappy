import React, { Component } from "react";
import classNames from 'classnames/bind';
import "./styles/form-field.scss";
import "./styles/form-text.scss";
import "../Form/styles/form.scss";
import "../Form/styles/form-error.scss";

class InputText extends Component {
    constructor() {
        super();
    }

    render() {
        const { field, form: { touched, errors }, ...props } = this.props;
        const error = errors[field.name];
        const touch = touched[field.name];
        const inputClasses = props.className;

        let isError = touch && error ? true : false;
        
        var classes = classNames({
            "form-field__wrapper": true,
        }, inputClasses);

        var fieldClasses = classNames("form-text", {
            "form-error__input": isError
        });

        return(
            <div className={classes}>
                <input {...field} {...props} className={fieldClasses}/>
                {touch && error && <div className="form-error">{error}</div>}
            </div>
        );
    }
}

export { InputText };