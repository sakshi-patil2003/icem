import React from "react";
import Slider from "react-slick"; // Importing react-slick

// Image Imports
import vikramImage from "../../assets/images/user-org-icon.png";
import simranImage from "../../assets/images/user-org.png";
import arjunImage from "../../assets/images/user-org-icon.png";
import meeraImage from "../../assets/images/user-org.png";
import karanImage from "../../assets/images/user-org-icon.png";
import nishaImage from "../../assets/images/user-org.png";
import aartiImage from "../../assets/images/user-org-icon.png";
import newImage from "../../assets/images/testimony.webp"; // New Image for the right section
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
      name: "Vikram Singh - Junior Mechanical Engineer",
      department: "Mechanical Engineering",
      year: "Batch-24",
      text: '"ICEM provided me with the skills and knowledge I needed to succeed in the engineering world. The faculty and resources are top-notch!"',
      image: vikramImage,
    },
    {
      name: "Simran Kaur - Mechanical Engineer Trainee",
      department: "Mechanical Engineering",
      year: "Batch-23",
      text: '"The exposure to real-world projects and internships helped me land a job at a leading manufacturing firm straight out of college! The curriculum is well-structured."',
      image: simranImage,
    },
    {
      name: "Arjun Rao - Junior Mechanical Engineer",
      department: "Mechanical Engineering",
      year: "Batch-25",
      text: '"ICEM is a fantastic place to study, with the best infrastructure and an extremely supportive environment! From well-equipped labs to knowledgeable professors."',
      image: arjunImage,
    },
    {
      name: "Meera Patel - Mechanical Engineering Intern",
      department: "Mechanical Engineering",
      year: "Batch-24",
      text: '"The practical experience I gained at ICEM really helped me adapt quickly in the engineering industry! The focus on real-world applications and exposure to emerging technologies was invaluable."',
      image: meeraImage,
    },
    {
      name: "Karan Desai - CAD Design Intern",
      department: "Mechanical Engineering",
      year: "Batch-24",
      text: '"I had access to top-tier resources and mentorship, making my learning journey smooth and enriching! ICEM\'s environment encouraged creativity and collaboration."',
      image: karanImage,
    },
    {
      name: "Nisha Gupta - Junior Design Engineer",
      department: "Mechanical Engineering",
      year: "Batch-25",
      text: '"The real-world challenges and hands-on projects at ICEM were the highlight of my college life! The faculty ensures that we are always up-to-date with the latest industry trends."',
      image: nishaImage,
    },
    {
      name: "Aarti Sharma - Junior Mechanical Engineer",
      department: "Mechanical Engineering",
      year: "Batch-25",
      text: '"The real-world challenges and hands-on projects at ICEM were the highlight of my college life! The faculty ensures that we are always up-to-date with the latest industry trends."',
      image: aartiImage,
    },
    {
        name: "Nisha Gupta - Junior Design Engineer",
        department: "Mechanical Engineering",
        year: "Batch-25",
        text: '"The real-world challenges and hands-on projects at ICEM were the highlight of my college life! The faculty ensures that we are always up-to-date with the latest industry trends."',
        image: nishaImage,
      },
      {
        name: "Aarti Sharma - Junior Mechanical Engineer",
        department: "Mechanical Engineering",
        year: "Batch-25",
        text: '"The real-world challenges and hands-on projects at ICEM were the highlight of my college life! The faculty ensures that we are always up-to-date with the latest industry trends."',
        image: aartiImage,
      },
      {
        name: "Nisha Gupta - Junior Design Engineer",
        department: "Mechanical Engineering",
        year: "Batch-25",
        text: '"The real-world challenges and hands-on projects at ICEM were the highlight of my college life! The faculty ensures that we are always up-to-date with the latest industry trends."',
        image: nishaImage,
      },
      {
        name: "Aarti Sharma - Junior Mechanical Engineer",
        department: "Mechanical Engineering",
        year: "Batch-25",
        text: '"The real-world challenges and hands-on projects at ICEM were the highlight of my college life! The faculty ensures that we are always up-to-date with the latest industry trends."',
        image: aartiImage,
      },
      {
        name: "Aarti Sharma - Junior Mechanical Engineer",
        department: "Mechanical Engineering",
        year: "Batch-25",
        text: '"The real-world challenges and hands-on projects at ICEM were the highlight of my college life! The faculty ensures that we are always up-to-date with the latest industry trends."',
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
    autoplaySpeed: 5000, // Set autoplay speed (3 seconds here)
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
     <div className='flex  justify-around'>
     <h2 className="text-4xl font-semibold text-[#ff7f4f] text-center mb-4 ">
        What Our Students Say
      </h2>
      <h2 className="text-4xl font-semibold text-[#ff7f4f] text-center ">
        Our Reqruiters
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
                  <div className="p-6 flex flex-col mb-6 bg-[#ffefda] border border-[#ff7f4f] rounded-lg">
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
                        <p className="text-sm text-[#ff7f4f]">
                          {pair[0].department} | {pair[0].year}
                        </p>
                      </div>
                    </div>
                    <p className="text-[#4e4e4e]">{pair[0].text}</p>
                  </div>

                  {/* Second Card (for the next testimonial) */}
                  {pair[1] && (
                    <div className="p-6 flex flex-col mb-6 bg-[#ffefda] border border-[#ff7f4f] rounded-lg">
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
                          <p className="text-sm text-[#ff7f4f]">
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

          {/* New Section - 40% with Image */}
         
      <div class="grid grid-cols-3 grid-rows-4   ">
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
