import React, {useState} from 'react';
import { Link , useHistory } from 'react-router-dom';
import './Login.css';
import  { auth } from './firebase';


function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SignIn = e => {
      e.preventDefault()
      auth 
          .signInWithEmailAndPassword(email, password)
          .then((auth)=>{
              history.push('/')
          })
          .catch(error => alert(error.message))

  }
  const register = e=>{
      e.preventDefault()
    auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            // It successfully register the new user with email and password 
            console.log(auth);
            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))

  }

    return (
        <div className = "login"> 
        <Link to = "/">
            <img alt = " " className = "login__logo" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"></img>
            </Link>  
            <div className = "login__container">
                <h1>Login</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type = "text" 
                    value = {email} 
                    onChange = {e=> setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" 
                    value = {password}
                    onChange = {e=> setPassword(e.target.value)}/>
                    <button type = "submit" onClick = {SignIn} className = "login__loginButton" >Login</button>
                </form>
                <p className = "login__loginData">By continuing, you agree to Amazon's Conditions of <br/>
                Use and Privacy Notice.</p>
                <button type = "submit" onClick = {register} className="login__registerButton">Create your Amazon Account</button>           
             </div>    
         </div>
    )
}

export default Login;