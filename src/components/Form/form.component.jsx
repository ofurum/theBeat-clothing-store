import React from "react";
import TextField from "@material-ui/core/TextField";
import "./form.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    {/* <input
      className="form-input"
      onChange={handleChange}
      {...otherProps}
    /> */}
   <TextField id="outlined-basic" label={label} variant="outlined" style={{width: '100%'}} onChange={handleChange} {...otherProps}/>
    {/* {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label `}
      >
        {label}
      </label>
    ) : null} */}
  </div>
);

export default FormInput;
