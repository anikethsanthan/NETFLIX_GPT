import React from 'react'
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const showGptV=useSelector((store)=>store.gpt.showGptSearch);

  const handleGptSearch=()=>{
    
    dispatch(toggleGptSearchView());
  }
  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email,displayName} = user;
        dispatch (addUser({uid:uid, email:email, displayName:displayName}));
        navigate("/Browse");

      } else {
        dispatch (removeUser());
        navigate("/");
      }
    }) 
   return ()=>unsubscribe();
  },[]);

  const signingUserOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      
      dispatch(removeUser());
      
    }).catch((error) => {
      // An error happened.
      dispatch(removeUser());
      
    });
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className='w-44' src="/Netflix_Logo.png" alt="logo"></img>
       
      
      {window.location.pathname !== "/" && (
        <div className='flex px-7 py-2 space-x-4'>
         
          {showGptV ?<> 
           <p  className=' px-4 py-6 m-2  text-lg font-semibold typing text-white'>Ask AI your next watch</p>
           <button 
          className='py-2 px-4 m-2 text-white hover:scale-110' onClick={handleGptSearch}>
            <img alt="GPT-logo" className='w-14 rounded-3xl '
             src="GPT-logo.jpg"/> 
          </button>
           </>
           :
           <button onClick={handleGptSearch}>
            <p  
            className='py-2 px-4  my-6 mr-4 hover:scale-110
            text-lg font-semibold  text-white typing
             h-12 text-center'>
              Go to Browse Page
              </p>
            </button>
            
          }
          

        <button className='text-white h-8 my-4 hover:text-red-700' onClick={signingUserOut}>
        <img className='w-14 h-14 ' src="./UserLogo123.jpeg" alt="userLogo"></img>
        (Signout)
          </button> 
         
          </div>)}
        
        
      
    </div>
  )
}

export default Header
