import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faUserGraduate,
  faTrophy,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import Testimonials from "./CompTestimonials"; // Import Testimonials component
import CompApply from "./CompApply"; // Import the CompApply component

function ICEMLandingPage() {
  return (
    <div className="bg-[#F6FBFF] py-16  relative poppins-regular">
      <div className="px-8 md:px-16">


      {/* Program Highlights */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-semibold text-[#6095ff] mb-8">
          Why Choose Computer Engineering at ICEM College?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Card 1 */}
          <div className="bg-white p-8 shadow-xl  hover:shadow-2xl transition-all flex flex-col items-center">
            <div className="w-16 h-16 bg-[#ff6f61] text-white rounded-full flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faGraduationCap} className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-[#000000] mb-4">
              Top-notch Curriculum
            </h3>
            <p className="text-gray-600 text-center">
              Our Computer Engineering program offers a robust curriculum
              designed to prepare you for the future of technology. Learn from
              experts in the field and gain hands-on experience.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 shadow-xl  hover:shadow-2xl transition-all flex flex-col items-center">
            <div className="w-16 h-16 bg-[#ffbd59] text-white rounded-full flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faUserGraduate} className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-[#000000] mb-4">
              Experienced Faculty
            </h3>
            <p className="text-gray-600 text-center">
              Learn from experienced professors and industry experts who are
              passionate about educating the next generation of engineers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 shadow-xl  hover:shadow-2xl transition-all flex flex-col items-center">
            <div className="w-16 h-16 bg-[#4caf50] text-white rounded-full flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faTrophy} className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-[#000000] mb-4">
              Excellence in Innovation
            </h3>
            <p className="text-gray-600 text-center">
              ICEM is ranked among the top institutes for innovation in
              engineering. Our students regularly participate in national and
              international tech competitions.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 shadow-xl  hover:shadow-2xl transition-all flex flex-col items-center">
            <div className="w-16 h-16 bg-[#2196f3] text-white rounded-full flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faRocket} className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-[#000000] mb-4">
              Excellent Placements
            </h3>
            <p className="text-gray-600 text-center">
              Our Computer Engineering graduates have gone on to secure
              prestigious positions in top companies, with an outstanding
              placement rate year after year.
            </p>
          </div>
        </div>
      </div>
      </div>

      {/* Admission Process Section */}
      <CompApply /> {/* Use the CompApply component */}

      {/* Testimonials Section */}
      <Testimonials /> {/* Use the Testimonials component */}
    </div>
  );
}

export default ICEMLandingPage;
