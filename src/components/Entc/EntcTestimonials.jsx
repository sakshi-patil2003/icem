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
      name: "Aarti Sharma - Electronics Engineering Trainee",
      department: "Electrical & Electronics Engineering",
      year: "Batch-25",
      text: '"I gained immense practical knowledge through hands-on projects and internships at ICEM, which helped me secure a full-time position in electronics design."',
      image: aartiImage,
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
    <div className="px-4 md:px-10">
      <h2 className="text-2xl md:text-4xl mt-4 font-semibold text-[#026670] text-center">
        What Our Students Say
      </h2>

      <div className="bg-white shadow-lg p-4 sm:p-6">
        <Slider {...settings}>
          {testimonials.map((testimonial, i) => (
            <div key={i} className="p-2">
              <div className="bg-[#026670] border-4 border-[#00B5A0] rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 w-[90%] sm:w-auto mx-auto sm:mx-0 h-auto sm:h-[320px]">
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

export default EntcTestimonials;
