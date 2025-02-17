import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const MechCareer = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage visibility

  const toggleSection = () => {
    setIsOpen(!isOpen); // Toggle the section visibility
  };

  return (
    <div className="w-full mx-auto px-8 md:px-16 py-4">
      {/* Header */}
      <div className="bg-[#FF5722] text-white p-6 shadow-lg mb-8 flex items-center justify-between cursor-pointer" onClick={toggleSection}>
        <h1 className="text-3xl font-extrabold tracking-wide">Career Opportunities</h1>
        {/* Down/Up Arrow Icon */}
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className="text-white text-3xl"
        />
      </div>

      {/* Toggle-able Content */}
      {isOpen && (
        <div className="transition-all duration-500">
          <div className="p-4  mx-auto bg-white rounded-lg shadow-md">
            {/* Description */}
            <div className="text-gray-800 mb-8">
              <p className="text-lg mb-6">
                Right Placements present opportunities for students to gain skills aligned with their specific subject or industry of choice. Indira College of Engineering Management specializes in offering Core placement opportunities to Core engineering branch students like mechanical combined with product-based placement as well. We enable students with the right resources which helps them make informed career choices. Indira College of Engineering Management is one of the Hallmark colleges of Engineering in Pune imparting the day-to-day required corporate skills combined with guaranteed placement opportunities. It is affiliated with SPPU (Savitribai Phule Pune University) guaranteeing placement opportunities to core engineering students, with robust remunerations.
              </p>
              <p className="font-semibold text-lg mb-6">
                Indira College of Engineering Management is currently associated with 750+ clients, offering job Opportunities for Mechanical Engineering placements in the Government Sector like:
              </p>
            </div>

            {/* Public Sector Units */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-red-50 p-6 rounded-lg shadow-md hover:bg-red-100 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                    <p className="text-gray-700">Public sector units (Coal India, BHEL, ONGC, NTPC)</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Opportunities Section */}
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Opportunities for Mechanical Engineering Placements in the Government Sector:
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-red-50 p-6 rounded-lg shadow-md hover:bg-red-100 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <p className="text-gray-700">Aerospace Industries</p>
                </div>
              </div>
              <div className="bg-red-50 p-6 rounded-lg shadow-md hover:bg-red-100 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <p className="text-gray-700">Automotive Industries</p>
                </div>
              </div>
              <div className="bg-red-50 p-6 rounded-lg shadow-md hover:bg-red-100 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <p className="text-gray-700">Construction & Building Sites</p>
                </div>
              </div>
            </div>

            {/* Footer or CTA Section */}
            <div className="mt-10 text-center">
              <button className="px-6 py-3 bg-[#FF5722] text-white rounded-full text-lg font-semibold hover:bg-[#FF7043] transition-all duration-300">
                Explore Opportunities & Apply Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MechCareer;
