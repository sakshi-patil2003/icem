import React from "react";
import careerBg from '../../assets/images/career-bg.avif';

function CareerProspects() {
  return (
    <div 
      className="w-full rounded-xl shadow-lg p-6 px-4 md:px-16 md:p-8 text-[#026670] bg-cover bg-center" 
      style={{ backgroundImage: `url(${careerBg})` }}
    >
      
      <h2 className="text-lg md:text-4xl font-bold text-center mb-4">
        Career Prospects & Placements
      </h2>
      
      <p className="text-base md:text-xl mb-4 leading-relaxed text-gray-700">
        With industries like Telecom, AI, IoT, Aerospace, and Embedded Systems booming, the demand for ENTC professionals is skyrocketing. Our placement cell connects students with top recruiters like Qualcomm, Ericsson, TCS, Infosys, and Bosch, ensuring you step into the industry with confidence!
      </p>
      
     
    </div>
  );
}

export default CareerProspects;