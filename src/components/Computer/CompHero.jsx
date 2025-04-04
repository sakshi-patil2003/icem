import { useState, useEffect } from "react";
import backgroundImage from "../../assets/images/herocomp-e.jpg";
import mouseIcon from "../../assets/images/white.png"; // Make sure the path to your PNG is correct

function CompHero() {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = [
    "Innovation",
    "Evolution",
    "Frontier",
    "Revolution",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];

      if (!isDeleting) {
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000); // Shorter delay before starting to delete
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

    // Decrease time on deletion phase for faster typing/deleting
    const timeout = setTimeout(handleTyping, isDeleting ? 80 : 120); // Faster typing speed during typing phase and deleting

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  // Function to handle the scroll-down behavior
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight * 0.4, // Scrolls down by 40% of the viewport height
      behavior: "smooth", // Smooth scroll effect
    });
  };

  return (
    <div
      className=" font-baskervville-regular px-8 md:px-16 relative pt-8 min-h-screen bg-cover bg-right md:bg-center bg-no-repeat text-white flex items-start"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10"></div>

      {/* Add custom style for selected text */}
      <style>
        {`
          ::selection {
            background-color: #66aaff; /* Blue background for selection */
            color: #ffffff; /* White text for selection */
          }
        `}
      </style>

      {/* Left side content */}
      <div className="flex flex-col items-start z-20 w-full md:w-1/2">
        <h1 className="text-[60px] text-[#ffffff] font-semibold leading-tight mb-6">
          Lead the Tech{" "}
          <span className="relative inline-block">
            {currentText}
            <span className="ml-1 animate-blink">|</span>
          </span>{" "}
          with{" "}
          <span className="text-[#b0d4e9] font-bold mech-hero-wrapper">Computer Engineering</span>{" "}
          at ICEM
        </h1>
        <p className="mt-4 text-2xl">
          Innovative programs, expert faculty, and endless opportunities for
          growth await you.
        </p>
      </div>

      {/* Form container (Right side) */}
      <div className="flex justify-end w-full md:w-1/2 z-20">
        <div
          className="p-6 max-w-md w-full shadow-md"
          style={{ backgroundColor: "rgba(139, 197, 255, 0.3)" }} // Semi-transparent blue
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
                {/* Add state options here */}
              </select>
            </div>
            <div>
              <select
                id="city"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#8BC5FF] focus:outline-none focus:ring-2 focus:ring-[#006BB3]"
                required
              >
                <option value="">Select City</option>
                {/* Add city options here */}
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
                {/* Add program options here */}
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

      {/* New Scroll Down Section */}
      <div
        className="absolute px-8 md:px-16 bottom-5 left-5 z-20 text-white text-lg flex cursor-pointer"
        onClick={handleScrollDown}
      >
        {/* First Column: Mouse Icon */}
        <div className="flex items-center justify-center mr-4">
          <img
            src={mouseIcon}
            alt="Scroll Down"
            className="w-8 h-12 animate-bounce"
          />
        </div>
        <div className="flex flex-col items-start justify-start">
          <p className="text-lg text-white">Scroll Down</p>
          <p className="text-sm text-gray-300">to know more</p>
        </div>
      </div>
    </div>
  );
}

export default CompHero;
