import { useEffect } from 'react';
import { gsap } from 'gsap';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS
import offer1Image from '../../assets/images/aids-off-6.avif';  // Keep the original image path
import offer2Image from '../../assets/images/aids-off-4.avif';  // Keep the original image path
import offer3Image from '../../assets/images/aids-off-3.avif';  // Keep the original image path
import offer4Image from '../../assets/images/aids-off-5.avif';  // Keep the original image path
import offer5Image from '../../assets/images/aids-off-2.avif';  // Keep the original image path
import offer6Image from '../../assets/images/aids-off-1.avif';  // Keep the original image path
import backgroundImage from '../../assets/images/dots.jpg';  // Import your background image

function AidsOfferings() {
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
    <div 
      className="px-8 md:px-16 py-6 md:py-8 poppins-regular mt-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,  // Use the imported image here
        backgroundSize: 'cover', // Ensures the image covers the full background
        backgroundPosition: 'center', // Centers the image
        // Remove backgroundAttachment: 'fixed' to allow the image to move with the scroll
      }}
    >
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-sky-900" data-aos="fade-up">
        AIDS Program Offerings
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-2 md:gap-x-10 justify-center">

        {/* AI Research & Applications */}
        <div
          className="bg-[#41b9d0] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer2Image}
            alt="AI Research"
            className="w-full h-40 md:h-48 object-cover mb-4"
          />
          <div className="text-center ">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">AI Research & Applications</h3>
            <p className="text-base text-white">Exploring cutting-edge AI research and practical applications in real-world scenarios.</p>
          </div>
        </div>

        {/* Data Science & Analytics */}
        <div
          className="bg-[#41b9d0] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer1Image}
            alt="Data Science"
            className="w-full h-40 md:h-48 object-cover mb-4"
          />
          <div className="text-center ">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Data Science & Analytics</h3>
            <p className="text-base text-white">Learn how to analyze and interpret complex data to make data-driven decisions in engineering and technology.</p>
          </div>
        </div>

        {/* Machine Learning & Algorithms */}
        <div
          className="bg-[#41b9d0] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer3Image}
            alt="Machine Learning"
            className="w-full h-40 md:h-48  object-cover mb-4"
          />
          <div className="text-center ">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Machine Learning & Algorithms</h3>
            <p className="text-base text-white">Develop machine learning models and learn how to apply algorithms to real-world data problems.</p>
          </div>
        </div>

        {/* Robotics & Automation */}
        <div
          className="bg-[#41b9d0] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer5Image}
            alt="Robotics"
            className="w-full h-40 md:h-48 object-cover mb-4"
          />
          <div className="text-center ">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Robotics & Automation</h3>
            <p className="text-base text-white">Study how robots are designed, built, and programmed to perform tasks autonomously in a variety of fields.</p>
          </div>
        </div>

        {/* Software Engineering & Development */}
        <div
          className="bg-[#41b9d0] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer4Image}
            alt="Software Engineering"
            className="w-full h-40 md:h-48 object-cover mb-4"
          />
          <div className="text-center ">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Software Engineering & Development</h3>
            <p className="text-base text-white">Learn to design, develop, and deploy high-quality software systems in various domains.</p>
          </div>
        </div>

        {/* Engineering Research & Innovation */}
        <div
          className="bg-[#41b9d0] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer6Image}
            alt="Engineering Research"
            className="w-full h-40 md:h-48 object-cover mb-4"
          />
          <div className="text-center ">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Engineering Research & Innovation</h3>
            <p className="text-base text-white">Engage in innovative research projects, exploring new frontiers in computer engineering and technology.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AidsOfferings;
