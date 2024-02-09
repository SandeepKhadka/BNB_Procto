import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home_Layout from "./UI/client/Home/Home_Layout";
import Navbar from "./UI/client/Home/components/Navbar";
import BlogPage from "./UI/client/Blog/BlogPage";
import BlogDetail from "./UI/client/Blog/BlogDetail";
import Contact from "./UI/client/Home/components/Contact";
import Footer from "./UI/client/Home/components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home_Layout />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;