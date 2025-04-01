import React from 'react';

// Import images
import logo from '../../src/assets/ICEM-Logo.png';
import autonomousLogo from '../../src/assets/images/ICEM-Autonomous-logo.png';

function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-lg w-full">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-2 lg:px-2 md:px-16">
        
        {/* Left Logo */}
        <div className="p-2 flex-shrink-0 lg:px-4">
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto"
            />
          </a>
        </div>

        {/* Right Logo */}
        <div className="p-2 flex-shrink-0 lg:px-4 ml-auto">
          <a href="/">
            <img
              src={autonomousLogo}
              alt="Autonomous Logo"
              className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
