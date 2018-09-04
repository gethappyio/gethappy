import React, { Component } from "react";
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
        return(
            <div className="form-field__wrapper">
                <input {...field} {...props} className="form-text"/>
                {touch && error && <div className="form-error">{error}</div>}
            </div>
        );
    }
    
}

export { InputText };