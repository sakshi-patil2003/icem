import { useState } from "react";
import robotImage from "../../assets/images/aids-robot-tab.png"; // Path to robot image
import mouseIcon from "../../assets/images/white.png"; // Path to mouse icon
import newImage from "../../assets/images/banner-sideshape.png"; // Path to the new image

function AidsHero() {
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight * 0.4, // Scrolls down by 40% of the viewport height
      behavior: "smooth", // Smooth scroll effect
    });
  };

  return (
    <div
      className="font-baskerville-regular px-8 md:px-16 relative pt-12 bg-cover bg-no-repeat text-white flex items-start"
      style={{
        background: "linear-gradient(to right, #0c3249, #1e5f76, #41b9d0)",
      }}
    >
      {/* Black overlay with 0.5 opacity */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
        style={{ zIndex: 10 }} // Set a higher z-index for the overlay
      ></div>

      {/* New Image positioned at the top-left corner with original dimensions */}
      <div
        className="absolute top-0 left-0 z-15" // Position image at the top-left and above the overlay
        style={{
          marginLeft: "-2%", // Adjust the top margin as needed
        }}
      >
        <img
          src={newImage}
          alt="New Image"
          className="object-contain"
          style={{
            // Remove fixed width and height to keep the original dimensions
            width: "auto",
            height: "auto",
          }}
        />
      </div>

      {/* Right side robot image, fixed to the bottom */}
      <div className="absolute bottom-0 right-0 w-[50%] h-auto flex justify-end z-5"> {/* Lower z-index to appear below the overlay */}
        <img
          src={robotImage}
          alt="Robot"
          className="object-contain"
          style={{
            maxHeight: "80%", // Limit the max height to prevent it from stretching too much
            width: "auto", // Maintain aspect ratio
          }}
        />
      </div>

      {/* Text over the robot image */}
      <div
        className="absolute top-10 right-0 w-[50%] p-8 z-20 flex flex-col justify-center items-center"
        style={{
          textAlign: "left", // Center the text horizontally
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.0)", // Semi-transparent background for contrast
          borderRadius: "8px", // Rounded corners for the box
          padding: "20px",
        }}
      >
        <h2 className="text-5xl font-semibold mb-4">
          Transform Your Future with AI & Innovation
        </h2>
        <p className="text-3xl font-extralight mt-4">
          Apply now to join the cutting-edge of technology education in the field of AIDS Research & Development!
        </p>
      </div>

      {/* Left side content: Form container */}
      <div className="flex flex-col items-start w-full md:w-1/2 z-20 mb-4">
        <div
          className="p-6 max-w-md w-full shadow-md"
          style={{
            backgroundColor: "rgba(65, 185, 208, 0.3)",
            borderRadius: "8px",
            border: "2px solid #1e5f76",
          }}
        >
          <form className="space-y-4">
            <div>
              <input
                type="text"
                id="name"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#8BC5FF] focus:outline-none focus:ring-2 focus:ring-[#006BB3]"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#8BC5FF] focus:outline-none focus:ring-2 focus:ring-[#006BB3]"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                id="mobile"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#8BC5FF] focus:outline-none focus:ring-2 focus:ring-[#006BB3]"
                placeholder="Enter your mobile number"
                required
              />
            </div>
            <div>
              <select
                id="state"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#8BC5FF] focus:outline-none focus:ring-2 focus:ring-[#006BB3]"
                required
              >
                <option value="">Select State</option>
              </select>
            </div>
            <div>
              <select
                id="city"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#8BC5FF] focus:outline-none focus:ring-2 focus:ring-[#006BB3]"
                required
              >
                <option value="">Select City</option>
              </select>
            </div>
            
            <div>
              <select
                id="course"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#8BC5FF] focus:outline-none focus:ring-2 focus:ring-[#006BB3]"
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
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#8BC5FF] focus:outline-none focus:ring-2 focus:ring-[#006BB3]"
                required
              >
                <option value="">Select Program</option>
              </select>
            </div>
            <div>
              <input
                type="number"
                id="cet-score"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#8BC5FF] focus:outline-none focus:ring-2 focus:ring-[#006BB3]"
                placeholder="Enter CET Score"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 bg-[#006BB3] text-white rounded-lg hover:bg-[#00508D]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Scroll Down Section */}
      <div
        className="absolute bottom-5 right-5 z-20 text-white text-lg flex cursor-pointer"
        onClick={handleScrollDown}
      >
        <div className="flex items-center justify-center mr-4">
          <img
            src={mouseIcon}
            alt="Scroll Down"
            className="w-8 h-12 animate-bounce"
          />
        </div>
        <div className="flex flex-col items-start justify-start">
          <p className="text-lg">Scroll Down</p>
          <p className="text-sm text-gray-300">to know more</p>
        </div>
      </div>
    </div>
  );
}

export default AidsHero;
