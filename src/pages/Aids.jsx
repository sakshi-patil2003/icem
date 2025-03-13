import AidsHero from '../components/Aids/AidsHero'  // Import the Mechhero component (adjust the path as needed)
import AidsAbout from '../components/Aids/AidsAbout'
import AidsPointers from '../components/Aids/AidsPointers'
import AidsOverview from '../components/Aids/AidsOverview'
import AidsOfferings from '../components/Aids/AidsOfferings'
import AidsBrochure from '../components/Aids/AidsBrochure'
import AidsApply from '../components/Aids/AidsApply'
import AidsTestimonials from '../components/Aids/AidsTestimonials'

function Aids() {
  return (
    <div>
      <AidsHero />  {/* Call the Mechhero component */}
    
      <AidsPointers />  {/* Call the MechPointers component */}
      <AidsOverview />  {/* Call the MechOverview component */}
      <AidsAbout />  {/* Call the MechAbout component */}
      <AidsBrochure />  {/* Call the MechBrochure component */}
      <AidsOfferings />  {/* Call the MechOfferings component */}
     <AidsApply />  {/* Call the MechApply component */}
     <AidsTestimonials />  {/* Call the MechTestimonials component */}
    </div>
  )
}

export default Aids
