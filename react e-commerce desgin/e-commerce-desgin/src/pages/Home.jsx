import React from 'react'
import Anouncement from '../component/Anouncement'
import Categories from '../component/Categories'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import NewsLetter from '../component/NewsLetter'
import Products from '../component/Products'
import Slider from '../component/Slider'

function Home() {
  return (
    <div>
      <Anouncement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Home