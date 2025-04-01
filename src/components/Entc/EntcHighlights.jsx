import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faAward, faMedal, faCertificate } from '@fortawesome/free-solid-svg-icons';

// Import the image
import bgImage from '../../assets/images/highbg.jpg';

function EntcHighlights() {
  return (
    <div
      className="poppins-regular"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="px-4 md:px-16 py-4 md:py-6">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-8 poppins-bold text-[#026670]">
          ICEM Highlights
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {/* Card 1 */}
          <div className="bg-[#F6FBFF] p-4 md:p-6 shadow-lg text-left overflow-hidden">
            <div className="w-10 md:w-12 h-10 md:h-12 bg-[#024f40] text-white rounded-full flex items-center justify-center mb-2 md:mb-4">
              <FontAwesomeIcon icon={faTrophy} className="text-xl md:text-2xl" />
            </div>
            <p className="text-sm md:text-base text-gray-600 poppins-regular text-rust-700">
              Ranked 49th in Top 100 Private Engineering Institutes and Ranked 61st in Top 140 Engineering Institutes conducted by Times of India Engineering Colleges.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F6FBFF] p-4 md:p-6 shadow-lg text-left overflow-hidden">
            <div className="w-10 md:w-12 h-10 md:h-12 bg-[#024f40] text-white rounded-full flex items-center justify-center mb-2 md:mb-4">
              <FontAwesomeIcon icon={faAward} className="text-xl md:text-2xl" />
            </div>
            <p className="text-sm md:text-base text-gray-600 poppins-regular text-rust-700">
              Ranking Survey - 2019 Winners of SmartIndia Hackathon for consecutive three years organized by Ministry of HRD, AICTE in association with NASSCOM.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F6FBFF] p-4 md:p-6 shadow-lg text-left overflow-hidden">
            <div className="w-10 md:w-12 h-10 md:h-12 bg-[#024f40] text-white rounded-full flex items-center justify-center mb-2 md:mb-4">
              <FontAwesomeIcon icon={faMedal} className="text-xl md:text-2xl" />
            </div>
            <p className="text-sm md:text-base text-gray-600 poppins-regular text-rust-700">
              Received Outstanding Education Institute (West) Award by National Education Awards 2018.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#F6FBFF] p-4 md:p-6 shadow-lg text-left overflow-hidden">
            <div className="w-10 md:w-12 h-10 md:h-12 bg-[#024f40] text-white rounded-full flex items-center justify-center mb-2 md:mb-4">
              <FontAwesomeIcon icon={faCertificate} className="text-xl md:text-2xl" />
            </div>
            <p className="text-sm md:text-base text-gray-600 poppins-regular text-rust-700">
              ICEM has been accredited with ‘B++’ grade by National Accreditation and Assessment Council (NAAC).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EntcHighlights;
