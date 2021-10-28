import React from 'react'
import './login.css'

function Login() {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">My Project</h3>
                    <span className="loginDesc">This is a sample social network site</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="text" placeholder='Email' className="loginInput" />
                        <input type="text" placeholder='Password' className="loginInput" />
                        <button className="loginButton">Login</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create new account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
