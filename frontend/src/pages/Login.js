import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Login.css";

const LoginForm = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/Account"); // Navigate without authentication
    };

    return (
        <div className="loginPage">
            <div className="loginFormContainer">
                <div className="logoContainer">
                    <img src="/Logo.png" alt="Logo" className="logo" />
                </div>
                <h1 className="title">Login</h1>
                <form className="form" onSubmit={handleLogin}>
                    <div className="formGroup">
                        <label htmlFor="username" className="label">Email</label>
                        <input type="text" id="username" name="username" className="input" required />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="password" className="label">Password</label>
                        <input type="password" id="password" name="password" className="input" required />
                    </div>
                    <button type="submit" className="button">Login</button>
                </form>
                <p className="signupText" onClick={() => navigate("/SignUp")}>Sign Up</p>
            </div>
        </div>
    );
};

export default LoginForm;