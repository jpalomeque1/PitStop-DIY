import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/SignUp.css";

const SignUp = () => {
    const navigate = useNavigate();

    return (
        <div className="signupPage">
            <div className="signupFormContainer">
                <h1 className="title">Sign Up</h1>
                <form className="form">
                    <div className="formGroup">
                        <label htmlFor="email" className="label">Email</label>
                        <input type="email" id="email" className="input" required />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="password" className="label">Password</label>
                        <input type="password" id="password" className="input" required />
                    </div>
                    <button type="submit" className="button">Sign Up</button>
                </form>
                <p className="loginText" onClick={() => navigate("/login")}>Back to Login</p>
            </div>
        </div>
    );
};

export default SignUp;