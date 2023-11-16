
import { useContext,useRef } from "react";
import "./login.css"
import {loginCall} from "../../apiCalls";
import {AuthContext} from "../../context/AuthContext";




export default function Login() {

  const email = useRef();
  const password = useRef();
  const {user, isFetching , error ,dispatch} = useContext(AuthContext)




 const handleClick = (e)=>{
    
    e.preventDefault();
    loginCall({email:email.current.value,password:password.current.value}
    ,dispatch)
 };

 console.log(user);

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Socialbook</h3>
            <span className="loginDesc">Connect with your Friends and the World around you on Socialbook.</span>
        </div>
        <div className="loginRight">
            <form className="loginBox" onSubmit={handleClick}>
                <label>Email:</label>
                <input placeholder="enter your email"  type="Email" required className="loginInput" ref={email} />
                <label>Password:</label>
                <input placeholder="enter your Password" type="password" required minLength="6" className="loginInput" ref={password}/>
                
                <button className="loginButton" type="submit" disabled={isFetching}>{isFetching ? ("loading..") : ("Log In")}</button>
              
              <span className="loginForgot">Forgot Password?</span>
              <button className="loginRegisterButton">
              {isFetching ? ("loading..") :( "Sign Up")}
                
              </button>
            </form>
        </div>
      </div>
    </div>
  )
}



