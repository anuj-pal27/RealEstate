import React from 'react'
import { FaMapMarkerAlt,FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <header className='bg-slate-200'> 
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap '>
            <span className='text-primary'>Home</span>
            <span className=''>Listing</span>
            <span className='mt-1 ml-1 text-primary'><FaMapMarkerAlt /></span>
        </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-full flex items-center'>
            <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
            <FaSearch className='text-slate-600' />

        </form>
    <ul className='flex gap-4 '>
        <Link to='/'>
        <li className='hidden sm:inline hover:underline'>Home</li>
        </Link>
        <Link to='/about'>
        <li className='hover:underline'>About</li></Link>
        <Link to='/signin'>
        <li className='hover:underline'>SignIn</li>
        </Link>
    </ul>
        </div>
    </header>
  )
}
