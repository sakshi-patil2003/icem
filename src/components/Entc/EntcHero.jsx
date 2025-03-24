import React from 'react';
import bgImage from '../../assets/images/entc-bg.jpg'; // Adjust the path to your background image

function EntcHero() {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          transform: 'rotate(180deg)', // Apply rotation only to the background
          transformOrigin: 'center', // Make sure the rotation is centered
        }}
      ></div>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div> {/* Increased opacity of black overlay for better contrast */}

      {/* Content (Form and Heading) */}
      <div className="relative z-10 flex justify-between h-full">

        {/* Left side: Heading (Aligned to Top) */}
        <div className="w-1/2 flex flex-col items-start pt-10">
          <h1 className="text-5xl text-white text-left pl-10 leading-normal">
            Shape the Future of Technology with <span className='text-[#9FEDD7]'>Electronics and Telecommunication Engineering</span> at ICEM
          </h1>
          <p className="text-3xl text-white pl-10 mt-8 leading-10">
            Advanced labs, expert faculty, and exceptional career opportunities await you.
          </p>
        </div>

        {/* Right side: Form (Vertically Centered) */}
        <div className="w-1/2 flex justify-center items-center">
          <div
            className="p-6 max-w-md w-full shadow-md rounded-lg"
            style={{ backgroundColor: "rgba(2, 103, 112, 0.7)" }} // Applying a more opaque deep teal background
          >
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  id="name"
                  className="w-full p-1.5 bg-white text-black rounded border border-[#374151] focus:outline-none focus:ring-2 focus:ring-[#374151]"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  className="w-full p-1.5 bg-white text-black rounded border border-[#374151] focus:outline-none focus:ring-2 focus:ring-[#374151]"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  id="mobile"
                  className="w-full p-1.5 bg-white text-black rounded border border-[#374151] focus:outline-none focus:ring-2 focus:ring-[#374151]"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>
              <div>
                <select
                  id="state"
                  className="w-full p-1.5 bg-white text-black rounded border border-[#374151] focus:outline-none focus:ring-2 focus:ring-[#374151]"
                  required
                >
                  <option value="">Select State</option>
                  {/* Add state options here */}
                </select>
              </div>
              <div>
                <select
                  id="city"
                  className="w-full p-1.5 bg-white text-black rounded border border-[#374151] focus:outline-none focus:ring-2 focus:ring-[#374151]"
                  required
                >
                  <option value="">Select City</option>
                  {/* Add city options here */}
                </select>
              </div>
              
              <div>
                <select
                  id="course"
                  className="w-full p-1.5 bg-white text-black rounded border border-[#374151] focus:outline-none focus:ring-2 focus:ring-[#374151]"
                  required
                >
                  <option value="">Select Course</option>
                  <option value="IT">Information Technology</option>
                  <option value="Mechanical">Mechanical Engineering</option>
                  <option value="ENTC">Electronics and Telecommunication Engineering</option>
                  <option value="Computer">Computer Engineering</option>
                  <option value="AIDS">Artificial Intelligence and Data Science (AIDS)</option>
                </select>
              </div>
              <div>
                <select
                  id="program"
                  className="w-full p-1.5 bg-white text-black rounded border border-[#374151] focus:outline-none focus:ring-2 focus:ring-[#374151]"
                  required
                >
                  <option value="">Select Program</option>
                  {/* Add program options here */}
                </select>
              </div>
              <div>
                <input
                  type="number"
                  id="cet-score"
                  className="w-full p-1.5 bg-white text-black rounded border border-[#374151] focus:outline-none focus:ring-2 focus:ring-[#374151]"
                  placeholder="Enter CET Score"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-2 bg-[#026670] text-white rounded-lg hover:bg-[#9FEDD7] hover:text-black"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EntcHero;
