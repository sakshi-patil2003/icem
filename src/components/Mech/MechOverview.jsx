import React, { useEffect } from 'react';
// Import the images
import ProgramImage from '../../assets/images/3d-mech-org.jpg';
import HatImage from '../../assets/images/hat.png';  // Import the floating hat image
import GearImage1 from '../../assets/images/gear-a.png';  // Import the first floating gear image
import GearImage2 from '../../assets/images/gear-b.png';  // Import the second floating gear image

// Import AOS and its CSS
import AOS from 'aos';
import 'aos/dist/aos.css';

function MechOverview() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: 'ease-in-out', // Easing function for the animation
      once: true, // Whether the animation should happen only once
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8 px-8 md:px-16 py-3 md:py-6 poppins-regular">
      {/* Left Part: Heading and Paragraph */}
      <div className="flex-1" data-aos="fade-right">
        <h2 className="text-3xl font-bold text-[#ff5d12] mb-4 relative">
          {/* Floating Hat Above the "P" */}
          <img
            src={HatImage}
            alt="Hat"
            className="absolute left-[-25px] top-[-38px] w-16 h-16 animate-floating" // Apply floating animation class
          />
          Program Overview
        </h2>
        <p className="text-2xl text-gray-600 tracking-wide">
          The Mechanical Engineering Department was established in the academic year 2005. Currently, the department offers one undergraduate program, B.E in Mechanical Engineering, with an intake of 120. The department is equipped with state-of-the-art laboratories and has a dedicated faculty team with advanced degrees in mechanical engineering fields.
        </p>
      </div>

      {/* Right Part: Image */}
      <div className="flex-1 bg-white relative" data-aos="fade-left">  {/* Make container transparent */}
        <img
          src={ProgramImage} // Use the imported image
          alt="Iphone"
          className="w-full h-96 object-contain"
        />
        {/* Floating Gear 1 at the left top of the Program Image */}
        <img
          src={GearImage1} // First gear image
          alt="Gear 1"
          className="absolute left-[-10px] top-[-10px] w-28 h-28 animate-floating-gear"  // Position closer to top left
        />
        {/* Floating Gear 2 at the right middle of the Program Image */}
        <img
          src={GearImage2} // Second gear image
          alt="Gear 2"
          className="absolute right-[-10px] bottom-[-10px] w-28 h-28 animate-floating-gear"  // Position closer to right middle
        />
      </div>

      {/* Floating animation CSS */}
      <style>{`
        @keyframes floating {
          0% {
            transform: translateY(0); /* Start at original position */
          }
          50% {
            transform: translateY(-10px); /* Move up a bit */
          }
          100% {
            transform: translateY(0); /* Return to original position */
          }
        }

        .animate-floating {
          animation: floating 3s ease-in-out infinite; /* Apply floating animation */
        }

        @keyframes floating-gear {
          0% {
            transform: translateY(0); /* Start at original position */
          }
          50% {
            transform: translateY(-10px); /* Move up a bit more for gears */
          }
          100% {
            transform: translateY(0); /* Return to original position */
          }
        }

        .animate-floating-gear {
          animation: floating-gear 4s ease-in-out infinite; /* Apply floating animation to gears */
        }
      `}</style>
    </div>
  );
}

export default MechOverview;
