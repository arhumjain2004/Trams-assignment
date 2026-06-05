import React from 'react'

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
      <h1 className="text-xl md:text-2xl font-semibold">
        Elementum
      </h1>

      <ul className="hidden lg:flex gap-8 text-sm">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Studio</li>
        <li className="cursor-pointer">Services</li>
        <li className="cursor-pointer">Contact</li>
        <li className="cursor-pointer">FAQs</li>
      </ul>

      <button className="block lg:hidden text-2xl">
        ☰
      </button>
    </nav>
  )
}

export default Navbar
