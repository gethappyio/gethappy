import React from "react";

const InputText = ({ field, form, ...props }) => (
   <div>
        <input {...field} {...props} />
   </div>
);

export { InputText };