import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import Projects from './pages/Projects';
import Contact from './pages/Contact'
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <div className='bg-[#081b29] min-h-screen flex flex-col justify-between'>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Hero/>} />
          <Route path='about' element={<About/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      <Footer/>
      </div>
    </Router>
    
  )
}

export default App
