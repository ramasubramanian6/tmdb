import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'


function NavBar() {
  return (
    
    <div className=' w-full h-[4.8rem] flex flex-row items-center bg-gray-900'>
      <div className= 'pl-4 md:pl-10 '>
        <Link  to="/"><img src={logo} className='rounded-2xl size-[3.5rem] md:size-[3.5rem] hover:scale-105 '/></Link>
      </div>
    <div className='space-x-2 md:space-x-5 font-semibold pl-5 text-yellow-500 '>
      <Link className='md:text-2xl text-[1rem] font-semibold hover:text-white hover:underline' to="/">HomePage </Link>
      <Link className='md:text-2xl  text-[1rem] font-semibold hover:text-white hover:underline'  to="/watchlist"> WatchList</Link>
    </div>
    </div>
  )
}

export default NavBar