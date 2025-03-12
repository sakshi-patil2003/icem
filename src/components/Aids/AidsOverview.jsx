import { useEffect } from 'react';
// Import the images
import ProgramImage from '../../assets/images/robot-overview.png'; // Replace with the correct image path
import HatImage from '../../assets/images/hat.png';  // Import the floating hat image

// Import AOS and its CSS
import AOS from 'aos';
import 'aos/dist/aos.css';

function AidsOverview() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: 'ease-in-out', // Easing function for the animation
      once: true, // Whether the animation should happen only once
    });
  }, []);

  return (
    <div
      className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8 px-8 md:px-16  font-baskerville-regular"
      style={{
        background: 'linear-gradient(to right, #0c3249, #1e5f76, #41b9d0)',
      }}
    >
      {/* Right Part: Image (formerly left) */}
      <div className="flex-1 " data-aos="fade-left">
        <img
          src={ProgramImage} // Use the imported image
          alt="AIDS Program"
          className="w-full h-96 object-contain"
        />
      </div>

      {/* Left Part: Heading and Paragraph (formerly right) */}
      <div className="flex-1 " data-aos="fade-right pt-3 md:pt-6">
        <h2 className="text-3xl font-bold text-[#f4f4f4] mb-4 relative ">
          {/* Floating Hat Above the "P" */}
          <img
            src={HatImage}
            alt="Hat"
            className="absolute left-[-25px] top-[-38px] w-16 h-16 animate-floating" // Apply floating animation class
          />
          Program Overview
        </h2>
        <p className="text-2xl text-[#f4f4f4] tracking-wide">
          The AIDS Research and Development program focuses on empowering students with the knowledge and skills to innovate and lead in the field of medical research. The program offers a comprehensive curriculum, hands-on experiences, and collaborative projects to prepare students for global challenges in the AIDS healthcare industry. Join us to make a difference!
        </p>
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
      `}</style>
    </div>
  );
}

export default AidsOverview;
