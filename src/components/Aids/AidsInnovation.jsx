import { FaRobot, FaBrain, FaSatellite } from "react-icons/fa"; // AI-related icons

export default function Home() {
  return (
    <div className="relative bg-gradient-to-br from-teal-700 to-blue-900 flex items-center justify-center p-4 sm:p-10 overflow-hidden">
      {/* Animated AI-related icons */}
      <div className="absolute left-4 sm:left-10 top-4 sm:top-10 animate-floating text-white opacity-70">
        <FaRobot size={60} smSize={80} /> {/* Robot Icon */}
      </div>
      <div className="absolute right-4 sm:right-10 top-40 sm:top-60 animate-spin-slow text-white opacity-70">
        <FaBrain size={70} smSize={90} /> {/* Brain Icon */}
      </div>

      {/* Satellite moving from left to right */}
      <div className="absolute top-1/2 transform -translate-y-1/2 animate-fly text-white opacity-70">
        <FaSatellite size={60} smSize={80} /> {/* Satellite Icon */}
      </div>

      {/* Main content container */}
      <div
        className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/30 w-full max-w-lg sm:max-w-6xl bg-black/30 
                    hover:bg-black/50 hover:scale-105 transform transition duration-500 shadow-xl"
      >
        <h1 className="text-2xl sm:text-4xl font-bold text-white text-center">
          Where AI Meets Innovation – Welcome to the Future!
        </h1>

        <p className="mt-4 sm:mt-6 text-sm sm:text-base text-center text-white leading-relaxed">
          Have you ever wondered how Netflix recommends your favorite shows, how chatbots talk like humans, or how AI 
          can diagnose diseases faster than doctors? That’s the power of Artificial Intelligence and Data Science!
        </p>

        <p className="mt-2 sm:mt-4 text-sm sm:text-base text-center text-white">
          At <strong>ICEM</strong>, we turn curiosity into expertise by combining AI, programming, and data analytics 
          into a future-ready curriculum!
        </p>

        <p className="mt-4 sm:mt-6 text-sm sm:text-base text-center text-white/80">
          🚀 Hands-on training and real-world innovation await you.
        </p>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes floating {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fly {
          0% {
            transform: translateX(-100vw); /* Start off-screen from the left */
          }
          100% {
            transform: translateX(100vw); /* Fly off-screen to the right */
          }
        }

        .animate-floating {
          animation: floating 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }

        .animate-fly {
          animation: fly 10s linear infinite; /* Smooth left-to-right animation */
        }
      `}</style>
    </div>
  );
}
