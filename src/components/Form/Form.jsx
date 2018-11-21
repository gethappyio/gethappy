import React, { Component } from "react";
import classNames from 'classnames/bind';
import "./styles/form-field.scss";
import "./styles/form-text.scss";
import "./styles/form-fancy-text.scss";
import "../Form/styles/form.scss";
import "../Form/styles/form-error.scss";
import "../Form/styles/form-helper.scss";

class InputText extends Component {
    constructor() {
        super();
    }

    render() {
        const { field, form: { touched, errors }, insetSubmit, helper, ...props } = this.props;
        const error = errors[field.name];
        const touch = touched[field.name];
        const inputClasses = props.className;
        let isError = touch && error && !helper ? true : false;
        let isHelper = helper ? true : false;
        
        var classes = classNames({
            "form-field__wrapper": true,
        }, inputClasses);

        var fieldClasses = classNames("form-text", {
            "form-error__input": isError,
            "form-helper__success": isHelper
        });

        return(
            <div className={classes}>
                <div className="form-field__inner">
                    <input {...field} {...props} className={fieldClasses}/>
                    {insetSubmit && <button type="submit" className="form-text__submit">{insetSubmit}</button>}
                </div>
                {touch && error && !helper && <div className="form-error">{error}</div>}
                {helper && <div className="form-helper">{helper}</div>}
            </div>
        );
    }
}

export { InputText };

class FancyInputText extends Component {
    constructor() {
        super();
    }

    render() {
        const { field, form: { touched, errors }, insetSubmit, helper, ...props } = this.props;
        const error = errors[field.name];
        const touch = touched[field.name];
        const inputClasses = props.className;
        let isError = touch && error && !helper ? true : false;
        let isHelper = helper ? true : false;
        
        var classes = classNames({
            "form-field__wrapper": true,
        }, inputClasses);

        var fieldClasses = classNames("form-text", "form-fancy-text", {
            "form-error__input": isError,
            "form-helper__success": isHelper
        });

        return(
            <div className={classes}>
                <div className="form-field__inner">
                    <div className="form-fancy-text__line--h form-fancy-text__line--top"></div>
                    <div className="form-fancy-text__line--h form-fancy-text__line--bottom"></div>
                    <div className="form-fancy-text__line--v form-fancy-text__line--left"></div>
                    
                    <input {...field} {...props} className={fieldClasses}/>
                    <div className="form-fancy-text__line--v form-fancy-text__line--middle"></div>
                    {insetSubmit && <button type="submit" className="form-text__submit form-fancy-text__submit">{insetSubmit}</button>}
                    <div className="form-fancy-text__line--v form-fancy-text__line--right"></div>
                </div>
                {touch && error && !helper && <div className="form-error">{error}</div>}
                {helper && <div className="form-helper">{helper}</div>}
            </div>
        );
    }
}

export { FancyInputText };