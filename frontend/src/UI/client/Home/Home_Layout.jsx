import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About_Layout from './components/About/About_Layout';
import MidBanner from './components/MidBanner';
import Testimonials from './components/Testimonials';
import Blog_layout from './components/Blog_layout';
import Contact from './components/Contact';
import Footer from './components/footer';

const Home_Layout = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About_Layout />
      <MidBanner />
      <Testimonials />
      <Blog_layout />
      <Contact />
      <Footer />
    </>
  );
};

export default Home_Layout;
