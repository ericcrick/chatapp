import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { authentication } from '../firebase';
import { SignIn } from './SignIn';

export const Navbar = () => {
  const [user] = useAuthState(authentication);
  const styles = {
    nav: `bg-gray-800 flex items-center justify-between h-4 p-4`,
    heading: `text-2xl text-blue-400`
  }
  return (
    <div className= {styles.nav}>
      <h1 className= {styles.heading}>Chat App</h1>
      <SignIn/>
    </div>
  )
}
