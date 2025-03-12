import { useState, useEffect } from "react";
import backgroundImage from "../../assets/images/aids-robot-tab.png";
import mouseIcon from "../../assets/images/white.png"; // Make sure the path to your PNG is correct

function CompHero() {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = ["Innovation", "Evolution", "Frontier", "Revolution"];

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
      className="font-baskerville-regular px-8 md:px-16 relative pt-12 bg-cover bg-no-repeat text-white flex items-start"
      style={{
        background: "linear-gradient(to right, #0c3249, #1e5f76, #41b9d0)", // Updated gradient from left to right
      }}
    >
      <div
        className="absolute top-0 right-0 w-[50%] h-full bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "right bottom", // Align the image to the bottom-right corner
          backgroundSize: "contain", // Ensure the image does not stretch or crop
        }}
      ></div>

      {/* Left side content: Form container */}
      <div className="flex flex-col items-start w-full md:w-1/2 z-20 mb-4">
      <div
  className="p-6 max-w-md w-full shadow-md"
  style={{
    backgroundColor: "rgba(65, 185, 208, 0.3)", // Using #41b9d0 (with some transparency)
    borderRadius: "8px", // Optional: Add rounded corners
    border: "2px solid #1e5f76", // Use #1e5f76 for a soft border color
  }}
>
          <form className="space-y-4 ">
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
                id="discipline"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#8BC5FF] focus:outline-none focus:ring-2 focus:ring-[#006BB3]"
                required
              >
                <option value="">Select Discipline</option>
                {/* Add discipline options here */}
              </select>
            </div>
            <div>
              <select
                id="course"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#8BC5FF] focus:outline-none focus:ring-2 focus:ring-[#006BB3]"
                required
              >
                <option value="">Select Course</option>
                {/* Add course options here */}
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

      {/* Scroll Down Section */}
      <div
        className="absolute bottom-5 right-5 z-20 text-white text-lg flex cursor-pointer"
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
          <p className="text-lg">Scroll Down</p>
          <p className="text-sm text-gray-300">to know more</p>
        </div>
      </div>
    </div>
  );
}

export default CompHero;
