import React from "react";

const Login = () => {
    return (
        <div className="login-container">
            <div className="form-container">
                <form action="">
                    <div className="title">
                        <h2>Login</h2>
                        <div className="sub-title">Welcome back we missed you</div> 
                    </div> 
                    <div className="input-one-container">
                        <div className="">@</div>
                        <input type="text" />
                    </div> 
                    <div className="input-two-container">
                        <i className="fa-solid fa-lock"></i>
                        <input type="text" />
                        <i className="fa-solid fa-eye-slash"></i>
                    </div> 
                    <div className="">
                        <div className="">
                            <input type="checkbox" name="" id="" />
                            <div className="">Remember Me</div>
                        </div>
                        <div className="">Forgot your credentials?</div>
                    </div> 
                    <a href=""><div className="">Login to your Account</div></a> 
                    <div className="">Dont have an account? <span> Create an account </span></div> 
                </form>
            </div>
            
        </div>
    )
};

export default Login;
