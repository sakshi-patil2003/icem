import React, { useEffect } from 'react';
import { FaCalendarAlt } from 'react-icons/fa'; 
import { FaRegClock } from 'react-icons/fa';  
import { FaMoneyBillWave } from 'react-icons/fa'; 

// Import AOS for animations
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function CompPointers() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <div className="px-8 md:px-16 py-12 poppins-regular">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-16">
        {/* Card 1: Program Format */}
        <div
          className="bg-[#F6FBFF] p-6 shadow-lg  flex items-center justify-center" // Added justify-center here
          data-aos="fade-up" // AOS animation trigger
        >
          <div className="flex items-center justify-center mr-4 space-x-4"> {/* Added space-x-4 to create gap */}
            <FaCalendarAlt size={40} className="text-[#8BC5FF]" />
            <div className="text-center"> {/* Added text-center to center the text */}
              <h2>Program Format</h2>
              <p className="mt-2 text-2xl font-semibold">Offline</p>
            </div>
          </div>
        </div>

        {/* Card 2: Duration */}
        <div
          className="bg-[#F6FBFF] p-6 shadow-lg  flex items-center justify-center" // Added justify-center here
          data-aos="fade-up" // AOS animation trigger
        >
          <div className="flex items-center justify-center mr-4 space-x-4"> {/* Added space-x-4 to create gap */}
            <FaRegClock size={40} className="text-[#8BC5FF]" />
            <div className="text-center"> {/* Added text-center to center the text */}
              <h2>Duration</h2>
              <p className="mt-2 text-2xl font-semibold">4 Years</p>
            </div>
          </div>
        </div>

        {/* Card 3: Program Fees */}
        <div
          className="bg-[#F6FBFF] p-6 shadow-lg  flex items-center justify-center" // Added justify-center here
          data-aos="fade-up" // AOS animation trigger
        >
          <div className="flex items-center justify-center mr-4 space-x-4"> {/* Added space-x-4 to create gap */}
            <FaMoneyBillWave size={40} className="text-[#8BC5FF]" />
            <div className="text-center"> {/* Added text-center to center the text */}
              <h2>Program Fees</h2>
              <p className="mt-2 text-2xl font-semibold">Rs. 108000/-</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompPointers;
