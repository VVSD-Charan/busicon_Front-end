import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/home/Home.js'
import Careers from './Careers.js'
import './App.css'
import Services from './Services.js'
import Contact from './Contact.js'
import Partners from './Partners.js'
import Finance from './services/Finance.js'
import Legalities from './services/Legalities.js'
import Collaborations from './services/Collaborations.js'
import Business from './services/Business.js'
import Insurance from './services/Insurance.js'
import Role from './roles/Role.js'
import About from './About.js'
import AddJob from './AddJob.js'
import Admin from './Admin.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/services" element={<Services />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/legalities" element={<Legalities />} />
        <Route path="/collaborations" element={<Collaborations />} />
        <Route path="/business" element={<Business />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/job/:id" element={<Role />} />
        <Route path="/about" element={<About />} />
        <Route path="/addjob" element={<AddJob />} />
        <Route path="/deletejob" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
