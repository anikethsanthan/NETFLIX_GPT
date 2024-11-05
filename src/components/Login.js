import React from 'react';
import Header from "./Header";
import {useState} from "react";

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);

  const toggleSignInForm=()=>{
   setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>

      <div className='absolute'>
        <img src="./Background_Img.jpg" alt="BackgroundImg"></img>
      </div>

      <form className=' w-96 h-auto absolute p-12 bg-black bg-opacity-80  my-56 mx-auto right-0 left-0 text-white rounded-lg'>
        <h1 className='font-bold text-3xl p-2 my-6'>{isSignInForm?  "Sign In":"Let's sign you up !"}</h1>
        {
          isSignInForm? null:
        
        <input 
        type="text" 
        placeholder=" Full name" 
        className='p-4 my-2 w-full  bg-transparent  border-2 border-indigo-500/50 rounded-lg'/> }
        <input 
        type="text" 
        placeholder="Email Address" 
        className='p-4 my-2 w-full  bg-transparent  border-2 border-indigo-500/50 rounded-lg'/>
        <input 
        type="password" 
        placeholder="Password" 
        className='p-4 my-2 w-full bg-transparent  border-2 border-indigo-500/50 rounded-lg'/>
        <button 
        className='p-4  my-6 bg-red-700 w-full rounded-lg text-center'>
          {isSignInForm? "Sign In":"Sign Up"}
          </button>
          <p className='text-zinc-400 mb-3 text-center'>OR</p>
          
          <p className='text-zinc-400 flex '>
            {isSignInForm? "New to Netflix ? ":"Already a user ? "}
            <p className='text-white cursor-pointer hover:scale-95' onClick={toggleSignInForm}>{isSignInForm?  " Sign up Now.":" Sign In."}</p>
          </p>
      </form>

    </div>
  )
}

export default Login
