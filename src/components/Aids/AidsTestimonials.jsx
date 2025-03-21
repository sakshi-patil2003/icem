import Slider from "react-slick"; // Importing react-slick

// Image Imports
import vikramImage from "../../assets/images/user-aids.png";
import simranImage from "../../assets/images/user-aids.png";
import arjunImage from "../../assets/images/user-aids.png";
import meeraImage from "../../assets/images/user-aids.png";
import karanImage from "../../assets/images/user-aids.png";
import nishaImage from "../../assets/images/user-aids.png";
import aartiImage from "../../assets/images/user-aids.png";
// import newImage from "../../assets/images/testimony.webp"; // New Image for the right section
import force from '../../assets/images/logos/force.png'
import tata from "../../assets/images/logos/tata.png"
import bluestar from "../../assets/images/logos/bluestar.png"
import techM from "../../assets/images/logos/techM.png"
import thys from "../../assets/images/logos/thys.png"
import kpit from "../../assets/images/logos/kpit.png"
import rudder from "../../assets/images/logos/rudder.png"
import thai from "../../assets/images/logos/thai.png"
import hettich from "../../assets/images/logos/hettich.png"
import faurecia from "../../assets/images/logos/faurecia.png"
import vander from "../../assets/images/logos/vander.png"
import skf from "../../assets/images/logos/skf.png"
function MechTestimonials() {
    const testimonials = [
        {
          name: "Ravi Sharma - AI Trainee",
          department: "Artificial Intelligence",
          year: "Batch-22",
          text: '"ICEM provided me with a strong foundation in AI and machine learning. The projects and faculty support helped me secure an internship in AI right after graduation!"',
          image: vikramImage,
        },
        {
          name: "Priya Mehta - Data Science Intern",
          department: "Data Science",
          year: "Batch-21",
          text: '"The hands-on experience with real-world data and the emphasis on analytics gave me the edge I needed to land a Data Science internship immediately after completing my studies."',
          image: simranImage,
        },
        {
          name: "Ankit Verma - Machine Learning Intern",
          department: "Artificial Intelligence",
          year: "Batch-23",
          text: '"The AI curriculum at ICEM is incredibly comprehensive! It helped me transition smoothly into my role as a Machine Learning Intern, where I am gaining hands-on experience with deep learning technologies."',
          image: arjunImage,
        },
        {
          name: "Sneha Rao - Data Analyst Intern",
          department: "Data Science",
          year: "Batch-22",
          text: '"ICEM’s approach to Data Science is hands-on, giving me the skills to tackle real-world challenges. The faculty helped me secure a Data Analyst Internship, where I am learning from industry professionals."',
          image: meeraImage,
        },
        {
          name: "Karan Joshi - AI Developer Intern",
          department: "Artificial Intelligence",
          year: "Batch-22",
          text: '"ICEM’s AI labs and research projects helped me work on cutting-edge technologies in AI. Thanks to the mentorship I received, I secured an AI Developer Internship at a leading tech company."',
          image: karanImage,
        },
        {
          name: "Sanya Gupta - Data Science Intern",
          department: "Data Science",
          year: "Batch-23",
          text: '"ICEM gave me access to the best tools and technologies in Data Science. The real-world data challenges I faced helped me land a Data Science Internship with a top tech company!"',
          image: nishaImage,
        },
        {
          name: "Amit Kumar - AI Research Intern",
          department: "Artificial Intelligence",
          year: "Batch-23",
          text: '"The AI curriculum at ICEM was rigorous, and the practical experience prepared me for my current role as an AI Research Intern. The skills I gained here helped me build a strong foundation for my career."',
          image: aartiImage,
        },
        {
          name: "Neha Bhatia - Junior Data Engineer",
          department: "Data Science",
          year: "Batch-24",
          text: '"ICEM’s strong focus on big data and analytics gave me the expertise I needed to land a Junior Data Engineer role, where I am continuing to learn and grow within the industry."',
          image: aartiImage,
        },
        {
          name: "Vishal Patel - AI Trainee",
          department: "Artificial Intelligence",
          year: "Batch-23",
          text: '"ICEM’s AI program taught me to work with state-of-the-art AI technologies. As an AI Trainee, I’m now learning the application of machine learning models in real-world projects."',
          image: aartiImage,
        },
        {
          name: "Tanu Sharma - Data Science Intern",
          department: "Data Science",
          year: "Batch-25",
          text: '"The practical exposure to data analytics tools at ICEM was amazing! The faculty provided excellent guidance, which helped me land a Data Science Internship with an innovative company."',
          image: aartiImage,
        },
      ];
      

  const settings = {
    dots: true, // Navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 1 slide at a time (to ensure each slide holds 2 items)
    slidesToScroll: 1,
    vertical: false, // Change to false for horizontal scrolling
    centerMode: true, // Center the active slide
    centerPadding: "0", // No padding around centered slide
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed (3 seconds here)
    pauseOnHover: false, // Disable stopping on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false, // Adjust for responsiveness
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false, // Adjust for responsiveness
        },
      },
    ],
  };

  // Function to pair testimonials for each slide
  const pairedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    pairedTestimonials.push([testimonials[i], testimonials[i + 1]]);
  }

  return (
    <div className="mb-8 px-8 md:px-16">
     <div className="flex justify-around">
       {/* Main Heading outside the white rectangle */}
       <h2 className="text-4xl font-semibold text-[#0c3249] text-center mb-8">
        What Our Students Say
      </h2>
      <h2 className="text-4xl font-semibold text-[#0c3249] text-center mb-8">
        Our Recruiters
      </h2>
     </div>

      {/* Single white rectangle container */}
      <div className="bg-white shadow-lg">
        <div className="flex justify-between items-center gap-4">
          {/* Testimonial Section - 60% */}
          <div className="w-3/6">
            {/* Slick Slider */}
            <Slider {...settings}>
              {pairedTestimonials.map((pair, index) => (
                <div key={index} className="flex flex-col">
                  {/* First Card: Profile and Testimonial */}
                  <div className="p-6 flex flex-col mb-6 bg-[#0c3249] border border-[#41b9d0] rounded-lg">
                    <div className="flex items-center mb-4">
                      <img
                        src={pair[0].image}
                        alt={pair[0].name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div className="text-left">
                        <p className="text-lg font-semibold text-[#ffffff]">
                          {pair[0].name}
                        </p>
                        <hr className="my-1 border-t border-gray-300" />
                        <p className="text-sm text-[#d3d1d1]">
                          {pair[0].department} | {pair[0].year}
                        </p>
                      </div>
                    </div>
                    <p className="text-[#e1dede]">{pair[0].text}</p>
                  </div>

                  {/* Second Card (for the next testimonial) */}
                  {pair[1] && (
                    <div className="p-6 flex flex-col mb-6 bg-[#0c3249] border border-[#41b9d0] rounded-lg">
                      <div className="flex items-center mb-4">
                        <img
                          src={pair[1].image}
                          alt={pair[1].name}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                       <div className="text-left">
                        <p className="text-lg font-semibold text-[#ffffff]">
                          {pair[0].name}
                        </p>
                        <hr className="my-1 border-t border-gray-300" />
                        <p className="text-sm text-[#d3d1d1]">
                          {pair[0].department} | {pair[0].year}
                        </p>
                      </div>
                      </div>
                      <p className="text-[#e1dede]">{pair[1].text}</p>
                    </div>
                  )}
                </div>
              ))}
            </Slider>
          </div>

          {/* New Section - 40% with Image */}
          <div class="grid grid-cols-3 grid-rows-4 gap-4">
                    <img src={tata} alt="Image 1" class="w-full h-auto"/>
                    <img src={techM} alt="Image 2" class="w-full h-auto"/>
                    <img src={faurecia} alt="Image 3" class="w-full h-auto"/>
                    <img src={vander} alt="Image 4" class="w-full h-auto"/>
                    <img src={thys} alt="Image 5" class="w-full h-auto"/>
                    <img src={thai} alt="Image 6" class="w-full h-auto"/>
                    <img src={skf} alt="Image 7" class="w-full h-auto"/>
                    <img src={kpit} alt="Image 8" class="w-full h-auto"/>
                    <img src={rudder} alt="Image 9" class="w-full h-auto"/>
                    <img src={hettich} alt="Image 10" class="w-full h-auto"/>
                    <img src={bluestar} alt="Image 11" class="w-full h-auto"/>
                    <img src={force} alt="Image 12" class="w-full h-auto"/>
                </div>
        </div>
      </div>
    </div>
  );
}

export default MechTestimonials;
