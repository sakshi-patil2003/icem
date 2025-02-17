import Mechhero from '../components/Mech/MechHero'  // Import the Mechhero component (adjust the path as needed)
import MechPointers from '../components/Mech/MechPointers'
import MechOverview from '../components/Mech/MechOverview'
import MechOfferings from '../components/Mech/MechOfferings'
import MechStudying from '../components/Mech/MechStudying'
import MechBrochure from '../components/Mech/MechBrochure'
import MechHighlights from '../components/Mech/MechHighlights'
import MechCarrer from '../components/Mech/MechCarrer'
import MechApply from '../components/Mech/MechApply'
import MechTestimonials from '../components/Mech/MechTestimonials'

function Mechanical() {
  return (
    <div>
      <Mechhero />  {/* Call the Mechhero component */}
      <MechPointers />  {/* Call the MechPointers component */}
      <MechOverview />  {/* Call the MechOverview component */}
      <MechOfferings />  {/* Call the MechOfferings component */}
      <MechStudying />  {/* Call the MechStudying component */}
      <MechBrochure />  {/* Call the MechBrochure component */}
      <MechHighlights />  {/* Call the MechHighlights component */}
      <MechCarrer />  {/* Call the MechCarrer component */}
      <MechApply />  {/* Call the MechApply component */}
      <MechTestimonials />  {/* Call the MechTestimonials component */}
    </div>
  )
}

export default Mechanical
