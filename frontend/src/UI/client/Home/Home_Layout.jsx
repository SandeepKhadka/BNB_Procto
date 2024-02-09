import React from 'react';
import Banner from './components/Banner';
import About_Layout from './components/About/About_Layout';
import MidBanner from './components/MidBanner';
import Testimonials from './components/Testimonials';
import Blog_layout from './components/Blog_layout';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Home_Layout = () => {
  return (
    <>
      <Banner />
      <About_Layout />
      <MidBanner />
      <Testimonials />
      <Blog_layout />
    </>
  );
};

export default Home_Layout;
