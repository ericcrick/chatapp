import React, { Component } from 'react';
import { Navbar } from './components/Navbar';
export default function App() {
  const styles = {
    appContainer : 'max-w-[720px] mx-auto text-center',
    sectionContainer : 'flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative'
  }
  return (
    <div className= { styles.appContainer}>
      <section className= {styles.sectionContainer}>
        <Navbar/>
      </section>
    </div>
  )
}
