import React from 'react'
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { removeApiKey, removeGPTMovieResult, toggleGptSearchView } from '../utils/gptSlice';

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
      dispatch(removeApiKey());
      dispatch(removeGPTMovieResult());
    }).catch((error) => {
      // An error happened.
      dispatch(removeUser());
      dispatch(removeApiKey());
      dispatch(removeGPTMovieResult());
    });
  }
  return (
    <div className="absolute w-screen  px-0 md:px-8 py-2 bg-gradient-to-b from-black z-10 flex  flex-row md:flex-row  justify-between ">
      <img className=' w-24 md:w-44 mx-0  h-16 md:h-[112px] mt-2 md:mt-0' src="/Netflix_Logo.png" alt="logo"></img>
       
      
      {window.location.pathname !== "/" && (
        <div className='flex px-7 py-2 space-x-4'>
         
          {showGptV ?<> 
           <p  className=' px-4 py-6 m-2  text-lg font-semibold typing text-white hidden lg:block'>Ask AI your next watch</p>
           <button 
          className='py-2 px-4 m-2 text-white hover:scale-110' onClick={handleGptSearch}>
            <img alt="GPT-logo" className='w-11 md:w-14 rounded-3xl '
             src="GPT-logo.jpg"/> 
          </button>
           </>
           :
           <button onClick={handleGptSearch}>
            <p  
            className='py-2  px-2 md:px-4 my-0 md:my-6  mr-1md:mr-4 hover:scale-110
            text-lg font-semibold  text-white typing
             h-12 text-center'>
              Go to Browse Page
              </p>
            </button>
            
          }
          

        <button className='text-white h-8 my-4 hover:text-red-700' onClick={signingUserOut}>
        <img className=' w-11 md:w-14  h-12 md:h-14 mb-1 -mt-1 md:-mt-0' src="./UserLogo123.jpeg" alt="userLogo"></img>
        Logout
          </button> 
         
          </div>)}
        
        
      
    </div>
  )
}

export default Header
