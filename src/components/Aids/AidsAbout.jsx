import { FaRobot, FaDatabase, FaChartLine, FaLaptopCode, FaBrain, FaSearch } from "react-icons/fa";
import MyImage from "../../assets/images/aids-c.jpg";  // Example image
import Image1 from "../../assets/images/aids-b.jpg";  // Example image
import Image2 from "../../assets/images/aids-d.jpg";  // Example image

function AidsStudying() {
  return (
    <div className="flex px-8 md:px-16 py-6 poppins-regular bg-gradient-to-r from-[#0c3249] to-[#41b9d0]">
      {/* Left Side (Image Section with full height and 50% width) */}
      <div className="w-1/2 grid grid-cols-2 gap-4">
        {/* First Column: One Row with One Image */}
        <div className="col-span-1 h-full flex flex-col justify-center">
          <img
            src={MyImage}
            alt="Computer Engineering"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Second Column: Two Rows with Two Images */}
        <div className="col-span-1 grid grid-rows-2 gap-2 h-full">
          <div className="row-span-1 h-full">
            <img
              src={Image1}
              alt="Engineering Concept"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="row-span-1 h-full">
            <img
              src={Image2}
              alt="AI and Data Science"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Right Side (Updated Text Content Section) */}
      <div className="w-[50%] pl-8 text-white">
        <h1 className="text-4xl font-semibold text-left mb-4">
          Exploring AI and Data Science in Computer Engineering
        </h1>
        <h1 className="text-3xl font-extralight text-left text-[#012a32] mb-6">
          Revolutionizing Technology with Advanced Algorithms
        </h1>
        <p className="text-left text-lg mb-6">
          Our Computer Engineering program is at the forefront of integrating **Artificial Intelligence (AI)** and **Data Science** to develop innovative solutions for tomorrow's technology challenges. Students will learn to design intelligent systems, build data-driven applications, and leverage AI techniques in areas like robotics, machine learning, and data analytics. Join us to be part of the next generation of engineers shaping the future of technology.
        </p>

        {/* 2x3 Grid for Cards */}
        <div className="grid grid-cols-2 grid-rows-3 gap-12">
          {/* Card 1 */}
          <div className="bg-[#d4f1f7] p-4 shadow-lg shadow-[#80d4f0]/50 flex justify-between items-center rounded-lg">
            <span className="flex items-center">
              <FaRobot className="text-[#41b9d0] mr-4 text-4xl" />
              <span className="text-sm text-[#003b4d]">AI IN COMPUTER ENGINEERING</span>
            </span>
          </div>
          {/* Card 2 */}
          <div className="bg-[#d4f1f7] p-4 shadow-lg shadow-[#80d4f0]/50 flex justify-between items-center rounded-lg">
            <span className="flex items-center">
              <FaDatabase className="text-[#41b9d0] mr-4 text-4xl" />
              <span className="text-sm text-[#003b4d]">DATA SCIENCE IN ENGINEERING</span>
            </span>
          </div>
          {/* Card 3 */}
          <div className="bg-[#d4f1f7] p-4 shadow-lg shadow-[#80d4f0]/50 flex justify-between items-center rounded-lg">
            <span className="flex items-center">
              <FaChartLine className="text-[#41b9d0] mr-4 text-4xl" />
              <span className="text-sm text-[#003b4d]">ADVANCED ALGORITHMS FOR ENGINEERING</span>
            </span>
          </div>
          {/* Card 4 */}
          <div className="bg-[#d4f1f7] p-4 shadow-lg shadow-[#80d4f0]/50 flex justify-between items-center rounded-lg">
            <span className="flex items-center">
              <FaSearch className="text-[#41b9d0] mr-4 text-4xl" />
              <span className="text-sm text-[#003b4d]">CUTTING-EDGE RESEARCH METHODS</span>
            </span>
          </div>
          {/* Card 5 */}
          <div className="bg-[#d4f1f7] p-4 shadow-lg shadow-[#80d4f0]/50 flex justify-between items-center rounded-lg">
            <span className="flex items-center">
              <FaBrain className="text-[#41b9d0] mr-4 text-4xl" />
              <span className="text-sm text-[#003b4d]">NEURAL NETWORKS & MACHINE LEARNING</span>
            </span>
          </div>
          {/* Card 6 */}
          <div className="bg-[#d4f1f7] p-4 shadow-lg shadow-[#80d4f0]/50 flex justify-between items-center rounded-lg">
            <span className="flex items-center">
              <FaLaptopCode className="text-[#41b9d0] mr-4 text-4xl" />
              <span className="text-sm text-[#003b4d]">BUILDING SMART SOFTWARE SYSTEMS</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AidsStudying;
