import React, { useEffect } from "react";
import "./LoginPage.scss"
import logo from "./logo 1.svg"
import { Link } from "react-router-dom";
import backgroundPic from "../LoginPage/netflix.png"
const LoginPage = ()=>{
        useEffect(() => {
        document.title = 'Login';
      }, []);
    return(
    <><div className="login">
            <div className="top">
                <div className="wrapper">
                    <img src={logo} alt="logo" className="logo" />
                </div>
            </div>
            <div className="container">
                <form action="">
                    <h2>SIGN IN</h2>
                    <br />
                    <input type="email" placeholder="Email or phone number" />
                    <br />
                    <input type="password" placeholder="Password" />
                    <br />
                    <Link to="/Profile">
                        <button className="loginButton">Sign In</button>
                    </Link>
                    <br />
                    <p>OR</p>
                    <br />
                    <button className="loginButton">Use a Sign-in code</button>
                    <br />
                    <p><a href="#">Forgot your password</a></p>
                    <br />
                    <div className="checkbox-container">
                        <input type="checkbox" name="" id="" />
                        <p className="checkbox-label">Remember me</p>
                    </div>
                    <br />
                    <span>New to Netflix? <strong> <a href="#">Register now</a></strong></span>
                    <br />
                    <small>
                        This page is protected by google reCAPTCHA to ensure youre not a
                        bot. <strong>Learn more</strong>.
                    </small>
                </form>
            </div>
        </div>
        <section>
            <div className="upperPart">
                <p>Questions?</p> <small>Contact Us!</small>
            </div>
            <div className="parent">
                <div className="info"> 
                    <a href="#">FAQ</a>
                    <br />
                    <br />
                    <a href="#">Privacy</a>
                </div>
                
              <div className="info">    
                <a href="#">Cookies</a>
              </div>
              <div className="info"> 
                <a href="#">Help Center</a>
              </div>
              <div className="info"> 
                <a href="#">Cooperate info</a>
              </div>
              <div className="info">
                <a href="#">Terms of use</a>
              </div>
            </div>
        </section>
        </>

    )
}

export default LoginPage
