import React from 'react';


const Register = () => {

    return(
        <div className="principal-register">
            <div className="div-register">
                <p>FreeShipping on Order above $199</p>
            </div>
            <div className="div-register">
            <i class="far fa-user"></i>
            <p className="my-account">My Account</p>
            </div>
            <div className="div-register">
                <button className="btn btn-login">Login</button>
                <p>/</p>
                <button className="btn btn-register">Register</button>
            </div>
        </div>
    )
}

export default Register;