import React from "react";
import {
  FaIndustry,
  FaMicroscope,
  FaProjectDiagram,
  FaUserTie,
  FaBriefcase,
  FaGlobe,
  FaBolt,
  FaTrophy,
} from "react-icons/fa";


const WhyChooseICEM = () => {
  // Card Component
  const Card = ({ icon: Icon, title, description, hoverColor, delay }) => {
    return (
      <div
        className={`p-2 sm:md-6 flex flex-col items-center text-center bg-white shadow-lg hover:shadow-xl transform hover:scale-105 
                    transition-all duration-300 border-2 border-transparent hover:border-${hoverColor}`}
      >
        {/* Icon on Top with Animation */}
        <div
          className="p-4 rounded-full bg-gradient-to-br from-[#013D3A] to-[#089D8A] text-white mb-4 animate-popup"
          style={{ animationDelay: delay }} // Delay animation
        >
          <Icon className="text-4xl" />
        </div>
        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-sm md:text-base text-gray-600">{description}</p>
      </div>
    );
  };

  return (
    <div className="w-full bg-gray-50  p-4 md:p-10 bg-gradient-to-br from-[#03918a] to-[#089D8A]">
      <h1 className="text-2xl md:text-4xl font-extrabold text-white text-center mb-8">
        Why Choose ICEM for Your ENTC Journey?
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 px-8">
        <Card
          icon={FaIndustry}
          title="Industry-Integrated Curriculum"
          description="Learn AI, IoT, and modern telecom technologies!"
          hoverColor="blue-500"
          delay="0s"
        />
        <Card
          icon={FaMicroscope}
          title="State-of-the-Art Labs"
          description="Hands-on training with Apple labs and IT labs."
          hoverColor="purple-500"
          delay="0.2s"
        />
        <Card
          icon={FaProjectDiagram}
          title="Live Projects & Internships"
          description="Gain practical exposure in leading industries."
          hoverColor="green-500"
          delay="0.4s"
          // className="space-y-2"
        />
        <Card
          icon={FaUserTie}
          title="Expert Faculty & Mentors"
          description="Learn from top professionals in the industry!"
          hoverColor="red-500"
          delay="0.6s"
        />
        <Card
          icon={FaBriefcase}
          title="Top-Notch Placements"
          description="Land jobs in telecom, AI, embedded systems, and more!"
          hoverColor="indigo-500"
          delay="0.8s"
        />
        <Card
          icon={FaGlobe}
          title="Global Career Prospects"
          description="Opportunities in leading MNCs worldwide!"
          hoverColor="orange-500"
          delay="1s"
        />
        <Card
          icon={FaBolt}
          title="Exciting Events & Hackathons"
          description="Compete, innovate, and network with industry leaders!"
          hoverColor="yellow-500"
          delay="1.2s"
        />
        <Card
          icon={FaTrophy}
          title="Vibrant Campus Life & Sports"
          description="A perfect mix of academics and extracurriculars!"
          hoverColor="teal-500"
          delay="1.4s"
        />
      </div>
    </div>
  );
};

export default WhyChooseICEM;
