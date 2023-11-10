import "./register.css"

export default function Register() {
  return (
    <div className="login">
    <div className="loginWrapper">
      <div className="loginLeft">
          <h3 className="loginLogo">Socialbook</h3>
          <span className="loginDesc">Connect with your Friends and the World around you on Socialbook.</span>
      </div>
      <div className="loginRight">
          <div className="loginBox">
              <label>Email:</label>
              <input placeholder="enter your email" type="Email" className="loginInput" />
              <label>Password:</label>
              <input placeholder="enter your Password" type="Password" className="loginInput" />
              
              <button className="loginButton">Sign up</button>
            
            <span className="loginForgot">Already have a account?</span>
            <button className="loginRegisterButton">Log in</button>
          </div>
      </div>
    </div>
  </div>
  )
}
