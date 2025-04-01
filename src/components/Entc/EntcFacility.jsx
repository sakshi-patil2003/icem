import { useEffect } from 'react';
import { gsap } from 'gsap';
// Import images
import basicElectronicsImg from '../../assets/images/Basic Electronics Lab.jpg';
import digitalElectronicsImg from '../../assets/images/Digital Electronics Lab.jpg';
import digitalCommunicationImg from '../../assets/images/Digital Communication Lab.jpg';
import softwareLabImg from '../../assets/images/Software Lab.jpg';

const EntcFacility = () => {
  const laboratories = [
    {
      name: "Basic Electronics Lab",
      details: "Basic Electronics Lab is well equipped as per UOP norms. Lab is used for 1st Year Engineering Practicals.",
      equipment: ["CRO", "Powersupply", "Function Generators", "DMM"],
      bgImage: basicElectronicsImg
    },
    {
      name: "Digital Electronics Lab",
      details: "Digital Lab is well equipped as per UOP norms. Lab is used by Second Year Engineering students.",
      equipment: ["Digital Trainer Kits", "Digital IC tester"],
      bgImage: digitalElectronicsImg
    },
    {
      name: "Digital Communication Lab",
      details: "Digital Communication Lab is well equipped as per UOP norms. Lab is used by E&TC Engineering students.",
      equipment: ["DSO", "Spectrum Analyzer", "CRO", "Power Supply", "Analog Communication Kits", "Digital Communication Kits"],
      bgImage: digitalCommunicationImg
    },
    {
      name: "Software Lab",
      details: "Software Lab is well equipped as per UOP norms. Lab is used for E&TC Engineering Practicals.",
      equipment: ["VHDL Software", "Tubo C", "NASM", "Arduino", "Microcontroller Kits", "Keil Software"],
      bgImage: softwareLabImg
    }
  ];

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    const handleMouseEnter = (e) => {
      const card = e.currentTarget;
      const textContainer = card.querySelector('.card-text');
      const overlay = card.querySelector('.card-overlay');
      const labName = card.querySelector('.card-name');
      gsap.to(overlay, { opacity: 1, scaleX: 1, scaleY: 1, x: 0, y: 0, duration: 0.5, ease: 'power2.out' });
      gsap.to(textContainer, { opacity: 1, scaleX: 1, scaleY: 1, x: 0, y: 0, duration: 0.6, ease: 'power2.out' });
      gsap.to(labName, { y: -40, duration: 0.6, ease: 'power2.out' });
    };

    const handleMouseLeave = (e) => {
      const card = e.currentTarget;
      const textContainer = card.querySelector('.card-text');
      const overlay = card.querySelector('.card-overlay');
      const labName = card.querySelector('.card-name');
      gsap.to(overlay, { opacity: 0, scaleX: 0, scaleY: 0, x: '-100%', y: '100%', duration: 0.4, ease: 'power2.in' });
      gsap.to(textContainer, { opacity: 0, scaleX: 0, scaleY: 0, x: -20, y: 20, duration: 0.4, ease: 'power2.in' });
      gsap.to(labName, { y: 0, duration: 0.4, ease: 'power2.in' });
    };

    cards.forEach((card) => {
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="bg-[#F1F5F9] py-4">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#026670] mb-6 mt-2">Electronics and Telecommunication Engineering Laboratories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {laboratories.map((lab, index) => (
            <div key={index} className="card relative bg-cover bg-center rounded-lg shadow-lg p-6 hover:shadow-xl transition-all h-72"
                 style={{ backgroundImage: `url(${lab.bgImage})` }}>
              <div className="card-overlay absolute inset-0 bg-gradient-to-b from-transparent to-[#026670] opacity-0 z-10 transform scale-0 origin-bottom-left"></div>
              <div className="card-text absolute bottom-0 left-0 z-20 opacity-0 transform scale-0 translate-x-[-10px] translate-y-[20px] p-4">
                <h3 className="text-sm font-semibold text-white mb-2">{lab.details}</h3>
                <h4 className="text-sm font-bold text-white mb-2">Equipment</h4>
                <ul className="text-sm text-white list-disc pl-5">
                  {lab.equipment.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <p className="text-lg font-medium text-center text-[#374151] mt-4">{lab.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EntcFacility;
