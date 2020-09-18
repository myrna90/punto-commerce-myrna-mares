import React from "react";

const Register = () => {
  return (
    <div className="principal-register">
      <div className="div-register">
        <i className="fas fa-truck fa-1x"></i>
        <p className="p-order">FreeShipping on Order above $199</p>
      </div>
      <div className="div-register-2">
        <i class="far fa-user fa-1x"></i>
        <p className="my-account">My Account</p>
      </div>
      <div className="div-register-3">
        <button className="btn btn-login">Login</button>
        <p className="cut">/</p>
        <button className="btn btn-register">Register</button>
      </div>
    </div>
  );
};

export default Register;
