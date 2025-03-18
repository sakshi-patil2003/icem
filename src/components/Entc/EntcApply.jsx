import React from "react";
import backgroundImage from "../../assets/images/green-bge.jpg"; // Make sure the path is correct

const EntcApply = () => {
  return (
    <div
      className="bg-[#F1F5F9] py-10 px-8 md:px-16 text-center text-white mb-12 shadow-lg relative bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Light gray overlay */}
      {/* <div className="absolute inset-0 bg-[#026670] opacity-60 z-0"></div> */}

      <div className="relative z-10">
        <h2 className="text-3xl font-semibold text-[#ffffff] mb-6">How to Apply</h2>
        <p className="text-lg mb-6 text-gray-50">
          Follow these simple steps to apply for the Electronics and Telecommunication Engineering program at ICEM College Pune:
        </p>

        {/* Container for steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mx-auto">
          {/* Step 1 */}
          <div
            className="relative bg-[#026670] p-6 shadow-xl w-full"
            style={{ backgroundColor: "rgba(2, 102, 112, 0.6)" }}
          >
            <div
              className="absolute top-[-15px] left-[-15px] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "#026670" }}
            >
              1
            </div>
            <p className="text-lg text-white">Fill out the online application form on our website.</p>
          </div>

          {/* Step 2 */}
          <div
            className="relative bg-[#026670] p-6 shadow-xl w-full"
            style={{ backgroundColor: "rgba(2, 102, 112, 0.6)" }}
          >
            <div
              className="absolute top-[-15px] left-[-15px] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "#026670" }}
            >
              2
            </div>
            <p className="text-lg text-white">Submit the required documents (mark sheets, ID, etc.)</p>
          </div>

          {/* Step 3 */}
          <div
            className="relative bg-[#026670] p-6 shadow-xl w-full"
            style={{ backgroundColor: "rgba(2, 102, 112, 0.6)" }}
          >
            <div
              className="absolute top-[-15px] left-[-15px] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "#026670" }}
            >
              3
            </div>
            <p className="text-lg text-white">Pay the application fee securely online.</p>
          </div>

          {/* Step 4 */}
          <div
            className="relative bg-[#026670] p-6 shadow-xl w-full"
            style={{ backgroundColor: "rgba(2, 102, 112, 0.6)" }}
          >
            <div
              className="absolute top-[-15px] left-[-15px] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "#026670" }}
            >
              4
            </div>
            <p className="text-lg text-white">Attend the counseling and interview session.</p>
          </div>

          {/* Step 5 */}
          <div
            className="relative bg-[#026670] p-6 shadow-xl w-full"
            style={{ backgroundColor: "rgba(2, 102, 112, 0.6)" }}
          >
            <div
              className="absolute top-[-15px] left-[-15px] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "#026670" }}
            >
              5
            </div>
            <p className="text-lg text-white">Confirm your seat and join ICEM College!</p>
          </div>
        </div>

        <button className="bg-[#9FEDD7] text-[#026670] py-3 px-8 rounded-full text-xl hover:bg-[#A2F5E1] transition-all duration-300 ease-in-out mt-8 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#026670] focus:ring-opacity-50">
  Apply Now
</button>

      </div>
    </div>
  );
};

export default EntcApply;
