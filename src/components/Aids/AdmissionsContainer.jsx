import React from "react";

function AdmissionsContainer() {
  return (
    <div className="bg-[#0c3249] text-white py-4 px-6  shadow-lg text-center ">
      <h2 className="text-2xl md:text-3xl font-bold text-[#41b9d0] mb-3">
        Engineering Admissions 2025 are now open!
      </h2>
      <p className="text-lg text-gray-200">
        Step into the future with <span className="text-[#41b9d0] font-semibold">ICEM’s AI & Data Science</span> program and become a tech innovator!
      </p>
      <button className="bg-white text-[#0c3249] py-3 px-8 rounded-full text-xl font-semibold shadow-md hover:bg-gray-200 hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out mt-8">
  Apply Now
</button>

    </div>
  );
}

export default AdmissionsContainer;
