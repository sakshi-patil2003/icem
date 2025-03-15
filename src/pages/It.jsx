import React from 'react'
import ItHero from '../components/It/ItHero'  // Import the ItHero component
import ItPointers from '../components/It/ItPointers'  // Import the ItPointers component
import ItOfferings from '../components/It/ItOfferings'
import ItStudying from '../components/It/ItStudying'
import ItBrochure from '../components/It/ItBrochure'
import ItHighlights from '../components/It/ItHighlights'
import ItApply from '../components/It/ItApply'
import ItTestimonials from '../components/It/ItTestimonials'

function It() {
  return (
    <div>
      <ItHero />  {/* Call the ItHero component */}
      <ItPointers />  {/* Call the ItPointers component */}
      <ItOfferings />  {/* Call the ItOfferings component */}
      <ItStudying />  {/* Call the ItStudying component */}
      <ItBrochure />  {/* Call the ItBrochure component */}
      <ItHighlights />  {/* Call the ItHighlights component */}
      <ItApply />  {/* Call the ItApply component */}
      <ItTestimonials />  {/* Call the ItTestimonials component */}
    </div>
  )
}

export default It