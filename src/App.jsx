import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import './App.css'
import Home from './Home'
import About from './About'
import Feature from './Feature'
import Service from './Service'
import Contact from './Contact'
import Commitee from './Commitee'
import Allinonecomponets from './components/Allinonecomponets'
import Commiteecomponet from './components/Commiteecomponet'
import Commiteeresidence1 from './components/Commiteeresidence1'
import Aboutfeature from './components/Aboutfeature'
import Aboutfeatureallinone from './components/Aboutfeatureallinone'
import AboutfeatureAvsV from './components/AboutfeatureAvsV'
import AboutfeatureAvsR from './components/AboutfeatureAvsR'
import Aboutfearureapppreviwe from './components/Aboutfearureapppreviwe'
import Aboutfeaturewhysms from './components/Aboutfeaturewhysms'
import Featuremaintance from './components/Featuremaintance'
import Featurepayment from './components/Featurepayment'
import FeatureQR from './components/FeatureQR'
import FeatureBooking from './components/FeatureBooking'
import FeatureTracking from './components/FeatureTracking'
import FeatureNotice from './components/FeatureNotice'
import Featurevoting from './components/Featurevoting'
import FeatureDOC from './components/FeatureDOC'
import FeatureReporting from './components/FeatureReporting'
import FeatureStaff from './components/FeatureStaff'
import CommiteeFinancial from './components/CommiteeFinancial'
import Commiteeledger from './components/Commiteeledger'
import Commiteeflatwise from './components/Commiteeflatwise'
import CommiteeComunication from './components/CommiteeComunication'
import CommiteeSuperadmin from './components/CommiteeSuperadmin'
import Commiteevendor from './components/Commiteevendor'
import Commiteesocitey from './components/Commiteesocitey'
import Commiteestaff from './components/Commiteestaff'
import Commiteeflat from './components/Commiteeflat'
import Commiteebill from './components/Commiteebill'
import Commiteevistor from './components/Commiteevistor'
import Commiteerise from './components/Commiteerise'
import Commiteepoll from './components/Commiteepoll'
import Commiteerule from './components/Commiteerule'
import Commiteeparking from './components/Commiteeparking'
import Commiteeevent1 from './components/Commiteeevent1'

function ScrollToTop() {
    const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      console.log(location.hash)
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        console.log(element)
        // Smooth scroll to the element
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
}

function App() {
  return (<>
    <div>
      <ScrollToTop />
      <div className='mb-[6%]'><Navbar /></div>
      <hr />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} /> 
        <Route path='/feature' element={<Feature />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact/>}/>
         <Route path='/commitee' element={<Commitee/>}/>



         <Route path='/all-in-one-solution' element={<Aboutfeatureallinone/>}/>
         <Route path='/apartment' element={ <AboutfeatureAvsV/>}/>
         <Route path='/residence' element={ <AboutfeatureAvsR/>}/>
         <Route path='/Previwes' element={  <Aboutfearureapppreviwe/>}/>
         <Route path='/WhyChooseSociety' element={<Aboutfeaturewhysms/>}/> 
         
         <Route path='/Maintenance' element={ < Featuremaintance />}/> 
         <Route path='/Payment' element={ <Featurepayment/>}/> 
         <Route path='/QR' element={  <FeatureQR/>}/> 
         <Route path='/Staff' element={ <FeatureStaff/>}/> 
         <Route path='/Booking' element={< FeatureBooking/>}/> 
         <Route path='/Tracking' element={ <FeatureTracking/>}/> 
         <Route path='/Notice' element={ < FeatureNotice /> }/> 
         <Route path='/Votting' element={ <Featurevoting/>  }/> 
         <Route path='/DOC' element={ < FeatureDOC/> }/> 
         <Route path='/Reporting' element={ <FeatureReporting /> }/> 


        {/* Commitee routing */}
        <Route path='/Financial' element={ <CommiteeFinancial/>}/> 
        <Route path='/Ledger' element={ <Commiteeledger />}/> 
        <Route path='/Flatwise' element={ <Commiteeflatwise />}/> 
        <Route path='/Comunication' element={ <CommiteeComunication />}/> 
        <Route path='/Stafff' element={< Commiteestaff /> }/> 
        <Route path='/Superaadmmin' element={ <CommiteeSuperadmin />}/> 
        <Route path='/Sociteeye' element={ <Commiteesocitey/>}/> 
        <Route path='/Vendor' element={ <Commiteevendor />}/> 

        <Route path='/Flat' element={ <Commiteeflat/>}/>
        <Route path='/Bill' element={ <Commiteebill />}/>
        <Route path='/Vistor' element={ <Commiteevistor/>}/>
        <Route path='/Rise' element={ <Commiteerise />}/>
        <Route path='/Poll' element={ <Commiteepoll/>}/>
        <Route path='/Event1' element={ <Commiteeevent1 />}/>
        <Route path='/Parking' element={ <Commiteeparking />}/>
        <Route path='/Rule' element={ <Commiteerule/>}/>







      </Routes>
      {/* <Allinonecomponets /> */}
      {/* <Commiteecomponet /> */}
      {/* <Commiteeresidence1 />  */}


      {/* <Aboutfeature /> */}
     
      
      <Footer />  
    </div>
    </>
  )
}

export default App
