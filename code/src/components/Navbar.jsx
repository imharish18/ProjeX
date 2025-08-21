import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="text-white flex items-center justify-between p-2 shadow-md">
      
      {/* --- This is the part we are changing --- */}
      <a href="/" className="flex items-center gap-2 no-underline text-inherit">
        <img src={logo} alt='ProjeX Logo' className="h-10 m-1" />
        <span className="text-xl font-bold hover:[text-shadow:0_0_4px_rgba(255,255,255,0.7)]">ProjeX</span>
      </a>
      {/* ------------------------------------------- */}

      <div>
        <button className=" text-black px-4 hover:[text-shadow:0_0_8px_rgba(255,255,255,0.7)] py-2 rounded-full tracking-widest uppercase font-bold bg-transparent hover:text-white dark:text-neutral-200 transition duration-200">
          Log in
        </button>
        <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-4 hover:[text-shadow:0_0_8px_rgba(255,255,255,0.7)] py-1 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          Sign up
        </button>
      </div>

    </nav>
  )
}

export default Navbar;