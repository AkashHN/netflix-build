import React, { useState } from 'react'
import './LoginScreen.css';
import SignUpScreen from './SignUpScreen';

function LoginScreen() {

    const [signIn, setSignIn]=useState(false);
  return (
    <div className='loginScreen'>
        <div className='loginScreen__background'>
            <img className='loginScreen__logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt=""/>
            <button
            onClick={()=>{}} 
            className='loginScreen__button'>Sign In</button>

            <div className='loginScreen__gradient'/>

            <div className='loginScreen__body'>
                {signIn ? (
                    <SignUpScreen/>
                ) : (
                    <>
                    <h1>Unlimtied films, TV programmes and more.</h1>
                    <h2>watch anywhere, Cancel any time.</h2>
                    <h3>Ready to watch? Enter your email to
                        create or restart your membership.
                    </h3>
                    <div className='loginScreen__input'>
                        <form>
                            <input type="email"  value="Email address"/>
                            <button onClick={()=> setSignIn(true)}
                            className='loginScreen__getStarted'
                            type="">Get Started</button>
                        </form>
                        
                    </div>
                </>
                )}
                
            </div>
        </div>
    </div>
  )
}

export default LoginScreen