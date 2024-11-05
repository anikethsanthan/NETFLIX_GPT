import React from 'react';
import Header from "./Header";
import {useState,useRef} from "react";
import { checkValidData } from "../utils/validate";
// import { createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
// import {getAuth} from "firebase/auth";



const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);
  const [errorMessage,setErrorMessage]=useState(null);

  const toggleSignInForm=()=>{
   setIsSignInForm(!isSignInForm);
  };
  // const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);

  const handleButtonClick=()=>{

    const message= checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if(message) return;

  //   if(!isSignInForm){
  //     //signup Logic
  //     const auth = getAuth();
  //        createUserWithEmailAndPassword(
  //         auth,
  //        email.current.value, 
  //        password.current.value)
  //   .then((userCredential) => {
  //    // Signed up 
  //    const user = userCredential.user;
  //    console.log(user);
  //    })
  //   .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   setErrorMessage(errorCode+"+"+errorMessage);
  //   });

  //   }else{
  //     //sign in Logic
  //     const auth = getAuth();
  //     signInWithEmailAndPassword(auth,
  //       email.current.value, 
  //       password.current.value)
  //    .then((userCredential) => {
  //      // Signed in 
  //      const user = userCredential.user;
  //      console.log(user);
  //     })
  //    .catch((error) => {
  //      const errorCode = error.code;
  //      const errorMessage = error.message;
  //      setErrorMessage(errorCode+"+"+errorMessage);
  //     });

  //  }

  
  };

  return (
    <div>
      <Header/>

      <div className='absolute'>
        <img src="./Background_Img.jpg" alt="BackgroundImg"></img>
      </div>

      <form onSubmit={(e)=>e.preventDefault()}
      className=' w-96 h-auto absolute p-12 bg-black bg-opacity-80  my-44 mx-auto right-0 left-0 text-white rounded-lg'>
        <h1 className='font-bold text-3xl p-2 my-6'>{isSignInForm?  "Sign In":"Let's sign you up !"}</h1>
        {
          isSignInForm? null:
        
        <input 
        type="text" 
        placeholder=" Full name" 
        className='p-4 my-2 w-full  bg-transparent  border-2 border-indigo-500/50 rounded-lg'/> }
        <input 
        ref={email}
        type="text" 
        placeholder="Email Address" 
        className='p-4 my-2 w-full  bg-transparent  border-2 border-indigo-500/50 rounded-lg'/>
        <input 
        ref={password}
        type="password" 
        placeholder="Password" 
        className='p-4 my-2 w-full bg-transparent  border-2 border-indigo-500/50 rounded-lg'/>
        <p className='text-red-700'>{errorMessage}</p>
        <button 
        className='p-4  my-6 bg-red-700 w-full rounded-lg text-center' onClick={handleButtonClick}>
          {isSignInForm? "Sign In":"Sign Up"}
          </button>
          <p className='text-zinc-400 mb-3 text-center'>
            OR
            </p>
          
          <p className='text-zinc-400 cursor-pointer   hover:text-white' onClick={toggleSignInForm}>
            {isSignInForm? "New to Netflix ? Sign up Now. ":"Already a user ?  Sign In."}
          </p>
      </form>

    </div>
  )
}

export default Login;
