import { FaRobot, FaChartBar, FaNetworkWired, FaRocket, FaBriefcase, FaGlobe, FaMedal, FaMicrophone, FaTrophy } from "react-icons/fa";

export default function WhyChooseICEM() {
  return (
    <div className=" flex items-center justify-center py-8">
      <div className="p-8 rounded-2xl border-transparent w-full max-w-7xl bg-gradient-to-br from-teal-700 to-blue-900 shadow-xl">
        <h1 className="text-xl md:text-4xl font-bold text-white text-center mb-6">
          Why Choose ICEM for Your AIDS Engineering Journey?
        </h1>

        {/* Grid Container */}
        <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
          
          {/* Card 1 */}
          <div className="p-2 bg-transparent rounded-lg hover:bg-black/60 transform hover:scale-105 transition-all text-white flex flex-col items-center space-y-2 sm:space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <FaRobot size={40} className="text-teal-300" />
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold">AI & Machine Learning</h2>
              <p className="text-sm">Train AI models and build self-learning applications!</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-2 bg-transparent rounded-lg hover:bg-black/60 transform hover:scale-105 transition-all text-white flex flex-col items-center space-y-2 sm:space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <FaChartBar size={40} className="text-teal-300" />
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold">Big Data & Analytics</h2>
              <p className="text-sm">Decode massive datasets for smarter decision-making!</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-4 bg-transparent rounded-lg hover:bg-black/60 transform hover:scale-105 transition-all text-white flex flex-col items-center space-y-2 sm:space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <FaRocket size={40} className="text-teal-300" />
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold">Neural Networks & Deep Learning</h2>
              <p className="text-sm">Explore the tech behind self-driving cars & AI assistants!</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-2 bg-transparent rounded-lg hover:bg-black/60 transform hover:scale-105 transition-all text-white flex flex-col items-center space-y-2 sm:space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <FaBriefcase size={40} className="text-teal-300" />
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold">Industry-Aligned Curriculum</h2>
              <p className="text-sm">Hands-on projects, hackathons & real-world applications!</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="p-2 bg-transparent rounded-lg hover:bg-black/60 transform hover:scale-105 transition-all text-white flex flex-col items-center space-y-2 sm:space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <FaGlobe size={40} className="text-teal-300" />
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold">Global Career Opportunities</h2>
              <p className="text-sm">Work in AI-driven industries worldwide!</p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="p-2 bg-transparent rounded-lg hover:bg-black/60 transform hover:scale-105 transition-all text-white flex flex-col items-center space-y-2 sm:space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <FaMedal size={40} className="text-teal-300" />
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold">Top-Notch Placements</h2>
              <p className="text-sm">Secure jobs with core and IT companies!</p>
            </div>
          </div>

          {/* Card 7 */}
          <div className="p-2 bg-transparent rounded-lg hover:bg-black/60 transform hover:scale-105 transition-all text-white flex flex-col items-center space-y-2 sm:space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <FaTrophy size={40} className="text-teal-300" />
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold">Thriving Sports Culture</h2>
              <p className="text-sm">Stay active and build teamwork with top-class sports facilities!</p>
            </div>
          </div>

          {/* Card 8 */}
          <div className="p-2 bg-transparent rounded-lg hover:bg-black/60 transform hover:scale-105 transition-all text-white flex flex-col items-center space-y-2 sm:space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <FaMicrophone size={40} className="text-teal-300" />
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold">Expert Guest Lectures</h2>
              <p className="text-sm">Learn from industry leaders and mechanical pioneers!</p>
            </div>
          </div>

          {/* Card 9 */}
          <div className="p-2 bg-transparent rounded-lg hover:bg-black/60 transform hover:scale-105 transition-all text-white flex flex-col items-center space-y-2 sm:space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <FaRocket size={40} className="text-teal-300" />
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold">Mega Events & Competitions</h2>
              <p className="text-sm">Engage in tech fests, project expos, and national-level challenges!</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
