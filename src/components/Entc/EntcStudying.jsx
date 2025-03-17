import React from "react";
import {
  FaTools,
  FaIndustry,
  FaCogs,
  FaLightbulb,
  FaHandsHelping,
  FaChartLine,
} from "react-icons/fa";
import MyImage from "../../assets/images/entc-male-c.jpg";  // Replace with appropriate image
import Image1 from "../../assets/images/entc-male-a.jpg";  // Replace with appropriate image
import Image2 from "../../assets/images/entc-male-b.jpg";  // Replace with appropriate image

function EntcStudying() {
  return (
    <div className="flex px-8 md:px-16 py-6 poppins-regular">
      {/* Left Side (Image Section with full height and 50% width) */}
      <div className="w-1/2 grid grid-cols-2 gap-4">
        {/* First Column: One Row with One Image */}
        <div className="col-span-1 h-full flex flex-col justify-center">
          <img
            src={MyImage}
            alt="Image 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Second Column: Two Rows with Two Images */}
        <div className="col-span-1 grid grid-rows-2 gap-2 h-full">
          <div className="row-span-1 h-full">
            <img
              src={Image1}
              alt="Image 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="row-span-1 h-full">
            <img
              src={Image2}
              alt="Image 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right Side (Updated Text Content Section) */}
      <div className="w-[50%] pl-8">
        <h1 className="text-4xl font-semibold text-left mb-4 text-[#000000]">
          Studying with Indira College of
        </h1>
        <h1 className="text-4xl font-extralight text-left text-[#026670] mb-6">
          Electrical & Electronics Engineering
        </h1>
        <p className="text-left text-lg mb-6">
          Indira College of Engineering & Management offers a comprehensive
          Electrical & Electronics Engineering program that combines foundational
          theoretical knowledge with hands-on experience. Our students gain exposure
          to state-of-the-art technologies, industrial practices, and expert mentoring,
          preparing them for a rewarding career in the electronics and electrical field.
        </p>

        {/* 2x3 Grid for Cards */}
        <div className="grid grid-cols-2 grid-rows-3 gap-12">
          {/* Card 1 */}
          <div className="bg-[#9FEDD7] p-4 shadow-lg shadow-[#026670]/50 flex justify-between items-center rounded-lg">
            <span className="flex items-center">
              <FaTools className="text-[#026670] mr-4 text-4xl" />
              <span className="text-sm text-[#006BB3]">
                25+ YEARS OF ELECTRICAL EXCELLENCE
              </span>
            </span>
          </div>
          {/* Card 2 */}
          <div className="bg-[#9FEDD7] p-4 shadow-lg shadow-[#026670]/50 flex justify-between items-center rounded-lg">
            <span className="flex items-center">
              <FaIndustry className="text-[#026670] mr-4 text-4xl" />
              <span className="text-sm text-[#006BB3]">400+ INDUSTRY PARTNERS</span>
            </span>
          </div>
          {/* Card 3 */}
          <div className="bg-[#9FEDD7] p-4 shadow-lg shadow-[#026670]/50 flex justify-between items-center rounded-lg">
            <span className="flex items-center">
              <FaCogs className="text-[#026670] mr-4 text-4xl" />
              <span className="text-sm text-[#006BB3]">INNOVATIVE RESEARCH & DEVELOPMENT</span>
            </span>
          </div>
          {/* Card 4 */}
          <div className="bg-[#9FEDD7] p-4 shadow-lg shadow-[#026670]/50 flex justify-between items-center rounded-lg">
            <span className="flex items-center">
              <FaLightbulb className="text-[#026670] mr-4 text-4xl" />
              <span className="text-sm text-[#006BB3]">
                EXPOSURE TO CUTTING-EDGE TECHNOLOGIES
              </span>
            </span>
          </div>
          {/* Card 5 */}
          <div className="bg-[#9FEDD7] p-4 shadow-lg shadow-[#026670]/50 flex justify-between items-center rounded-lg">
            <span className="flex items-center">
              <FaHandsHelping className="text-[#026670] mr-4 text-4xl" />
              <span className="text-sm text-[#006BB3]">HANDS-ON TRAINING IN LABS</span>
            </span>
          </div>
          {/* Card 6 */}
          <div className="bg-[#9FEDD7] p-4 shadow-lg shadow-[#026670]/50 flex justify-between items-center rounded-lg">
            <span className="flex items-center">
              <FaChartLine className="text-[#026670] mr-4 text-4xl" />
              <span className="text-sm text-[#006BB3]">EXCEPTIONAL GROWTH OPPORTUNITIES</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EntcStudying;
