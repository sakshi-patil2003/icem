import React from 'react';
// import bgVideoMov from '../../assets/images/binary.mov';  // Import the .mov file
import bgVideoMp4 from '../../assets/images/binary-code-green.mp4';  // Import the .mp4 file

function ItHero() {
  return (
    <div className="relative h-screen">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          {/* Video sources for different formats */}
          <source src={bgVideoMp4} type="video/mp4" />
          {/* <source src={bgVideoMov} type="video/quicktime" /> */}
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div> {/* Black overlay with 50% opacity */}

      {/* Content (Form and Heading) */}
      <div className="relative z-10 flex justify-between h-full">

        {/* Left side: Heading (Aligned to Top) */}
        <div className="w-1/2 flex flex-col items-start pt-10">
          <h1 className="text-5xl text-white text-left pl-10 leading-normal">
            Shape the Future of Technology with <span className='text-[#abbee9]'>Information Technology</span> at ICEM
          </h1>
          <p className="text-3xl text-white pl-10 mt-8 leading-10">
            Innovative programs, expert faculty, and endless opportunities for growth await you.
          </p>
        </div>

        {/* Right side: Form (Vertically Centered) */}
        <div className="w-1/2 flex justify-center items-center">
          <div
            className="p-6 max-w-md w-full shadow-md"
            style={{ backgroundColor: "rgba(139, 197, 255, 0.3)" }}
          >
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  id="name"
                  className="w-full p-1.5 bg-gradient-to-r from-[#e1f1fb] via-[#c1d9f2] to-[#a0c4e7] text-black rounded border border-[#001E5D] focus:outline-none focus:ring-2 focus:ring-[#001E5D]"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  className="w-full p-1.5 bg-gradient-to-r from-[#e1f1fb] via-[#c1d9f2] to-[#a0c4e7] text-black rounded border border-[#001E5D] focus:outline-none focus:ring-2 focus:ring-[#001E5D]"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  id="mobile"
                  className="w-full p-1.5 bg-gradient-to-r from-[#e1f1fb] via-[#c1d9f2] to-[#a0c4e7] text-black rounded border border-[#001E5D] focus:outline-none focus:ring-2 focus:ring-[#001E5D]"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>
              <div>
                <select
                  id="state"
                  className="w-full p-1.5 bg-gradient-to-r from-[#e1f1fb] via-[#c1d9f2] to-[#a0c4e7] text-black rounded border border-[#001E5D] focus:outline-none focus:ring-2 focus:ring-[#001E5D]"
                  required
                >
                  <option value="">Select State</option>
                  {/* Add state options here */}
                </select>
              </div>
              <div>
                <select
                  id="city"
                  className="w-full p-1.5 bg-gradient-to-r from-[#e1f1fb] via-[#c1d9f2] to-[#a0c4e7] text-black rounded border border-[#001E5D] focus:outline-none focus:ring-2 focus:ring-[#001E5D]"
                  required
                >
                  <option value="">Select City</option>
                  {/* Add city options here */}
                </select>
              </div>
              <div>
                <select
                  id="discipline"
                  className="w-full p-1.5 bg-gradient-to-r from-[#e1f1fb] via-[#c1d9f2] to-[#a0c4e7] text-black rounded border border-[#001E5D] focus:outline-none focus:ring-2 focus:ring-[#001E5D]"
                  required
                >
                  <option value="">Select Discipline</option>
                  {/* Add discipline options here */}
                </select>
              </div>
              <div>
                <select
                  id="course"
                  className="w-full p-1.5 bg-gradient-to-r from-[#e1f1fb] via-[#c1d9f2] to-[#a0c4e7] text-black rounded border border-[#001E5D] focus:outline-none focus:ring-2 focus:ring-[#001E5D]"
                  required
                >
                  <option value="">Select Course</option>
                  {/* Add course options here */}
                </select>
              </div>
              <div>
                <select
                  id="program"
                  className="w-full p-1.5 bg-gradient-to-r from-[#e1f1fb] via-[#c1d9f2] to-[#a0c4e7] text-black rounded border border-[#001E5D] focus:outline-none focus:ring-2 focus:ring-[#001E5D]"
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
                  className="w-full p-1.5 bg-gradient-to-r from-[#e1f1fb] via-[#c1d9f2] to-[#a0c4e7] text-black rounded border border-[#001E5D] focus:outline-none focus:ring-2 focus:ring-[#001E5D]"
                  placeholder="Enter CET Score"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-2 bg-[#001E5D] text-white rounded-lg hover:bg-[#001A56]"
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

export default ItHero;
