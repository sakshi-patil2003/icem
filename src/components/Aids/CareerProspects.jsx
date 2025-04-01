import { FaGoogle, FaAmazon, FaMicrosoft, FaLaptopCode } from "react-icons/fa";
import bgImage from '../../assets/images/entc-careere.avif';

export default function CareerProspects() {
  return (
    <div
      className="relative flex items-center justify-center p-6 sm:p-12 min-h-[30vh] sm:min-h-[50vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="p-8 sm:p-10 rounded-xl w-full max-w-lg sm:max-w-4xl bg-black/40 shadow-lg hover:scale-105 transition-transform duration-500 border border-white/20">
        
        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white text-center mb-4 sm:mb-6">
          Career Prospects & Placements
        </h1>

        {/* Description */}
        <p className="text-base sm:text-xl text-white text-center leading-relaxed mb-6 sm:mb-8">
          The demand for AI & Data Science professionals is skyrocketing! With top companies like Google, Amazon, 
          Microsoft, and Infosys hiring AI specialists, the possibilities are endless. ICEM ensures you’re industry-ready 
          with 100% placement assistance, internships, and exposure to real-world projects.
        </p>

        {/* Animated Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6 text-center">
          <div className="p-4 sm:p-5 rounded-lg bg-transparent hover:bg-black/60 transform hover:scale-110 transition-all text-white">
            <FaGoogle size={36} className="text-red-400 mb-2 animate-float" />
            <p className="text-base sm:text-lg font-semibold">Google</p>
          </div>

          <div className="p-4 sm:p-5 rounded-lg bg-transparent hover:bg-black/60 transform hover:scale-110 transition-all text-white">
            <FaAmazon size={36} className="text-yellow-300 mb-2 animate-bounce" />
            <p className="text-base sm:text-lg font-semibold">Amazon</p>
          </div>

          <div className="p-4 sm:p-5 rounded-lg bg-transparent hover:bg-black/60 transform hover:scale-110 transition-all text-white">
            <FaMicrosoft size={36} className="text-blue-500 mb-2 animate-pulse" />
            <p className="text-base sm:text-lg font-semibold">Microsoft</p>
          </div>

          <div className="p-4 sm:p-5 rounded-lg bg-transparent hover:bg-black/60 transform hover:scale-110 transition-all text-white">
            <FaLaptopCode size={36} className="text-teal-300 mb-2 animate-float" />
            <p className="text-base sm:text-lg font-semibold">Real-World Projects</p>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }

        .animate-bounce { animation: bounce 2s infinite; }

        .animate-pulse { animation: pulse 2s infinite; }
      `}</style>
    </div>
  );
}
