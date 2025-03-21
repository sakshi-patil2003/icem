import React from 'react';
import AidsHero from '../components/Aids/AidsHero';
import AidsAbout from '../components/Aids/AidsAbout';
import AidsPointers from '../components/Aids/AidsPointers';
import AidsOverview from '../components/Aids/AidsOverview';
import AidsOfferings from '../components/Aids/AidsOfferings';
import AidsBrochure from '../components/Aids/AidsBrochure';
import AidsApply from '../components/Aids/AidsApply';
import AidsTestimonials from '../components/Aids/AidsTestimonials';
import AutoChatbot from '../components/AutoChatbot'; // Import AutoChatbot
import MechJourny from '../components/Mech/MechJourny';

function Aids() {
  return (
    <div>
      <AidsHero />  {/* Hero component for Aids */}
      <AidsPointers />  {/* Pointers section */}
      <AidsOverview />  {/* Overview section */}
      <AidsAbout />  {/* About section */}
      <AidsBrochure />  {/* Brochure section */}
      <AidsOfferings />  {/* Offerings section */}
      <AidsApply />  {/* Apply section */}
      <AidsTestimonials />  {/* Testimonials section */}
      
      {/* Include the chatbot on this specific page */}
      <AutoChatbot />
      <MechJourny/>
    </div>
  );
}

export default Aids;
