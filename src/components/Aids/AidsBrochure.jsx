import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import gearImage from '../../assets/images/tech-dots.jpg'; // Keep the same image for background

function AidsBrochure() {
  return (
    <div
      className="flex justify-between items-center bg-gradient-to-r from-[#0c3249] to-[#41b9d0] text-white shadow-lg h-48 px-8 md:px-16 poppins-regular relative"
      style={{
        backgroundImage: `url(${gearImage})`, // Use only one gear image for the background
        backgroundPosition: 'center', // Center the background image
        backgroundSize: 'cover', // Ensure the image doesn't stretch or repeat
      }}
    >
      <div className="w-full bg-[#0c3249] p-6 rounded-3xl flex justify-between items-center">
        <div className="max-w-2/3">
          <h2 className="text-2xl font-bold mb-4">Artificial Intelligence & Data Science</h2>
          <p className="text-lg text-gray-200">
            Explore cutting-edge developments in AI and Data Science, including machine learning, deep learning, and data-driven decision-making. Enhance your skills with expert-led content and hands-on projects.
          </p>
        </div>
        <div>
          <button className="bg-[#41b9d0] border-2 border-[#0c3249] text-white px-6 py-3 rounded-3xl hover:bg-[#1e5f76] transition duration-300 flex items-center space-x-2">
            <FontAwesomeIcon icon={faDownload} />
            <span>Download Brochure</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AidsBrochure;
