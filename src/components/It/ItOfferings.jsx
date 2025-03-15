import { useEffect } from 'react';
import { gsap } from 'gsap';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS
import offer1Image from '../../assets/images/it-city.jpg';  // Import the existing image 1
import offer2Image from '../../assets/images/Cloud Services & Virtualization.jpg';  // Import the existing image 2
import offer3Image from '../../assets/images/IT Security & Risk Management.jpg';  // Import the existing image 3
import offer4Image from '../../assets/images/Network Administration.jpg';  // Import the existing image 4
import offer5Image from '../../assets/images/Database Administration.jpg';  // Import the existing image 5
import offer6Image from '../../assets/images/IT Support & Services.jpg';  // Import the existing image 6
import techDots from '../../assets/images/circuit-dots.png';  // Import the tech-dots PNG image
import technologyImage from '../../assets/images/technology-word.jpg'; // Example image to apply inside the word "Technology"

function ItOfferings() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const elements = document.querySelectorAll('.circle');
    const icons = document.querySelectorAll('.icon');

    elements.forEach((circle, index) => {
      const icon = icons[index];

      gsap.set(circle, { opacity: 0, x: -50 });
      gsap.set(icon, { rotationY: 180 });

      circle.parentElement.addEventListener('mouseenter', () => {
        gsap.to(circle, { opacity: 1, x: 0, duration: 0.3 });
        gsap.to(icon, { rotationY: 0, duration: 0.3 });
      });

      circle.parentElement.addEventListener('mouseleave', () => {
        gsap.to(circle, { opacity: 0, x: -50, duration: 0.3 });
        gsap.to(icon, { rotationY: 180, duration: 0.3 });
      });
    });
  }, []);

  // Inline styles for the "Technology" text effect
  const techStyle = {
    backgroundImage: `url(${technologyImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'transparent',
    fontWeight: 'bold',
    WebkitBackgroundClip: 'text',  // for Safari
    backgroundClip: 'text',
  };

  return (
    <div className="px-8 md:px-16 py-6 md:py-8 bg-[#ffffff] poppins-regular relative overflow-hidden box-border">
      {/* Tech Dots Image */}
      <img
        src={techDots}
        alt="Tech Dots"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/2 object-contain"
      />

      <h2 className="text-2xl md:text-5xl font-bold text-center mb-8 text-[#001E5D]" data-aos="fade-up">
        <span className="technology-text">
          Information <span style={techStyle}>Technology</span> Offerings
        </span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 md:gap-x-20 z-5 justify-center">
        {/* IT Program 1: IT Infrastructure Management */}
        <div
          className="bg-[#001E5D] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer1Image}
            alt="IT Infrastructure Management"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl font-bold text-white mb-2">IT Infrastructure Management</h3>
            <p className="text-base text-white">Manage and optimize IT infrastructure to ensure smooth operations of network systems, servers, and hardware.</p>
          </div>
        </div>

        {/* IT Program 2: Cloud Services & Virtualization */}
        <div
          className="bg-[#001E5D] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer2Image}
            alt="Cloud Services & Virtualization"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl font-bold text-white mb-2">Cloud Services & Virtualization</h3>
            <p className="text-base text-white">Leverage cloud platforms for scalable, secure, and cost-efficient IT solutions. Virtualization technologies for optimized computing.</p>
          </div>
        </div>

        {/* IT Program 3: IT Security & Risk Management */}
        <div
          className="bg-[#001E5D] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer3Image}
            alt="IT Security & Risk Management"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl font-bold text-white mb-2">IT Security & Risk Management</h3>
            <p className="text-base text-white">Protect IT assets from cyber threats and mitigate risks through effective security measures and policies.</p>
          </div>
        </div>

        {/* IT Program 4: Network Administration */}
        <div
          className="bg-[#001E5D] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer4Image}
            alt="Network Administration"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl font-bold text-white mb-2">Network Administration</h3>
            <p className="text-base text-white">Design, implement, and maintain robust network infrastructures to ensure connectivity and performance.</p>
          </div>
        </div>

        {/* IT Program 5: Database Administration */}
        <div
          className="bg-[#001E5D] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer5Image}
            alt="Database Administration"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl font-bold text-white mb-2">Database Administration</h3>
            <p className="text-base text-white">Manage and maintain databases for storing, retrieving, and processing data efficiently and securely.</p>
          </div>
        </div>

        {/* IT Program 6: IT Support & Services */}
        <div
          className="bg-[#001E5D] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer6Image}
            alt="IT Support & Services"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl font-bold text-white mb-2">IT Support & Services</h3>
            <p className="text-base text-white">Provide technical support and services for troubleshooting, maintenance, and software updates in IT environments.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItOfferings;
