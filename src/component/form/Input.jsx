import React from "react";
import './form.css'
const Input = ({ name, label, error, classC, icon, ...rest }) => {
  return (
    <div className="form-group ">
      <label htmlFor={name}>{label}</label>
      {/*  {...rest} is use to contenate other properties of the props object */}
      <div className="input-group">
        <input
          id={name}
          name={name}
          {...rest}
          className={`form-control ${classC}`}
          aria-describedby="textHelp"
          placeholder={`Input ${name}`}
        />

        <div className="">
          <img src={`${icon}`} alt="visual signup" className="iconPos" />
        </div>
      </div>
      {/* <small id="textHelp" className="form-text text-muted">We'll never share your username with anyone else.</small> */}

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
