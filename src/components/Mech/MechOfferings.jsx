import { FaDesktop, FaRobot, FaThermometerHalf, FaLeaf, FaCogs, FaBriefcase } from 'react-icons/fa';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS
import gearIcon from '../../assets/images/org-gear.png';  // Import the gear icon

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
      className="bg-[linear-gradient(#d9774f,_#f97316_51%,_#fb923c)] p-4 shadow-xl flex flex-col items-center justify-center text-center h-full relative rounded-xl z-5"
      data-aos="fade-up"
    >
      <FaDesktop size={50} className="text-white mb-4 icon z-5" />
      <p className="text-lg font-semibold text-white z-5">Advanced CAD/CAM Systems</p>
      {/* Gear Icon */}
      <img src={gearIcon} alt="Gear Icon" className="absolute top-[-20px] right-[-20px] w-12 h-12 rounded-full shadow-2xl z-20" />
    </div>

    {/* Cutting-edge Robotics & Automation */}
    <div
      className="bg-[linear-gradient(#d9774f,_#f97316_51%,_#fb923c)] p-4 shadow-xl flex flex-col items-center justify-center text-center h-full relative rounded-xl"
      data-aos="fade-up"
    >
      <FaRobot size={50} className="text-white mb-4 icon z-5" />
      <p className="text-lg font-semibold text-white z-5">Cutting-edge Robotics & Automation</p>
      {/* Gear Icon */}
      <img src={gearIcon} alt="Gear Icon" className="absolute top-[-20px] right-[-20px] w-12 h-12 rounded-full shadow-2xl z-20" />
    </div>

    {/* Thermal Engineering & HVAC Systems */}
    <div
      className="bg-[linear-gradient(#d9774f,_#f97316_51%,_#fb923c)] p-4 shadow-xl flex flex-col items-center justify-center text-center h-full relative rounded-xl"
      data-aos="fade-up"
    >
      <FaThermometerHalf size={50} className="text-white mb-4 icon z-5" />
      <p className="text-lg font-semibold text-white z-5">Thermal Engineering & HVAC Systems</p>
      {/* Gear Icon */}
      <img src={gearIcon} alt="Gear Icon" className="absolute top-[-20px] right-[-20px] w-12 h-12 rounded-full shadow-2xl z-20" />
    </div>

    {/* Sustainable Energy Solutions */}
    <div
      className="bg-[linear-gradient(#d9774f,_#f97316_51%,_#fb923c)] p-4 shadow-xl flex flex-col items-center justify-center text-center h-full relative rounded-xl"
      data-aos="fade-up"
    >
      <FaLeaf size={50} className="text-white mb-4 icon z-5" />
      <p className="text-lg font-semibold text-white z-5">Sustainable Energy Solutions</p>
      {/* Gear Icon */}
      <img src={gearIcon} alt="Gear Icon" className="absolute top-[-20px] right-[-20px] w-12 h-12 rounded-full shadow-2xl z-20" />
    </div>

    {/* Mechanical System Design & Prototyping */}
    <div
      className="bg-[linear-gradient(#d9774f,_#f97316_51%,_#fb923c)] p-4 shadow-xl flex flex-col items-center justify-center text-center h-full relative rounded-xl"
      data-aos="fade-up"
    >
      <FaCogs size={50} className="text-white mb-4 icon z-5" />
      <p className="text-lg font-semibold text-white z-5">Mechanical System Design & Prototyping</p>
      {/* Gear Icon */}
      <img src={gearIcon} alt="Gear Icon" className="absolute top-[-20px] right-[-20px] w-12 h-12 rounded-full shadow-2xl z-20" />
    </div>

    {/* Core Engineering Internships and Industrial Training */}
    <div
      className="bg-[linear-gradient(#d9774f,_#f97316_51%,_#fb923c)] p-4 shadow-xl flex flex-col items-center justify-center text-center h-full relative rounded-xl"
      data-aos="fade-up"
    >
      <FaBriefcase size={50} className="text-white mb-4 icon z-5" />
      <p className="text-lg font-semibold text-white z-5">Core Engineering Internships and Industrial Training</p>
      {/* Gear Icon */}
      <img src={gearIcon} alt="Gear Icon" className="absolute top-[-20px] right-[-20px] w-12 h-12 rounded-full shadow-2xl z-20" />
    </div>
  </div>
</div>

  );
}

export default MechOfferings;
