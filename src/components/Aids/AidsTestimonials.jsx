import Slider from "react-slick"; // Importing react-slick

// Image Imports
import vikramImage from "../../assets/images/user-aids.png";
import simranImage from "../../assets/images/user-aids.png";
import arjunImage from "../../assets/images/user-aids.png";
import meeraImage from "../../assets/images/user-aids.png";
import karanImage from "../../assets/images/user-aids.png";
import nishaImage from "../../assets/images/user-aids.png";

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
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className=" px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl mt-4 font-semibold text-[#0c3249] text-center">
        What Our Students Say
      </h2>

      <div className="bg-white shadow-lg p-4 sm:p-6">
        <Slider {...settings}>
          {testimonials.map((testimonial, i) => (
            <div key={i} className="p-2">
              <div className="bg-[#0c3249] border-4 border-[#41b9d0] rounded-lg 
                  p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300
                  w-[90%] sm:w-auto mx-auto sm:mx-0 h-auto sm:h-[320px]"> {/* Reduced height for mobile */}
                
                {/* Profile Icon at the Top */}
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white shadow-lg"
                  />
                </div>

                <p className="text-lg font-semibold text-white text-center">{testimonial.name}</p>
                <p className="text-sm text-[#d3d1d1] text-center">
                  {testimonial.department} | {testimonial.year}
                </p>
                <hr className="my-1 border-t border-gray-300" />
                <p className="text-[#e1dede] text-center">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default MechTestimonials;
