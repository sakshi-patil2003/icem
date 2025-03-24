import { useEffect } from 'react';
import { FaLaptopCode } from 'react-icons/fa'; // Laptop code icon for IT
import { FaNetworkWired } from 'react-icons/fa'; // Network wired icon for IT
import { FaCloud } from 'react-icons/fa'; // Cloud icon for IT

// Import AOS for animations
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function ItPointers() {
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
          className="bg-[#e1f1fb] p-6 z-10 shadow-lg flex items-center justify-center"
          data-aos="fade-up" // AOS animation trigger
        >
          <div className="flex items-center justify-center mr-4 space-x-4">
            <FaLaptopCode size={40} className="text-[#001E5D]" />
            <div className="text-center">
              <h2 className="text-[#001E5D]">Program Format</h2>
              <p className="mt-2 text-2xl font-semibold text-[#001E5D]">Offline</p>
            </div>
          </div>
        </div>

        {/* Card 2: Duration */}
        <div
          className="bg-[#e1f1fb] p-6 z-10 shadow-lg flex items-center justify-center"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center mr-4 space-x-4">
            <FaNetworkWired size={40} className="text-[#001E5D]" />
            <div className="text-center">
              <h2 className="text-[#001E5D]">Duration</h2>
              <p className="mt-2 text-2xl font-semibold text-[#001E5D]">4 Years</p>
            </div>
          </div>
        </div>

        {/* Card 3: Program Fees */}
        <div
          className="bg-[#e1f1fb] p-6 z-10 shadow-lg flex items-center justify-center"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center mr-4 space-x-4">
            <FaCloud size={40} className="text-[#001E5D]" />
            <div className="text-center">
              <h2 className="text-[#001E5D]">Program Fees</h2>
              <p className="mt-2 text-2xl font-semibold text-[#001E5D]">Rs. 120000/-</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItPointers;
