import { useEffect } from 'react';
import { gsap } from 'gsap';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS
import offer1Image from '../../assets/images/offer-6.jpg';  // Import the CAD/CAM image
import offer2Image from '../../assets/images/offer-4.jpg';  // Import the robotics image
import offer3Image from '../../assets/images/offer-3.jpg';  // Import the thermal engineering image
import offer4Image from '../../assets/images/offer-5.jpg';  // Import the energy solutions image
import offer5Image from '../../assets/images/offer-2.jpg';  // Import the prototyping image
import offer6Image from '../../assets/images/offer-1.jpg';  // Import the internships image

function MechOfferings() {
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

  return (
<div className="px-8 md:px-16 py-6 md:py-8 bg-[#ffffff] poppins-regular">
  <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-[#000]" data-aos="fade-up">
    Mechanical Engineering Offerings
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 md:gap-x-20 z-5">
    {/* Advanced CAD/CAM Systems */}
    <div
      className="bg-[linear-gradient(#d9774f,_#f97316_51%,_#fb923c)] shadow-xl flex flex-col items-center justify-center text-center h-full relative"
      data-aos="fade-up"
    >
      <img
        src={offer1Image}
        alt="CAD/CAM Systems"
        className="w-full h-48 object-cover mb-4"
      />
      <div className="text-center px-4 p-2">
        <h3 className="text-xl font-bold text-white mb-2">Advanced CAD/CAM Systems</h3>
        <p className="text-base text-white">State-of-the-art tools and techniques for precise design and manufacturing.</p>
      </div>
    </div>

    {/* Cutting-edge Robotics & Automation */}
    <div
      className="bg-[linear-gradient(#d9774f,_#f97316_51%,_#fb923c)] shadow-xl flex flex-col items-center justify-center text-center h-full relative"
      data-aos="fade-up"
    >
      <img
        src={offer2Image}
        alt="Robotics & Automation"
        className="w-full h-48 object-cover mb-4"
      />
      <div className="text-center px-4 p-2">
        <h3 className="text-xl font-bold text-white mb-2">Cutting-edge Robotics & Automation</h3>
        <p className="text-base text-white">Automated systems designed to streamline complex industrial processes.</p>
      </div>
    </div>

    {/* Thermal Engineering & HVAC Systems */}
    <div
      className="bg-[linear-gradient(#d9774f,_#f97316_51%,_#fb923c)] shadow-xl flex flex-col items-center justify-center text-center h-full relative"
      data-aos="fade-up"
    >
      <img
        src={offer3Image}
        alt="Thermal Engineering"
        className="w-full h-48 object-cover mb-4"
      />
      <div className="text-center px-4 p-2">
        <h3 className="text-xl font-bold text-white mb-2">Thermal Engineering & HVAC Systems</h3>
        <p className="text-base text-white">Innovative solutions for heating, ventilation, and air conditioning needs.</p>
      </div>
    </div>

    {/* Sustainable Energy Solutions */}
    <div
      className="bg-[linear-gradient(#d9774f,_#f97316_51%,_#fb923c)] shadow-xl flex flex-col items-center justify-center text-center h-full relative"
      data-aos="fade-up"
    >
      <img
        src={offer4Image}
        alt="Energy Solutions"
        className="w-full h-48 object-cover mb-4"
      />
      <div className="text-center px-4 p-2">
        <h3 className="text-xl font-bold text-white mb-2">Sustainable Energy Solutions</h3>
        <p className="text-base text-white">Harnessing renewable energy for efficient, eco-friendly solutions.</p>
      </div>
    </div>

    {/* Mechanical System Design & Prototyping */}
    <div
      className="bg-[linear-gradient(#d9774f,_#f97316_51%,_#fb923c)] shadow-xl flex flex-col items-center justify-center text-center h-full relative"
      data-aos="fade-up"
    >
      <img
        src={offer5Image}
        alt="System Design & Prototyping"
        className="w-full h-48 object-cover mb-4"
      />
      <div className="text-center px-4 p-2">
        <h3 className="text-xl font-bold text-white mb-2">Mechanical System Design & Prototyping</h3>
        <p className="text-base text-white">Designing and prototyping mechanical systems for real-world applications.</p>
      </div>
    </div>

    {/* Core Engineering Internships and Industrial Training */}
    <div
      className="bg-[linear-gradient(#d9774f,_#f97316_51%,_#fb923c)] shadow-xl flex flex-col items-center justify-center text-center h-full relative"
      data-aos="fade-up"
    >
      <img
        src={offer6Image}
        alt="Internships & Training"
        className="w-full h-48 object-cover mb-4"
      />
      <div className="text-center px-4 p-2">
        <h3 className="text-xl font-bold text-white mb-2">Core Engineering Internships and Industrial Training</h3>
        <p className="text-base text-white">Gain hands-on experience and industry exposure through internships and training.</p>
      </div>
    </div>
  </div>
</div>

  );
}

export default MechOfferings;
