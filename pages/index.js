import React from 'react'
//components
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { AboutUs } from '@/components/footer/AboutUs';


const index = () => {
  return (
    <>
      <Navbar />
      <Footer />
      <AboutUs />
    </>
  )
}

export default index