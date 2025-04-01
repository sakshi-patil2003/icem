import React from "react";
import {
  FaTools,
  FaIndustry,
  FaCogs,
  FaLightbulb,
  FaHandsHelping,
  FaChartLine,
  FaNetworkWired,
  FaRobot
} from "react-icons/fa";
import std1 from '../../assets/images/alab.avif';
import std2 from '../../assets/images/entclab.avif';
import indira from '../../assets/images/indira.avif';

function EntcStudying() {
  return (
    <div className="flex flex-col md:flex-row px-4 md:px-8 lg:px-16 py-6 poppins-regular">
      {/* Left Side (Image Section with full height and 50% width) */}
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
        {/* First Image: Takes the full width and 50% height */}
        <div className="col-span-2 flex items-center aspect-square md:aspect-auto">
          <img src={indira} alt="Image 1" className="w-full h-full md:h-100 object-cover rounded-lg max-w-full" />
        </div>

        {/* Two Smaller Images with Adjusted Sizes */}
        <div className="col-span-2 flex gap-2">
          <div className="flex-1 aspect-square md:aspect-auto">
            <img src={std2} alt="Image 2" className="w-full h-full md:h-80 object-cover rounded-lg max-w-full" />
          </div>
          <div className="flex-1 aspect-square md:aspect-auto">
            <img src={std1} alt="Image 3" className="w-full h-full md:h-80 object-cover rounded-lg max-w-full" />
          </div>
        </div>
      </div>

      {/* Right Side (Text Content Section) */}
      <div className="w-full md:w-1/2 pl-0 md:pl-8 mt-8 md:mt-0">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-left mb-4 text-[#104552]">
          Grow. Connect. Lead with Indira!!  
        </h1>
        <p className="text-left text-sm md:text-base lg:text-lg mb-6 text-gray-700 ">
          At Indira College of Engineering & Management, our spacious, high-tech campus provides the perfect environment for innovation. 
          Nestled in lush greenery, the campus blends natural beauty with cutting-edge labs, making every moment of learning an experience in itself. 
          Our program equips students with practical expertise, live projects, and mentorship from top industry experts, ensuring they are industry-ready from day one.
        </p>

        {/* 2x3 Grid for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-3 gap-6 lg:gap-12">
          {/* Card 1 */}
          <div className="bg-[#9FEDD7] p-4 shadow-lg shadow-[#026670]/50 flex items-center rounded-lg">
            <FaTools className="text-[#026670] mr-4 text-3xl lg:text-4xl" />
            <span className="text-xs lg:text-sm text-[#006BB3]">
              25+ YEARS OF ELECTRICAL EXCELLENCE
            </span>
          </div>

          {/* Card 2 */}
          <div className="bg-[#9FEDD7] p-4 shadow-lg shadow-[#026670]/50 flex items-center rounded-lg">
            <FaIndustry className="text-[#026670] mr-4 text-3xl lg:text-4xl" />
            <span className="text-xs lg:text-sm text-[#006BB3]">400+ INDUSTRY PARTNERS</span>
          </div>

          {/* Card 3 */}
          <div className="bg-[#9FEDD7] p-4 shadow-lg shadow-[#026670]/50 flex items-center rounded-lg">
            <FaCogs className="text-[#026670] mr-4 text-3xl lg:text-4xl" />
            <span className="text-xs lg:text-sm text-[#006BB3]">INNOVATIVE RESEARCH & DEVELOPMENT</span>
          </div>

          {/* Card 4 */}
          <div className="bg-[#9FEDD7] p-4 shadow-lg shadow-[#026670]/50 flex items-center rounded-lg">
            <FaLightbulb className="text-[#026670] mr-4 text-3xl lg:text-4xl" />
            <span className="text-xs lg:text-sm text-[#006BB3]">
              EXPOSURE TO CUTTING-EDGE TECHNOLOGIES
            </span>
          </div>

          {/* Card 5 */}
          <div className="bg-[#9FEDD7] p-4 shadow-lg shadow-[#026670]/50 flex items-center rounded-lg">
            <FaHandsHelping className="text-[#026670] mr-4 text-3xl lg:text-4xl" />
            <span className="text-xs lg:text-sm text-[#006BB3]">HANDS-ON TRAINING IN LABS</span>
          </div>

          {/* Card 6 */}
          <div className="bg-[#9FEDD7] p-4 shadow-lg shadow-[#026670]/50 flex items-center rounded-lg">
            <FaChartLine className="text-[#026670] mr-4 text-3xl lg:text-4xl" />
            <span className="text-xs lg:text-sm text-[#006BB3]">EXCEPTIONAL GROWTH OPPORTUNITIES</span>
          </div>

          {/* Card 5 */}
          <div className="bg-[#9FEDD7] p-4 shadow-lg shadow-[#026670]/50 flex items-center rounded-lg">
            <FaNetworkWired className="text-[#026670] mr-4 text-3xl lg:text-4xl" />
            <span className="text-xs lg:text-sm text-[#006BB3]">ADVANCED NETWORKING LABS</span>
          </div>

          {/* Card 6 */}
          <div className="bg-[#9FEDD7] p-4 shadow-lg shadow-[#026670]/50 flex items-center rounded-lg">
            <FaRobot className="text-[#026670] mr-4 text-3xl lg:text-4xl" />
            <span className="text-xs lg:text-sm text-[#006BB3]">ROBOTICS & AUTOMATION TRAINING</span>
          </div>
            
        </div>
      </div>
    </div>
  );
}

export default EntcStudying;

