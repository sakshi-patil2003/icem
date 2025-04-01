import React from "react";

function AdmissionsCTA() {
  return (
    <div className=" text-white py-12 px-6 text-center flex flex-col items-center justify-center">
      <h1 className="text-2xl md:text-4xl font-extrabold text-black mb-4">
        Searching for the Best AI & Data Science College in Pune?
      </h1>

      <p className="text-lg md:text-2xl font-medium text-black">
        Your search ends at <span className="text-[#41b9d0] font-semibold">ICEM!</span>
      </p>

      <button className="mt-6 bg-[#41b9d0] hover:bg-text-white font-semibold text-lg px-6 py-3 rounded-full shadow-md transition-transform transform hover:scale-105">
        Apply Now
      </button>
    </div>
  );
}

export default AdmissionsCTA;
