import React from "react";
import "./styles/form-field.scss";
import "./styles/form-text.scss";


const InputText = ({ field, form, ...props }) => (
   <div className="form-field__wrapper">
        <input {...field} {...props} className="form-text"/>
   </div>
);

export { InputText };