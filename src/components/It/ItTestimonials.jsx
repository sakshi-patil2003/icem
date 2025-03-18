import React from "react";
import Slider from "react-slick"; // Importing react-slick

// Image Imports
import vikramImage from "../../assets/images/user-aids.png";
import simranImage from "../../assets/images/user-aids.png";
import arjunImage from "../../assets/images/user-aids.png";
import meeraImage from "../../assets/images/user-aids.png";
import karanImage from "../../assets/images/user-aids.png";
import nishaImage from "../../assets/images/user-aids.png";
import aartiImage from "../../assets/images/user-aids.png";
import raviImage from "../../assets/images/user-aids.png"; // Added missing import
import anitaImage from "../../assets/images/user-aids.png"; // Added missing import
import rajeshImage from "../../assets/images/user-aids.png"; // Added missing import
import newImage from "../../assets/images/testimony.webp"; // New Image for the right section

function ItTestimonials() {
  const testimonials = [
    {
      name: "Vikram Singh - Junior Software Developer",
      department: "Information Technology",
      year: "Batch-24",
      text: '"ICEM equipped me with the technical skills and problem-solving mindset that helped me excel in the IT industry. The faculty is highly supportive and knowledgeable!"',
      image: vikramImage,
    },
    {
      name: "Simran Kaur - IT Intern",
      department: "Information Technology",
      year: "Batch-23",
      text: '"ICEM provided me with hands-on experience in coding and software development, which helped me secure a job in a leading tech company straight after graduation."',
      image: simranImage,
    },
    {
      name: "Arjun Rao - Junior Web Developer",
      department: "Information Technology",
      year: "Batch-25",
      text: '"The exposure to various programming languages and technologies at ICEM made me confident in my coding skills. The environment is dynamic, and the faculty is top-notch."',
      image: arjunImage,
    },
    {
      name: "Meera Patel - Data Analyst Intern",
      department: "Information Technology",
      year: "Batch-24",
      text: '"ICEM’s focus on practical learning through internships and real-world projects gave me the confidence to adapt to industry standards quickly. It was an enriching experience."',
      image: meeraImage,
    },
    {
      name: "Karan Desai - Cloud Computing Intern",
      department: "Information Technology",
      year: "Batch-24",
      text: '"The resources and mentorship provided by ICEM helped me develop a solid understanding of cloud technologies. I had access to cutting-edge tools and guidance to enhance my skills."',
      image: karanImage,
    },
    {
      name: "Nisha Gupta - Junior Network Engineer",
      department: "Information Technology",
      year: "Batch-25",
      text: '"ICEM’s curriculum covered everything from basic networking to advanced cloud technologies, providing me with the necessary foundation to start my career in IT with confidence."',
      image: nishaImage,
    },
    {
      name: "Aarti Sharma - IT Support Engineer",
      department: "Information Technology",
      year: "Batch-25",
      text: '"The hands-on projects and real-world challenges at ICEM made all the difference in my learning journey. I feel prepared to handle any IT-related challenges in my career."',
      image: aartiImage,
    },
    {
      name: "Ravi Kumar - Software Engineer Intern",
      department: "Information Technology",
      year: "Batch-25",
      text: '"The projects at ICEM exposed me to the latest development trends and tools, giving me the skills to work in fast-paced IT environments. I gained practical experience that set me apart."',
      image: raviImage,
    },
    {
      name: "Anita Mehta - Web Developer Trainee",
      department: "Information Technology",
      year: "Batch-25",
      text: '"ICEM has an amazing infrastructure and expert faculty, which helped me master the art of web development. I now feel more confident working on real-world applications."',
      image: anitaImage,
    },
    {
      name: "Rajesh Kumar - Cybersecurity Intern",
      department: "Information Technology",
      year: "Batch-25",
      text: '"ICEM\'s emphasis on cybersecurity and real-world applications helped me secure a position at a leading cybersecurity firm. The hands-on learning experiences were invaluable."',
      image: rajeshImage,
    },
    {
      name: "Arjun Rao - Junior Web Developer",
      department: "Information Technology",
      year: "Batch-25",
      text: '"The exposure to various programming languages and technologies at ICEM made me confident in my coding skills. The environment is dynamic, and the faculty is top-notch."',
      image: arjunImage,
    },
    {
      name: "Priya Sharma - IT Consultant",
      department: "Information Technology",
      year: "Batch-25",
      text: '"I owe my success to the rigorous coursework and practical exposure I received at ICEM. It’s a great place to learn and grow in the ever-evolving IT field."',
      image: rajeshImage,
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
      {/* Main Heading outside the white rectangle */}
      <h2 className="text-4xl font-semibold text-[#001E5D] text-center mb-8">
        What Our Students Say
      </h2>

      {/* Single white rectangle container */}
      <div className="bg-white shadow-lg">
        <div className="flex justify-between items-center gap-4">
          {/* Testimonial Section - 60% */}
          <div className="w-3/5">
            {/* Slick Slider */}
            <Slider {...settings}>
              {pairedTestimonials.map((pair, index) => (
                <div key={index} className="flex flex-col">
                  {/* First Card: Profile and Testimonial */}
                  <div className="p-6 flex flex-col mb-6 bg-[#e6f2ff] border border-[#001E5D] rounded-lg">
                    <div className="flex items-center mb-4">
                      <img
                        src={pair[0].image}
                        alt={pair[0].name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div className="text-left">
                        <p className="text-lg font-semibold text-[#4e4e4e]">
                          {pair[0].name}
                        </p>
                        <hr className="my-1 border-t border-gray-300" />
                        <p className="text-sm text-[#001E5D]">
                          {pair[0].department} | {pair[0].year}
                        </p>
                      </div>
                    </div>
                    <p className="text-[#4e4e4e]">{pair[0].text}</p>
                  </div>

                  {/* Second Card (for the next testimonial) */}
                  {pair[1] && (
                    <div className="p-6 flex flex-col mb-6 bg-[#e6f2ff] border border-[#001E5D] rounded-lg">
                      <div className="flex items-center mb-4">
                        <img
                          src={pair[1].image}
                          alt={pair[1].name}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div className="text-left">
                          <p className="text-lg font-semibold text-[#4e4e4e]">
                            {pair[1].name}
                          </p>
                          <hr className="my-1 border-t border-gray-300" />
                          <p className="text-sm text-[#001E5D]">
                            {pair[1].department} | {pair[1].year}
                          </p>
                        </div>
                      </div>
                      <p className="text-[#4e4e4e]">{pair[1].text}</p>
                    </div>
                  )}
                </div>
              ))}
            </Slider>
          </div>

          {/* Image Section - Right Side (40%) */}
          <div className="w-2/5">
            <img
              src={newImage}
              alt="Testimonial"
              className="rounded-lg shadow-md w-full h-full transform scale-x-[-1]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItTestimonials;
