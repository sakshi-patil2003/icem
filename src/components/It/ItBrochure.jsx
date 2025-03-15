import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import gearImage from '../../assets/images/gears.png'; // Import the gear image

function ItBrochure() {
  return (
    <div
      className="flex justify-between items-center bg-[#e6f2ff] text-white shadow-lg h-48 px-8 md:px-16 poppins-regular relative"
      style={{
        backgroundImage: `url(${gearImage}), url(${gearImage})`, // Use two instances of the same image
        backgroundPosition: 'left bottom, right top', // Position first at left bottom, second at right top
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain', // Ensure the image doesn't stretch or repeat
      }}
    >
      <div className="w-full bg-[#001E5D] p-6 rounded-3xl flex justify-between items-center">
        <div className="max-w-2/3">
          <h2 className="text-2xl font-bold mb-4 text-white">Syllabus</h2>
          <p className="text-lg text-white">
            Best-in-class content by leading trainers and industry leaders in the form of videos, real-life case studies, projects, and live sessions.
          </p>
        </div>
        <div>
          <button className="bg-[#001E5D] border-2 border-[#002b73] text-white px-6 py-3 rounded-3xl hover:bg-[#002b73] transition duration-300 flex items-center space-x-2">
            <FontAwesomeIcon icon={faDownload} />
            <span>Download Brochure</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItBrochure;
