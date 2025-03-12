import { useEffect } from 'react';
import { FaCog } from 'react-icons/fa';  // Mechanical cog icon
import { FaTools } from 'react-icons/fa'; // Tools icon
import { FaIndustry } from 'react-icons/fa'; // Factory icon

// Import AOS for animations
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function AidsPointers() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <div className="px-8 md:px-16 py-12 font-baskerville-regular">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-16">
        {/* Card 1: Program Format */}
        <div
          className="bg-[#0c3249] p-6 z-10 shadow-lg flex items-center justify-center rounded-lg"
          data-aos="fade-up" // AOS animation trigger
          style={{ backgroundColor: '#0c3249' }}
        >
          <div className="flex items-center justify-center mr-4 space-x-4">
            <FaCog size={40} className="text-[#41b9d0]" />
            <div className="text-center text-white">
              <h2 className="text-2xl font-semibold">Program Format</h2>
              <p className="mt-2 text-xl font-light">Offline</p>
            </div>
          </div>
        </div>

        {/* Card 2: Duration */}
        <div
          className="bg-[#1e5f76] p-6 z-10 shadow-lg flex items-center justify-center rounded-lg"
          data-aos="fade-up"
          style={{ backgroundColor: '#1e5f76' }}
        >
          <div className="flex items-center justify-center mr-4 space-x-4">
            <FaTools size={40} className="text-[#41b9d0]" />
            <div className="text-center text-white">
              <h2 className="text-2xl font-semibold">Duration</h2>
              <p className="mt-2 text-xl font-light">4 Years</p>
            </div>
          </div>
        </div>

        {/* Card 3: Program Fees */}
        <div
          className="bg-[#41b9d0] p-6 z-10 shadow-lg flex items-center justify-center rounded-lg"
          data-aos="fade-up"
          style={{ backgroundColor: '#41b9d0' }}
        >
          <div className="flex items-center justify-center mr-4 space-x-4">
            <FaIndustry size={40} className="text-[#0c3249]" />
            <div className="text-center text-white">
              <h2 className="text-2xl font-semibold">Program Fees</h2>
              <p className="mt-2 text-xl font-light">Rs. 108000/-</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AidsPointers;
