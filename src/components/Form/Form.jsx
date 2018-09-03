import React, { Component } from "react";
import "./styles/form-field.scss";
import "./styles/form-text.scss";
import "../Form/styles/form.scss";

class InputText extends Component {
    constructor() {
        super();
    }

    render() {
        const { field, form: { touched, errors }, ...props } = this.props;
        return(
            <div className="form-field__wrapper">
                <input {...field} {...props} className="form-text"/>
            </div>
        );
    }
    
}

export { InputText };