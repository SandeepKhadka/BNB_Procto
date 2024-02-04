import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About_Layout from './components/About/About_Layout'

const Home_Layout = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About_Layout />
    </>
  )
}

export default Home_Layout