import React from 'react'
import './SignUpScreen.css'

function SignUpScreen() {

    const register = (e)=>{
        e.preventDefault();
    }

    const signIn = (e) => {
        e.preventDefault();
    }

  return (
    <div className='signUpScreen'>
        <form>
            <h1>Sign In</h1>
            <input placeholder='Email' type="email"/>
            <input type="password" placeholder='Password'/>
            <button type="submit" onClick={signIn}>Sign In</button>
            <h4>
            <span className='signupScreen__gray'>
            New to Netsiflix?</span>
            <span className='signupScreen__link' onClick={register}>Sign Up now.</span>
            </h4>
        </form>
    </div>
  )
}

export default SignUpScreen