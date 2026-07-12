import "./App.css"
export default function App()
{
  return(
  <>
  <div className="container">
    <div className="card">
      <h1>Login Form</h1>
      <div className="buttons">
       <button id="log1">Login</button>
       <button id="sign">Signup</button>
      </div>
      <input type="email" name="" id="email" placeholder="Email Address"></input>
      <input  type="password" name="" id="pass" placeholder="Password" ></input>
      <a href="#">Forget password?</a>
      <button id="log">Login</button>
      <p>Not a member?<span id="diffcol">Signup now</span></p>

    </div>
  </div> 
  </>
  );
}
