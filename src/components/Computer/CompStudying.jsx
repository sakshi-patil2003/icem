import React, { useEffect } from 'react';
import { FaStar, FaBuilding, FaUsers, FaLaptop, FaGraduationCap, FaChartLine } from 'react-icons/fa'; // Added FaChartLine for the new card icon
import MyImage from '../../assets/images/repairing.webp'; // Import your PNG image
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

function CompStudying() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Animation easing type
      once: true, // Animate only once when scrolling into view
    });
  }, []);

  return (
    <div className="flex px-8 md:px-16 py-6 poppins-regular">
      {/* 70% Left Side */}
      <div className="w-[70%] pr-8" data-aos="fade-right">
        <h1 className="text-4xl font-semibold text-left mb-4">Studying with Indira College of</h1>
        <h1 className="text-4xl font-extralight text-left text-[#0080FF] mb-6">Engineering & Management</h1>
        <p className="text-left text-lg mb-6" data-aos="fade-up">
          Indira College of Engineering & Management offers a robust academic environment, blending advanced 
          theoretical knowledge with practical applications. We provide our students with opportunities to excel 
          both in academics and in real-world industry settings.
        </p>

        {/* 2x3 Grid for Cards */}
        <div className="grid grid-cols-2 grid-rows-3 gap-12">
          {/* Card 1 */}
          <div className="bg-white p-4 shadow-lg shadow-blue-500/50 flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex items-center">
              <FaStar className="text-yellow-500 mr-4 text-4xl" /> 
              <span className="text-sm">15+ YEARS OF ACADEMIC EXCELLENCE</span>
            </span>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-4 shadow-lg shadow-blue-500/50 flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex items-center">
              <FaUsers className="text-blue-500 mr-4 text-4xl" /> 
              <span className="text-sm">350+ LEADING RECRUITERS</span>
            </span>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-4 shadow-lg shadow-blue-500/50 flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex items-center">
              <FaBuilding className="text-blue-500 mr-4 text-4xl" /> 
              <span className="text-sm">INDIRA STUDENT DEVELOPMENT PROGRAM</span>
            </span>
          </div>
          {/* Card 4 */}
          <div className="bg-white p-4 shadow-lg shadow-blue-500/50 flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex items-center">
              <FaLaptop className="text-blue-500 mr-4 text-4xl" /> 
              <span className="text-sm">14 LAKHS HIGHEST PACKAGE OFFERED</span>
            </span>
          </div>
          {/* Card 5 */}
          <div className="bg-white p-4 shadow-lg shadow-blue-500/50 flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex items-center">
              <FaGraduationCap className="text-green-500 mr-4 text-4xl" /> 
              <span className="text-sm">STATE OF THE ART INFRASTRUCTURE</span>
            </span>
          </div>
          {/* Card 6 */}
          <div className="bg-white p-4 shadow-lg shadow-blue-500/50 flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex items-center">
              <FaChartLine className="text-orange-500 mr-4 text-4xl" /> {/* New Icon */}
              <span className="text-sm">EXCEPTIONAL GROWTH OPPORTUNITIES</span> {/* New Text */}
            </span>
          </div>
        </div>
      </div>

      {/* 30% Right Side */}
      <div className="w-[30%]" data-aos="fade-left">
        <img src={MyImage} alt="Indira College Image" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
}

export default CompStudying;
