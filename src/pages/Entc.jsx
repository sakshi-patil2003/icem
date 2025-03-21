import React from 'react'
import EntcHero from '../components/Entc/EntcHero'  // Import the EntcHero component
import EntcFacility from '../components/Entc/EntcFacility'  // Import the EntcFacility component
import EntcApply from '../components/Entc/EntcApply'
import EntcBrochure from '../components/Entc/EntcBrochure'
import EntcPointers from '../components/Entc/EntcPointers'
import EntcOfferings from '../components/Entc/EntcOfferings'
import EntcStudying from '../components/Entc/EntcStudying'
import EntcTestimonials from '../components/Entc/EntcTestimonials'
import MechJourny from '../components/Mech/MechJourny'
// import AutoChatbot from '../components/AutoChatbot'  // Import AutoChatbot

function Entc() {
  return (
    <div>
        <EntcHero />  {/* Call the EntcHero component */}
        <EntcPointers />  {/* Call the EntcPointers component */}
        <EntcOfferings />  {/* Call the EntcOfferings component */}
        <EntcStudying />  {/* Call the EntcStudying component */}
        <EntcFacility />  {/* Call the EntcFacility component */}
        <EntcBrochure />  {/* Call the EntcBrochure component */} 
        <EntcApply />
        <EntcTestimonials />  {/* Call the EntcTestimonials component */}
        <MechJourny/>
    </div>
  )
}

export default Entc