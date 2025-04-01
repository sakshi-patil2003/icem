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
import AidsHighlights from '../components/Aids/AidsHighlights';
import AidsInnovation from '../components/Aids/AidsInnovation';
import WhyChooseICEM from '../components/Aids/WhyChooseICEM';
import CareerProspects from '../components/Aids/CareerProspects';
import AdmissionsCTA from '../components/Aids/AdmissionsCTA';
import AidsBanner from '../components/Aids/AidsBanner';
import AidsRecruiters from '../components/Aids/AidsRecruiters';
import AdmissionsContainer from '../components/Aids/AdmissionsContainer';

function Aids() {
  return (
    <div>
      <AidsHero />  {/* Hero component for Aids */}
      <AidsPointers />  
      <AidsInnovation/> 
      <AidsOverview />  
      <WhyChooseICEM/> 
      <AidsAbout />  
      <AidsBrochure />  
      <AidsBanner/>
      <AidsRecruiters/>
      <AidsOfferings />  
      <AidsHighlights/>  
      <CareerProspects/>
      <AdmissionsCTA/>
      <AidsApply />  
      <AdmissionsContainer/>
      <AidsTestimonials />  
      <AutoChatbot />
      <MechJourny/>
    </div>
  );
}

export default Aids;
