import React from "react";
import Slider from "react-slick"; // Importing react-slick
import rahulImage from "../../assets/images/user.png";
import priyaImage from "../../assets/images/user.png";
import ravi1Image from "../../assets/images/user.png";
import nehaImage from "../../assets/images/user.png";
import ravi2Image from "../../assets/images/user.png";
import aishaImage from "../../assets/images/user.png";
import newImage from "../../assets/images/testimony.webp"; // New Image for the right section

function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma - Junior Developer",
      department: "Computer Science",
      year: "Batch-24",
      text: '"ICEM provided me with the skills and knowledge I needed to succeed in the tech world. The faculty and resources are top-notch!"',
      image: rahulImage,
    },
    {
      name: "Priya Deshmukh - Software Engineer Trainee",
      department: "Computer Science",
      year: "Batch-23",
      text: '"The exposure to real-world projects and internships helped me land a job at a leading tech firm straight out of college! The curriculum is well-structured."',
      image: priyaImage,
    },
    {
      name: "Ravi Mehta - Junior Software Engineer",
      department: "Computer Science",
      year: "Batch-25",
      text: '"ICEM is a fantastic place to study, with the best infrastructure and an extremely supportive environment! From well-equipped labs to knowledgeable professors."',
      image: ravi1Image,
    },
    {
      name: "Neha Joshi - Software Developer Intern",
      department: "Computer Science",
      year: "Batch-24",
      text: '"The practical experience I gained at ICEM really helped me adapt quickly in the tech industry! The focus on real-world applications and exposure to emerging technologies was invaluable."',
      image: nehaImage,
    },
    {
      name: "Ravi Kumar - Front-End Developer Intern",
      department: "Computer Science",
      year: "Batch-24",
      text: '"I had access to top-tier resources and mentorship, making my learning journey smooth and enriching! ICEM\'s environment encouraged creativity and collaboration."',
      image: ravi2Image,
    },
    {
      name: "Aisha Ali - Junior Web Developer",
      department: "Computer Science",
      year: "Batch-25",
      text: '"The real-world challenges and hands-on projects at ICEM were the highlight of my college life! The faculty ensures that we are always up-to-date with the latest industry trends."',
      image: aishaImage,
    },
    {
      name: "Rahul Sharma - Junior Developer",
      department: "Computer Science",
      year: "Batch-24",
      text: '"ICEM provided me with the skills and knowledge I needed to succeed in the tech world. The faculty and resources are top-notch!"',
      image: rahulImage,
    },
    {
      name: "Priya Deshmukh - Software Engineer Trainee",
      department: "Computer Science",
      year: "Batch-23",
      text: '"The exposure to real-world projects and internships helped me land a job at a leading tech firm straight out of college! The curriculum is well-structured."',
      image: priyaImage,
    },
    {
      name: "Ravi Mehta - Junior Software Engineer",
      department: "Computer Science",
      year: "Batch-25",
      text: '"ICEM is a fantastic place to study, with the best infrastructure and an extremely supportive environment! From well-equipped labs to knowledgeable professors."',
      image: ravi1Image,
    },
    {
      name: "Neha Joshi - Software Developer Intern",
      department: "Computer Science",
      year: "Batch-24",
      text: '"The practical experience I gained at ICEM really helped me adapt quickly in the tech industry! The focus on real-world applications and exposure to emerging technologies was invaluable."',
      image: nehaImage,
    },
    {
      name: "Ravi Kumar - Front-End Developer Intern",
      department: "Computer Science",
      year: "Batch-24",
      text: '"I had access to top-tier resources and mentorship, making my learning journey smooth and enriching! ICEM\'s environment encouraged creativity and collaboration."',
      image: ravi2Image,
    },
    {
      name: "Natasha kapoor - Junior Web Developer",
      department: "Computer Science",
      year: "Batch-25",
      text: '"The real-world challenges and hands-on projects at ICEM were the highlight of my college life! The faculty ensures that we are always up-to-date with the latest industry trends."',
      image: aishaImage,
    },
  ];

  const settings = {
    dots: true, // Navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 1 slide at a time (to ensure each slide holds 2 items)
    slidesToScroll: 1,
    vertical: true, // Enable vertical scrolling
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
          vertical: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: true,
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
    <div className="mb-4 px-8 md:px-16">
      {/* Main Heading outside the white rectangle */}
      <h2 className="text-4xl font-semibold text-[#6095ff] text-center mb-8">
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
                  <div className="p-6 flex flex-col mb-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={pair[0].image}
                        alt={pair[0].name}
                        className="w-16 h-16 rounded-full mr-4"
                      />
                      <div className="text-left">
                        <p className="text-lg font-semibold text-[#000000]">
                          {pair[0].name}
                        </p>
                        <hr className="my-1 border-t border-gray-300" />
                        <p className="text-sm text-gray-500">
                          {pair[0].department} | {pair[0].year}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600">{pair[0].text}</p>
                  </div>

                  {/* Second Card (for the next testimonial) */}
                  {pair[1] && (
                    <div className="p-6 flex flex-col mb-6">
                      <div className="flex items-center mb-4">
                        <img
                          src={pair[1].image}
                          alt={pair[1].name}
                          className="w-16 h-16 rounded-full mr-4"
                        />
                        <div className="text-left">
                          <p className="text-lg font-semibold text-[#000000]">
                            {pair[1].name}
                          </p>
                          <hr className="my-1 border-t border-gray-300" />
                          <p className="text-sm text-gray-500">
                            {pair[1].department} | {pair[1].year}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600">{pair[1].text}</p>
                    </div>
                  )}
                </div>
              ))}
            </Slider>
          </div>

          {/* New Section - 40% with Image */}
          <div className="w-2/5">
            <img
              src={newImage}
              alt="New Image"
              className="w-full h-full object-cover shadow-lg transform scale-x-[-1]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
