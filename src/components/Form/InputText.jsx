import React from "react";

const InputText = ({ field, form, ...rest }) => (
   <div>
      <input {...field} {...rest} />
   </div>
);

export { InputText };