import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const signingUserOut=()=>{
    console.log("Signout button Clicked");
    signOut(auth).then(() => {
      // Sign-out successful.
      
      dispatch(removeUser());
      navigate("/");
    }).catch((error) => {
      // An error happened.
      dispatch(removeUser());
      navigate("/");
    });
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className='w-44' src="/Netflix_Logo.png" alt="logo"></img>
       
      
      {window.location.pathname !== "/" && (
        <div className='flex px-7 py-2 space-x-4'>
        <button className='text-white h-8 my-4 hover:text-red-700' onClick={signingUserOut}>
          (Signout)
          </button> 
          <img className='w-14 h-14 ' src="./UserLogo123.jpeg" alt="userLogo"></img>
          </div>)}
        
        
      
    </div>
  )
}

export default Header
