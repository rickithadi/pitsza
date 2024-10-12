import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (<div className="bg-black p-4 shadow-md z-60 flex" >
    <div className="container mx-auto flex justify-between items-center z-50">
      <Link href="/"
      >
        <Image
          src="/images/logo-removebg.png"
          width={100}
          height={100}
          alt="Picture of the author"
        /></Link>
      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          {/* Icon for the Hamburger menu */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <nav className="hidden md:flex md:space-x-6">

        <a href="#" className="text-white hover:underline">About Us</a>
        <a href="#" className="text-white hover:underline">Menu</a>
        <a href="#" className="text-white hover:underline">Contact</a>
      </nav>
    </div>
    {/* Mobile Dropdown Menu */}
    {
      isMenuOpen && (
        <div className="fixed inset-0 bg-black opacity-85 z-40 flex flex-col items-center justify-center pt-16 h-screen">

          <nav className="flex flex-col items-start p-4 space-y-2">
            <a href="#" className="text-white hover:underline">About Us</a>
            <a href="#" className="text-white hover:underline">Menu</a>
            <a href="#" className="text-white hover:underline">Contact</a>
          </nav>
        </div>
      )
    }
  </div>

  )
}

export default Header;
