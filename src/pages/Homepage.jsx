import React from 'react'
import HomeImage from '../components/HomeImage'
import Navbar from '../components/Navbar'
import Faqs from '../components/Faqs'
import Footer from '../components/Footer'


const Homepage = () => {
  return (
    <div>
      <Navbar Page={"homepage"}/>
      <HomeImage/>
      <Faqs/>
      <Footer/>
    </div>
  )
}

export default Homepage
