import React from 'react'
import im from './images.jpeg'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase';

function Register() {
  const handleSubmit = (e)=>{
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];




    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Wells Chat</span>
            <span className='title'>Register</span>
            <form onSubmit={handleSubmit} >
                <input type="text" placeholder='display name' name="" id="" />
                <input type="email" placeholder='email' name="" id="" />
                <input type="password" placeholder='password' name="" id="" />
                <input style={{display:"none"}} type="file" name="" id="file" />
                <label htmlFor="file"><img src={im} alt="yo" style={{width:'50px', borderRadius:'15px'}}/> Add an avatar</label>
                <button>Sign up</button>
            </form>
            <p>You do have an account? Login</p>
        </div>
        
        
    </div>
  )
}

export default Register