import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Process from '../../components/Process/Process'
import Verified from '../../components/Verified/Verified'
import About from '../../components/About/About'
import Banner from '../../components/Banners/Banner'
const Homepage = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <About/>
    <Verified/>
    <Process/>
    <Footer/>
    </>
  )
}

export default Homepage