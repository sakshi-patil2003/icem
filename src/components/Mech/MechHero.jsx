import { useState, useEffect } from "react";
import backgroundImage from "../../assets/images/mech-hero.jpg"; 
import gearImage from "../../assets/images/gears.png"; 
import MechForklift from "./MechForklift"; // Import the MechForklift component

function MechHero() {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const words = [
      "Innovation",
      "Automation",
      "Precision",
      "Revolution",
    ];

    const handleTyping = () => {
      const currentWord = words[currentWordIndex];

      if (!isDeleting) {
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
          return;
        }
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      } else {
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? 80 : 120);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]); // Removed 'words' dependency

  return (
    <div
      className="px-8 md:px-16 relative pt-8 h-screen bg-cover bg-right md:bg-center bg-no-repeat text-white flex items-start"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Add custom style for selected text */}
      <style>
        {`
          ::selection {
            background-color: #cc5c1f; /* Rusty orange background */
            color: #fff8f0; /* Off-white text color for better contrast */
          }
        `}
      </style>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10"></div>

      {/* Small Half Gear Image */}
      <img
        src={gearImage}
        alt="Half Gear"
        className="absolute bottom-0 left-0 w-2/6 z-5 transform scale-x-[-1]"
      />

      {/* Left side content */}
      <div className="flex flex-col items-start z-20  w-full hidden md:block sm:block">
        <h1 className="text-6xl md:text-5xl syne-regular text-[#ffffff] font-semibold leading-tight mb-6">
          Lead the Mechanical{" "}
          <span className="relative inline-block">
            {currentText}
            <span className="ml-1 animate-blink">|</span>
          </span>{" "}
          with{" "}
          <span className="text-[#ff5d12] font-bold mech-hero-wrapper">Mechanical Engineering</span> at ICEM
        </h1>
        <p className="mt-4 text-3xl md:text-4xl">
          Innovative programs, expert faculty, and endless opportunities for growth await you.
        </p>
      </div>

      {/* Right side form container */}
      <div className="flex justify-end  z-20 w-full ">
        <div
          className="p-6 max-w-md w-full shadow-md ml-5 rounded-md "
          style={{ backgroundColor: "rgba(139, 197, 255, 0.3)" }}
        >
          <form className="space-y-3 p-1 ">
            <div>
              <input
                type="text"
                id="name"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFF8F0] via-[#FFF0E0] to-[#FFE8D1] text-black rounded border border-[#FFD1A3] focus:outline-none focus:ring-2 focus:ring-[#FFB88C]"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFF8F0] via-[#FFF0E0] to-[#FFE8D1] text-black rounded border border-[#FFD1A3] focus:outline-none focus:ring-2 focus:ring-[#FFB88C]"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                id="mobile"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFF8F0] via-[#FFF0E0] to-[#FFE8D1] text-black rounded border border-[#FFD1A3] focus:outline-none focus:ring-2 focus:ring-[#FFB88C]"
                placeholder="Enter your mobile number"
                required
              />
            </div>
            <div>
              <select
                id="state"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFF8F0] via-[#FFF0E0] to-[#FFE8D1] text-black rounded border border-[#FFD1A3] focus:outline-none focus:ring-2 focus:ring-[#FFB88C]"
                required
              >
                <option value="">Select State</option>
                {/* Add state options here */}
              </select>
            </div>
            <div>
              <select
                id="city"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFF8F0] via-[#FFF0E0] to-[#FFE8D1] text-black rounded border border-[#FFD1A3] focus:outline-none focus:ring-2 focus:ring-[#FFB88C]"
                required
              >
                <option value="">Select City</option>
                {/* Add city options here */}
              </select>
            </div>
            <div>
              <select
                id="discipline"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFF8F0] via-[#FFF0E0] to-[#FFE8D1] text-black rounded border border-[#FFD1A3] focus:outline-none focus:ring-2 focus:ring-[#FFB88C]"
                required
              >
                <option value="">Select Discipline</option>
                {/* Add discipline options here */}
              </select>
            </div>
            <div>
              <select
                id="course"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFF8F0] via-[#FFF0E0] to-[#FFE8D1] text-black rounded border border-[#FFD1A3] focus:outline-none focus:ring-2 focus:ring-[#FFB88C]"
                required
              >
                <option value="">Select Course</option>
                {/* Add course options here */}
              </select>
            </div>
            <div>
              <select
                id="program"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFF8F0] via-[#FFF0E0] to-[#FFE8D1] text-black rounded border border-[#FFD1A3] focus:outline-none focus:ring-2 focus:ring-[#FFB88C]"
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
                className="w-full p-1.5 bg-gradient-to-r from-[#FFF8F0] via-[#FFF0E0] to-[#FFE8D1] text-black rounded border border-[#FFD1A3] focus:outline-none focus:ring-2 focus:ring-[#FFB88C]"
                placeholder="Enter CET Score"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 bg-[#ff5d12] text-white rounded-lg hover:bg-[#e24601]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Forklift Animation Component */}
      <MechForklift />
    </div>
  );
}

export default MechHero;
