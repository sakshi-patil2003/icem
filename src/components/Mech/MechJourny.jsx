import React from 'react';
import Slider from 'react-slick'; // Import react-slick for carousel functionality
import vandar from '../../assets/images/logos/abc.svg'; // Company logo
import micro from '../../assets/images/logos/Microsoft.jpg'; // Company logo
import ias from '../../assets/images/logos/ias.jpg'; // Company logo
import tesla from '../../assets/images/logos/tesla.jpg'; // Company logo
import army from '../../assets/images/logos/army.png'; // Company logo
import abn from '../../assets/images/logos/abn.jpg'; // Company logo
import hansala from '../../assets/images/Hansala.png'
import arpita from '../../assets/images/Arpita.png'
import nikhil from '../../assets/images/Nikhil.png'
import ankur from '../../assets/images/Ankur.png'
import nilesh from '../../assets/images/Nileshkumar.png'
import apurv from '../../assets/images/Apoorva.png'
// Successor Data (updated with location, degree, and company logo)
const successors = [
  {
    id: 1,
    name: 'Hansala',
    image: hansala,
    details: (<>'an Indira alumnus who graduated in 2013, secured a position as a Mechanical Engineer at Vanderlande. Presently, he is based in Jidah, <strong>Saudi Arabia</strong>.'</>),
    location: 'Jidah, Saudi Arabia',
    degree: '(Mechanical Engineer)',
    companyLogo: vandar
  },
  {
    id: 2,
    name: 'Arpita Jha',
    image: arpita,
    details: (<>'An exemplary scholar from Indira, initially served as a content writer.  she received an <strong>Internship+ PPO offer from Microsoft</strong>, but instead she chose to embark on her entrepreneurial journey.'</>),
    location: 'India',
    degree: '(Computer Engineering) ',
    companyLogo:micro
  },
  {
    id: 3,
    name: 'Nikhil Pawar',
    image: nikhil,
    details: (<>'A former student of Indira, commenced his professional journey at Bridgestone in 2013 & presently holds the esteemed position of a <strong>global supply manager at Tesla in Germany </strong> .'</>),
    location: 'Germany',
    degree: '(Mechanical Engineering)',
    companyLogo: tesla
  },
  {
    id: 4,
    name: 'Major Ankur Tyagi',
    image: ankur,
    details: (<>'One of our esteemed students, holds the rank of Major in the <strong>Indian Army</strong>. Indira takes immense pride in having him as an alumnus.'</>),
    location: 'India',
    degree: '(Mechanical Engineering) ',
    companyLogo: army
  },
  {
    id: 5,
    name: 'Nileshkumar Kshirsagar',
    image: nilesh,
    details: (<>'An alumnus of Indira who graduated in 2011, 
    has displayed exceptional 
    achievements and is currently
     serving as an <strong>IAS officer</strong> in the 
     Chhattisgarh Cadre. (MBA)'</>),
    location: 'Chhattisgarh, India',
    degree: '(MBA) ',
    companyLogo: ias
  },
  {
    id: 6,
    name: 'Apoorva Kakkar',
    image: apurv,
    details: (<>'Our alumni Apoorva Kakkar, a 
      Mechanical Engineering passout 
      works as a Business Data Modeller 
      at <strong>ABN Amro Bank, Netherlands.</strong> 
       '</>),
    location: 'Netherland',
    degree: '(Mechanical Engineering)',
    companyLogo: abn
  },
];

const MechJourny = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at once
    slidesToScroll: 1, // Scroll 1 card at a time
    autoplay: true,
    autoplaySpeed: 3000, // Slide every 3 seconds
    arrows: true,  // Show navigation arrows
    dots: true,    // Show dot navigation
    responsive: [
      {
        breakpoint: 1024, // Tablet and desktops
        settings: {
          slidesToShow: 2, // Show 2 cards on tablets and smaller screens
        },
      },
      {
        breakpoint: 768, // Mobile screens
        settings: {
          slidesToShow: 1, // Show 1 card on mobile screens
        },
      },
    ],
  };

  return (
    <div className="w-full h-auto bg-white my-2 shadow-lg overflow-hidden" >
    <h3 className='text-center font-bold text-2xl text-[#0c3249]  mb-6   '>Alumni Speak</h3>
         {/* Slider for the 3 Successor Cards */}
      <Slider {...settings}>
        {successors.map((successor) => (
          <div
            key={successor.id}
            className="w-full h-auto bg-white rounded-lg shadow-lg p-4 flex flex-col items-center mx-4 relative"  // Flexbox layout and relative positioning
          >
            {/* Company Logo on left side */}
            <div className="absolute top-0 left-0 p-2">
              <img
                src={successor.companyLogo}
                alt={`${successor.name} Company Logo`}
                className="w-20 h-20 object-contain pl-2"
              />
            </div>

            {/* Successor's Image (Centered within card) */}
            <div className="flex justify-center items-center w-full h-28 mb-2 flex-shrink-0 rounded-lg overflow-hidden  ">
              <img
                src={successor.image}
                alt={successor.name}
                className="w-22 h-22 object-cover rounded-full shadow-lg"
              />
            </div>

            {/* Successor's Name and Degree */}
            <div className="text-center font-bold">
              <h3 className="text-lg font-semibold mb-1">{successor.name}</h3>
              <p className="text-xs text-gray-600">{successor.degree}</p>
              <p className="text-xs text-gray-600">{successor.location}</p>
            </div>

            {/* Successor's Details */}
            <div className="mt-2 text-center">
              <p className="text-xs text-gray-600">{successor.details}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MechJourny;

