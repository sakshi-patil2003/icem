// MechForklift.jsx
import React, { useEffect } from "react";
import { gsap } from "gsap";
import forkliftImage from "../../assets/images/forklift-cropped.png"; // Adjust the path to your forklift image

const MechForklift = () => {
  useEffect(() => {
    // GSAP animation to move the forklift from left to right
    gsap.fromTo(
      ".forklift",
      { x: "-30%" }, // Start position off-screen to the left
      {
        x: "600%", // Move to the right
        duration: 20, // Duration of the animation (adjust as needed)
        repeat: -1, // Infinite loop
        ease: "linear", // Smooth linear movement
      }
    );
  }, []);

  return (
    <div className="absolute bottom-[-0rem] left-0 z-20">
      <img
        src={forkliftImage}
        alt="Forklift"
        className="forklift w-3/6 md:w-1/6" // You can adjust the size as needed
      />
    </div>
  );
};

export default MechForklift;
