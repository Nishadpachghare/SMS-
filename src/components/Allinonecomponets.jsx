import React from 'react'
import Featuremaintance from './Featuremaintance'
import Featurepayment from './Featurepayment'
import FeatureQR from './FeatureQR'
import FeatureStaff from './FeatureStaff'
import FeatureBooking from './FeatureBooking'
import FeatureTracking from './FeatureTracking'
import FeatureNotice from './FeatureNotice'
import Featurevoting from './Featurevoting'
import FeatureDOC from './FeatureDOC'
import FeatureReporting from './FeatureReporting'

function Allinonecomponets() {
  return (
    <div>
      < Featuremaintance />
      <Featurepayment/>
      <FeatureQR />
      <FeatureStaff/>
      < FeatureBooking/>
      <FeatureTracking/>
      < FeatureNotice /> 
      <Featurevoting/> 
      < FeatureDOC/>
      <FeatureReporting />
    
    </div>
  )
}

export default Allinonecomponets
