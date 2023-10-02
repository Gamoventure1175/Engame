import NextJsCarousel from '@components/Carousel'

import React from 'react'
import Header from '@components/Header'
import EngamePass from '@components/EngamePass'
import Footer from '@components/Footer'
import Games from '@components/Games'

const page = () => {
  return (
    <>
      <Header />
      <NextJsCarousel />
      <Games />
      <EngamePass />
      <Footer />
    </>
  )
}


export default page
