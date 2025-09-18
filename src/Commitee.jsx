import React from 'react'
import Commtieehero from './components/Commtieehero'   
import Commiteeadmin from './components/Commiteeadmin'
import Commiteeresidence from './components/commiteeresidence'
import Commiteetestominal from './components/commiteetestominal'
import Footer from './layout/Footer'
function Commitee() {
  return (
    <div>
      < Commtieehero/>
      <Commiteeadmin />
      <Commiteeresidence />
      < Commiteetestominal />
      
      </div>
  )
}

export default Commitee
