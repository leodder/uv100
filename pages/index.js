import React from 'react'
//components
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { AboutUs } from '@/components/footer/AboutUs';
import Content from '@/components/Content';


const index = () => {
  return (
    <>
      <Navbar />
      <Content />
      <Footer />
      <AboutUs />
    </>
  )
}

export default index