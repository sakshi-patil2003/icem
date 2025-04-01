import React from 'react'
import EntcHero from '../components/Entc/EntcHero'
import EntcApply from '../components/Entc/EntcApply'
import EntcBrochure from '../components/Entc/EntcBrochure'
import EntcPointers from '../components/Entc/EntcPointers'
import EntcOfferings from '../components/Entc/EntcOfferings'
import EntcStudying from '../components/Entc/EntcStudying'
import EntcTestimonials from '../components/Entc/EntcTestimonials'
import MechJourny from '../components/Mech/MechJourny'
import ProgramOverview from '../components/Entc/ProgramOverview';
import EntcInnovation from '../components/Entc/EntcInnovation';
import EntcWhyChooseICEM from '../components/Entc/EntcWhyChooseICEM';
import EntcHighlights from '../components/Entc/EntcHighlights';
import EntcCareerProspects from '../components/Entc/EntcCareerProspects'
import EntcAdmission from '../components/Entc/EntcAdmission';
import EntcBanner from '../components/Entc/EntcBanner';
import EntcRecruiters from '../components/Entc/EntcRecruiters';

function Entc() {
  return (
    <div>
        <EntcHero />  
        <EntcPointers />  
        <EntcInnovation/>
        <ProgramOverview/>
        <EntcWhyChooseICEM/>
        <EntcStudying />  
        <EntcBrochure />   
        <EntcCareerProspects/>
        <EntcBanner/>
        <EntcRecruiters/>
        <EntcOfferings />   
        <EntcHighlights/>
        <EntcAdmission/>
        <EntcApply />
        <EntcTestimonials />  
        <MechJourny/>
    </div>
  )
}

export default Entc