import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About_Layout from './components/About/About_Layout'
import MidBanner from './components/MidBanner'
import Testimonials from './components/Testimonials'

const Home_Layout = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About_Layout />
      <MidBanner />
      <Testimonials />
    </>
  )
}

export default Home_Layout