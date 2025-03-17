import { useEffect } from 'react';
import { gsap } from 'gsap';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS
import offer1Image from '../../assets/images/Power Systems & Energy Distribution.jpg';  // Import the power systems image
import offer2Image from '../../assets/images/Electronics & Circuit Design.jpg';  // Import the electronics image
import offer3Image from '../../assets/images/Advanced Signal Processing.jpg';  // Import the circuits image
import offer4Image from '../../assets/images/Embedded Systems & IoT.jpg';  // Import the embedded systems image
import offer5Image from '../../assets/images/Control Systems & Automation.jpg';  // Import the control systems image
import offer6Image from '../../assets/images/ Core Engineering Internships & Training.jpg';  // Import the internships image

function EntcOfferings() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const elements = document.querySelectorAll('.circle');
    const icons = document.querySelectorAll('.icon');

    elements.forEach((circle, index) => {
      const icon = icons[index];

      gsap.set(circle, { opacity: 0, x: -50 });
      gsap.set(icon, { rotationY: 180 });

      circle.parentElement.addEventListener('mouseenter', () => {
        gsap.to(circle, { opacity: 1, x: 0, duration: 0.3 });
        gsap.to(icon, { rotationY: 0, duration: 0.3 });
      });

      circle.parentElement.addEventListener('mouseleave', () => {
        gsap.to(circle, { opacity: 0, x: -50, duration: 0.3 });
        gsap.to(icon, { rotationY: 180, duration: 0.3 });
      });
    });
  }, []);

  return (
    <div className="px-8 md:px-16 py-6 md:py-8 bg-[#ffffff] poppins-regular">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-[#026670]" data-aos="fade-up">
        Electrical & Electronics Engineering Offerings
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 md:gap-x-20 z-5 justify-center">
        {/* Power Systems & Energy Distribution */}
        <div
          className="bg-[linear-gradient(#9FEDD7,_#026670_51%,_#9FEDD7)] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer1Image}
            alt="Power Systems"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl font-bold text-white mb-2">Power Systems & Energy Distribution</h3>
            <p className="text-base text-white">Optimizing energy flow for residential, industrial, and commercial applications.</p>
          </div>
        </div>

        {/* Electronics & Circuit Design */}
        <div
          className="bg-[linear-gradient(#9FEDD7,_#026670_51%,_#9FEDD7)] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer2Image}
            alt="Electronics & Circuit Design"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl font-bold text-white mb-2">Electronics & Circuit Design</h3>
            <p className="text-base text-white">Designing efficient and functional circuits for real-world applications.</p>
          </div>
        </div>

        {/* Advanced Signal Processing */}
        <div
          className="bg-[linear-gradient(#9FEDD7,_#026670_51%,_#9FEDD7)] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer3Image}
            alt="Signal Processing"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl font-bold text-white mb-2">Advanced Signal Processing</h3>
            <p className="text-base text-white">Processing complex signals for communication, radar, and more.</p>
          </div>
        </div>

        {/* Embedded Systems & IoT */}
        <div
          className="bg-[linear-gradient(#9FEDD7,_#026670_51%,_#9FEDD7)] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer4Image}
            alt="Embedded Systems"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl font-bold text-white mb-2">Embedded Systems & IoT</h3>
            <p className="text-base text-white">Developing smart, connected devices for automation and monitoring.</p>
          </div>
        </div>

        {/* Control Systems & Automation */}
        <div
          className="bg-[linear-gradient(#9FEDD7,_#026670_51%,_#9FEDD7)] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer5Image}
            alt="Control Systems"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl font-bold text-white mb-2">Control Systems & Automation</h3>
            <p className="text-base text-white">Innovative systems for automatic control and process optimization.</p>
          </div>
        </div>

        {/* Core Engineering Internships and Industrial Training */}
        <div
          className="bg-[linear-gradient(#9FEDD7,_#026670_51%,_#9FEDD7)] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer6Image}
            alt="Internships & Training"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl font-bold text-white mb-2">Core Engineering Internships & Training</h3>
            <p className="text-base text-white">Gain valuable industry exposure through hands-on internships and training.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EntcOfferings;
