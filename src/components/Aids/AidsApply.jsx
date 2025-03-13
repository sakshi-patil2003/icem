import React from "react";
import backgroundImage from "../../assets/images/plane.png"; // Make sure the path is correct

const AidsApply = () => {
  return (
    <div
      className="bg-[#0c3249] py-10 px-8 md:px-16 text-center text-white mb-12 shadow-lg relative bg-contain bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Light gray overlay */}
      <div className="absolute inset-0 bg-[#0c3249] opacity-60 z-0"></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-semibold mb-6">How to Apply</h2>
        <p className="text-lg mb-6">
          Follow these simple steps to apply for the Mechanical Engineering
          program at ICEM College Pune:
        </p>

        {/* Container for steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mx-auto">
          {/* Step 1 */}
          <div
            className="relative bg-white p-6 shadow-xl w-full opacity-90"
            style={{ backgroundColor: "#41b9d0" }} // Changed to #41b9d0 (AIDS color palette)  
          >
            <div
              className="absolute top-[-15px] left-[-15px] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "#1e5f76" }} // Changed to #41b9d0 (AIDS color palette)
            >
              1
            </div>

            <p className="text-lg">Fill out the online application form on our website.</p>
          </div>

          {/* Step 2 */}
          <div
            className="relative bg-white p-6 shadow-xl w-full opacity-90"
            style={{ backgroundColor: "#41b9d0" }} // Changed to #41b9d0 (AIDS color palette)  
          >
            <div
              className="absolute top-[-15px] left-[-15px] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "#1e5f76" }} // Changed to #41b9d0 (AIDS color palette)
            >
              2
            </div>
            <p className="text-lg">Submit the required documents (mark sheets, ID, etc.)</p>
          </div>

          {/* Step 3 */}
          <div
            className="relative bg-white p-6 shadow-xl w-full opacity-90"
            style={{ backgroundColor: "#41b9d0" }} // Changed to #41b9d0 (AIDS color palette)  
          >
            <div
              className="absolute top-[-15px] left-[-15px] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "#1e5f76" }} // Changed to #41b9d0 (AIDS color palette)
            >
              3
            </div>
            <p className="text-lg">Pay the application fee securely online.</p>
          </div>

          {/* Step 4 */}
          <div
            className="relative bg-white p-6 shadow-xl w-full opacity-90"
            style={{ backgroundColor: "#41b9d0" }} // Changed to #41b9d0 (AIDS color palette)  
          >
            <div
              className="absolute top-[-15px] left-[-15px] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "#1e5f76" }} // Changed to #41b9d0 (AIDS color palette)
            >
              4
            </div>
            <p className="text-lg">Attend the counseling and interview session.</p>
          </div>

          {/* Step 5 */}
          <div
            className="relative bg-white p-6 shadow-xl w-full opacity-90"
            style={{ backgroundColor: "#41b9d0" }} // Changed to #41b9d0 (AIDS color palette)  
          >
            <div
              className="absolute top-[-15px] left-[-15px] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "#1e5f76" }} // Changed to #41b9d0 (AIDS color palette)
            >
              5
            </div>
            <p className="text-lg text-white">Confirm your seat and join ICEM College!</p>
          </div>
        </div>

        <button className="bg-white text-[#0c3249] py-3 px-8 rounded-full text-xl hover:bg-gray-200 transition-all mt-8">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default AidsApply;
