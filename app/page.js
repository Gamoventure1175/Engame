import NextJsCarousel from '@components/Carousel'

import React from 'react'
import Header from '@components/Header'
import EngamePass from '@components/EngamePass'
import Footer from '@components/Footer'

const page = () => {
  return (
    <>
      <Header />
      <NextJsCarousel />
      <EngamePass />
      <Footer />
    </>
  )
}


export default page
