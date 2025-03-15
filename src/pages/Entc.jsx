import React from 'react'
import EntcHero from '../components/Entc/EntcHero'  // Import the EntcHero component
import EntcFacility from '../components/Entc/EntcFacility'  // Import the EntcFacility component

function Entc() {
  return (
    <div>
        <EntcHero />  {/* Call the EntcHero component */}
        <EntcFacility />  {/* Call the EntcFacility component */}
    </div>
  )
}

export default Entc