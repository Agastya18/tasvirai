'use client'
import React from 'react'
import Hero from './Hero'
// import HeroImage from './HeroImage'
import LogoTicker from './LogoTicker'
import Feature from './Feature'
import { PricingSection } from './Pricing'
// import DocsShowcase from './DocsShowcase'
// import Testimonials from './Testimonials'
// import CallToAction from './CallToAction'
import Faq from './Faq'
const Home = () => {
  return (
    <>
      <Hero />
      <LogoTicker />
      <Feature />
      <PricingSection/>
      <Faq/>
      {/* <HeroImage />
      <LogoTicker />
      <Feature />
      <DocsShowcase />
      <Testimonials />
      <CallToAction /> */}
    </>
  )
}

export default Home
