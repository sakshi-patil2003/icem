import { useEffect, useRef } from 'react';
import { FaCog, FaTools, FaDollarSign } from 'react-icons/fa'; // Import new icon
import { gsap } from 'gsap'; // Import GSAP
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS styles

function AidsPointers() {
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const cardRef3 = useRef(null);
  const iconRef1 = useRef(null);
  const iconRef2 = useRef(null);
  const iconRef3 = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const animateShadow = (element) => {
      gsap.to(element, {
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.1)",
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const resetShadow = (element) => {
      gsap.to(element, {
        boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const rotateIcon = (iconRef) => {
      gsap.to(iconRef.current, {
        rotation: 360,
        repeat: -1, // Infinite loop
        duration: 4,
        ease: "linear",
      });
    };

    const popUpEffect = (iconRef) => {
      gsap.to(iconRef.current, {
        scale: 1.2, // Increase size (pop-up effect)
        repeat: -1, // Infinite loop
        yoyo: true, // Reverse the animation (shrink back to original size)
        duration: 1, // Duration of the animation
        ease: "power1.inOut", // Smooth easing for pop effect
      });
    };

    const cards = [cardRef1.current, cardRef2.current, cardRef3.current];
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => animateShadow(card));
      card.addEventListener("mouseleave", () => resetShadow(card));
    });

    // Rotate icons continuously
    rotateIcon(iconRef1);
    rotateIcon(iconRef2);
    popUpEffect(iconRef3); // Apply pop-up effect to the dollar icon

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", () => animateShadow(card));
        card.removeEventListener("mouseleave", () => resetShadow(card));
      });
    };
  }, []);

  return (
    <div className="px-4 sm:px-8 md:px-16 py-6 sm:py-8 md:py-12 font-baskerville-regular">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-16">
        {/* Card 1 */}
        <div
          ref={cardRef1}
          className="bg-[#0c3249] p-6 shadow-lg rounded-lg flex flex-col items-center text-center"
          data-aos="fade-up"
        >
          <FaCog
            ref={iconRef1}
            size={50}
            className="text-[#41b9d0] mb-4"
          />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-white">Program Format</h2>
          <p className="mt-2 text-lg sm:text-xl md:text-2xl font-bold text-white">Offline</p>
        </div>

        {/* Card 2 */}
        <div
          ref={cardRef2}
          className="bg-[#1e5f76] p-6 shadow-lg rounded-lg flex flex-col items-center text-center"
          data-aos="fade-up"
        >
          <FaTools
            ref={iconRef2}
            size={50}
            className="text-[#41b9d0] mb-4"
          />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-white">Duration</h2>
          <p className="mt-2 text-lg sm:text-xl md:text-2xl font-bold text-white">4 Years</p>
        </div>

        {/* Card 3 */}
        <div
          ref={cardRef3}
          className="bg-[#41b9d0] p-6 shadow-lg rounded-lg flex flex-col items-center text-center"
          data-aos="fade-up"
        >
          <FaDollarSign
            ref={iconRef3}
            size={50}
            className="text-[#0c3249] mb-4"
          />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-white">Program Fees</h2>
          <p className="mt-2 text-lg sm:text-xl md:text-2xl font-bold text-white">Rs. 1,08,000/-</p>
        </div>
      </div>
    </div>
  );
}

export default AidsPointers;
