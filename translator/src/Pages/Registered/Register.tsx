import React, { useEffect, useRef, useState } from "react";
import "./Register.scss";
import images from "../../assets/logo 1.svg";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
const Register = ()=>{
    const [email, setEmail] = useState("")
    const emailRef = useRef<HTMLInputElement>(null)
    const [password, setPassword] = useState("")
    const passwordRef = useRef<HTMLInputElement>(null)

    const handleStart = ()=>{
        if (emailRef.current?.value) {
            setEmail(emailRef.current.value);
        }
    }
    const handleFinish = ()=>{
        if (passwordRef.current?.value) {
            setPassword(passwordRef.current.value);
        }
    }
        useEffect(() => {
        document.title = 'Register';
      }, []);
    return(
      <>
<div className="register">
  <div className="top">
    <div className="wrapper">
      <img src={images} alt="logo" className="logo" />
      <a href="/LoginPage">
      <button className="loginButton">Sign-In</button>
      </a>
    </div>
  </div>

  <div className="container">
    <h3>Unlimited movies, TV shows, and more.</h3>
    <h4>Watch anywhere. Cancel anytime</h4>
    <p>
      Ready to watch? Enter your email to create or restart your membership
    </p>
    {!email ? (
  <div className="input">
    <input type="email" placeholder="Email address" ref={emailRef} />
    <button className="getStarted" onClick={handleStart}>
      <span> Get Started</span>
      <IoIosArrowForward className="foward"/>
    </button>
  </div>
) : (
  <form className="input">
    <input type="password" placeholder="Password" ref={passwordRef} />
    <button className="getStarted" onClick={handleFinish}>
      <span>Start Membership</span>
      <IoIosArrowForward className="foward"/>
    </button>
  </form>
)}
  </div>
</div>

</>


)
}

export default Register;