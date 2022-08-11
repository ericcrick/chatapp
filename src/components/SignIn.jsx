import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import React from 'react'
import { authentication } from '../firebase';

const googleSign = ()=> {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(authentication, provider)
}

export const SignIn = () => {

  return (
    <button className='flex justify-between items-center text-center text-blue-400' onClick={googleSign}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
      <h3 className='text-2xl'>Login</h3>
    </button>
  )
}
