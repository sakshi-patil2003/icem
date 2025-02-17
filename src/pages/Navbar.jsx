import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-900  shadow-lg w-full">
      <div className=" mx-auto flex items-center justify-between px-2 md:px-16">
        {/* Logo */}
        <div className='p-2'>
          <a href="/">
            <img src="https://indiraicem.ac.in/assets/images/ICEM-Logo.png" alt="Logo" className="h-auto max-w-xs md:max-w-xs" />
          </a>
        </div>

      
      </div>
    </nav>
  );
}

export default Navbar;
