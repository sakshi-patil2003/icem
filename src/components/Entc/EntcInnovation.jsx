import React from "react";
import entc from '../../assets/images/ennovation.avif'

export default function InnovationBox() {
  return (
    <div className="flex flex-col md:flex-row items-center  rounded-lg shadow-lg p-4 mb-2 md:mb-8 mr-4 ml-4 md:px-16">
      {/* Left Side Image with Reduced Size */}
      <div className="w-full h-full md:w-1/3 flex justify-center">
        <img
          src={entc}
          alt="Innovation and Connectivity"
          className="w-full "
        />
      </div>

      {/* Right Side Content with Increased Text Size */}
      <div className="w-full md:w-2/3  md:pl-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#104552] mt-2 md:mt-0">
          Where Innovation Meets Connectivity!
        </h1>
        <p className="mt-4 text-sm md:text-base lg:text-xl text-[#104552] leading-relaxed">
          Ever wondered how your smartphone connects seamlessly across the globe? How autonomous vehicles communicate in
          real time? Or how AI-powered devices make decisions in a fraction of a second? 
          <strong> That’s the magic of Electronics & Telecommunication Engineering!</strong>
        </p>
        <p className="mt-4 text-sm md:text-base lg:text-xl text-[#104552] leading-relaxed">
          🌐 Discover the cutting-edge innovations that shape the connected world. At <strong>ICEM</strong>, we empower
          students for the future with practical training and real-world expertise!
        </p>
      </div>
    </div>
  );
}
