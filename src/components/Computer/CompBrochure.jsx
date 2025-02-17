import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from '../../assets/images/brochure-bg.png';

function CompBrochure() {
  return (
    <div
      className="flex justify-between items-center bg-cover bg-center text-white shadow-lg h-48 px-8 md:px-16 poppins-regular"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full bg-blue-700 p-6 rounded-3xl flex justify-between items-center">
        <div className="max-w-2/3">
          <h2 className="text-2xl font-bold mb-4">Syllabus</h2>
          <p className="text-lg text-gray-200">Best-in-class content by leading trainers and industry leaders in the form of videos, real life case studies, projects and live-sessions.</p>
        </div>
        <div>
          <button className="bg-blue-900 border-2 border-blue-800 text-white px-6 py-3 rounded-3xl hover:bg-blue-800 transition duration-300 flex items-center space-x-2">
            <FontAwesomeIcon icon={faDownload} />
            <span>Download Brochure</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompBrochure;
