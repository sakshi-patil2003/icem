// src/components/MechApply.jsx
import React from "react";
import backgroundImage from "../../assets/images/plane.png"; // Make sure the path is correct

const MechApply = () => {
  return (
    <div
      className="bg-[#FF5722] py-10 text-center text-white mb-12 shadow-lg relative bg-contain bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Light gray overlay */}
      <div className="absolute inset-0 bg-orange-800 opacity-40 z-0"></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-semibold mb-6">How to Apply</h2>
        <p className="text-lg mb-6">
          Follow these simple steps to apply for the Mechanical Engineering
          program at ICEM College Pune:
        </p>
        <ol className="text-left max-w-lg mx-auto">
          <li className="text-lg">
            1. Fill out the online application form on our website.
          </li>
          <li className="text-lg">
            2. Submit the required documents (mark sheets, ID, etc.).
          </li>
          <li className="text-lg">
            3. Pay the application fee securely online.
          </li>
          <li className="text-lg">
            4. Attend the counseling and interview session.
          </li>
          <li className="text-lg">
            5. Confirm your seat and join ICEM College!
          </li>
        </ol>
        <button className="bg-white text-[#FF7043] py-3 px-8 rounded-full text-xl hover:bg-gray-200 transition-all mt-8">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default MechApply;
