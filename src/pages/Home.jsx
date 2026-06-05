import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Progress from '../components/Progress'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Progress/>
      <Services/>
      <Testimonials/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
