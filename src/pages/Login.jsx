import React from 'react'
import im from './images.jpeg'
function Login() {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Wells Chat</span>
            <span className='title'>Login</span>
            <form action="">
                <input type="email" placeholder='email' name="" id="" />
                <input type="password" placeholder='password' name="" id="" />
                <button>Sign in</button>
            </form>
            <p>You don't have an account? Register</p>
        </div>
        
        
    </div>
  )
}

export default Login