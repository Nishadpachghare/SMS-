import React from 'react'
import CommiteeFinancial from './CommiteeFinancial'
import Commiteeledger from './Commiteeledger'
import Commiteeflatwise from './Commiteeflatwise'
import Commtieehero from './Commtieehero'
import CommiteeComunication from './CommiteeComunication'
import Commiteestaff from './Commiteestaff'
import CommiteeSuperadmin from './CommiteeSuperadmin'
import Commiteevendor from './Commiteevendor'
import Commiteesocitey from './Commiteesocitey'

function Commiteecomponet() {
  return (
    <div>
        <CommiteeFinancial />
        <Commiteeledger />
        <Commiteeflatwise /> 
      <CommiteeComunication />
      < Commiteestaff />  
        <CommiteeSuperadmin /> 
        <Commiteesocitey/>
        <Commiteevendor />
      
    </div>
  )
}

export default Commiteecomponet
