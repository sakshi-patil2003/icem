import React from "react";
import Slider from "react-slick"; // Importing react-slick

// Image Imports
import vikramImage from "../../assets/images/user-green.png";
import simranImage from "../../assets/images/user-green.png";
import arjunImage from "../../assets/images/user-green.png";
import meeraImage from "../../assets/images/user-green.png";
import karanImage from "../../assets/images/user-green.png";
import nishaImage from "../../assets/images/user-green.png";
import aartiImage from "../../assets/images/user-green.png";
import newImage from "../../assets/images/testimony.webp"; // New Image for the right section

function EntcTestimonials() {
  const testimonials = [
    {
      name: "Vikram Singh - Junior Electronics Engineer",
      department: "Electrical & Electronics Engineering",
      year: "Batch-24",
      text: '"ICEM equipped me with the essential skills and hands-on training required to thrive in the electronics sector. The professors and lab facilities are excellent!"',
      image: vikramImage,
    },
    {
      name: "Simran Kaur - Electronics Engineer Trainee",
      department: "Electrical & Electronics Engineering",
      year: "Batch-23",
      text: '"ICEM offered me amazing exposure to real-world projects and internships, helping me secure a position at a leading electronics firm straight out of college."',
      image: simranImage,
    },
    {
      name: "Arjun Rao - Junior Electronics Engineer",
      department: "Electrical & Electronics Engineering",
      year: "Batch-25",
      text: '"The practical experience I gained at ICEM has been invaluable. From cutting-edge labs to industry-specific knowledge, ICEM provided all the tools I needed to excel."',
      image: arjunImage,
    },
    {
      name: "Meera Patel - Electronics Engineering Intern",
      department: "Electrical & Electronics Engineering",
      year: "Batch-24",
      text: '"The hands-on experience I received at ICEM helped me adapt quickly in the competitive electronics industry. The focus on real-world applications was crucial."',
      image: meeraImage,
    },
    {
      name: "Karan Desai - PCB Design Intern",
      department: "Electrical & Electronics Engineering",
      year: "Batch-24",
      text: '"The resources, mentorship, and encouragement to think outside the box made my learning journey at ICEM enriching. The labs are state-of-the-art."',
      image: karanImage,
    },
    {
      name: "Nisha Gupta - Junior Electronics Design Engineer",
      department: "Electrical & Electronics Engineering",
      year: "Batch-25",
      text: '"ICEM’s practical approach and industry-relevant curriculum helped me adapt quickly to the real-world challenges in electronics engineering."',
      image: nishaImage,
    },
    {
        name: "Vikram Singh - Junior Electronics Engineer",
        department: "Electrical & Electronics Engineering",
        year: "Batch-24",
        text: '"ICEM equipped me with the essential skills and hands-on training required to thrive in the electronics sector. The professors and lab facilities are excellent!"',
        image: vikramImage,
      },
    {
      name: "Aarti Sharma - Electronics Engineering Trainee",
      department: "Electrical & Electronics Engineering",
      year: "Batch-25",
      text: '"I gained immense practical knowledge through hands-on projects and internships at ICEM, which helped me secure a full-time position in electronics design."',
      image: aartiImage,
    },
    {
      name: "Nisha Gupta - Junior Electronics Design Engineer",
      department: "Electrical & Electronics Engineering",
      year: "Batch-25",
      text: '"The exposure to cutting-edge electronics technologies and real-world applications at ICEM was the highlight of my learning experience."',
      image: nishaImage,
    },
    {
      name: "Aarti Sharma - Junior Electronics Engineer",
      department: "Electrical & Electronics Engineering",
      year: "Batch-25",
      text: '"ICEM’s faculty and infrastructure provided the perfect foundation for my career in electronics engineering. The hands-on projects were crucial in shaping my skills."',
      image: aartiImage,
    },
    {
      name: "Simran Kaur - Electronics Engineer Trainee",
      department: "Electrical & Electronics Engineering",
      year: "Batch-23",
      text: '"ICEM provided the perfect balance of theoretical knowledge and practical exposure that helped me transition smoothly into the electronics industry."',
      image: simranImage,
    },
    {
      name: "Vikram Singh - Junior Electronics Engineer",
      department: "Electrical & Electronics Engineering",
      year: "Batch-24",
      text: '"I learned not just the fundamentals of electronics, but also the latest industry trends and technologies that are now shaping the field."',
      image: vikramImage,
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
    <div className="mb-8 px-8 md:px-16 ">
      {/* Main Heading outside the white rectangle */}
      <h2 className="text-4xl font-semibold text-[#00B5A0] text-center mb-8">
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
                  <div className="p-6 flex flex-col mb-6 bg-[#E0F7F1] border border-[#00B5A0] rounded-lg">
                    <div className="flex items-center mb-4">
                      <img
                        src={pair[0].image}
                        alt={pair[0].name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div className="text-left">
                        <p className="text-lg font-semibold text-[#2F2F2F]">
                          {pair[0].name}
                        </p>
                        <hr className="my-1 border-t border-gray-300" />
                        <p className="text-sm text-[#00B5A0]">
                          {pair[0].department} | {pair[0].year}
                        </p>
                      </div>
                    </div>
                    <p className="text-[#2F2F2F]">{pair[0].text}</p>
                  </div>

                  {/* Second Card (for the next testimonial) */}
                  {pair[1] && (
                    <div className="p-6 flex flex-col mb-6 bg-[#E0F7F1] border border-[#00B5A0] rounded-lg">
                      <div className="flex items-center mb-4">
                        <img
                          src={pair[1].image}
                          alt={pair[1].name}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div className="text-left">
                          <p className="text-lg font-semibold text-[#2F2F2F]">
                            {pair[1].name}
                          </p>
                          <hr className="my-1 border-t border-gray-300" />
                          <p className="text-sm text-[#00B5A0]">
                            {pair[1].department} | {pair[1].year}
                          </p>
                        </div>
                      </div>
                      <p className="text-[#2F2F2F]">{pair[1].text}</p>
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

export default EntcTestimonials;
