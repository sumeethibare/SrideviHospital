import Founder from '@/pages/home/Founder'
import Gallery from '@/pages/home/Gallery'
import Hero from '@/pages/home/Hero'
import LabAndPharmacy from '@/pages/home/LabMarket'
import Services from '@/pages/home/Services'
import Team from '@/pages/home/Team'
import React from 'react'

function page() {
  return (
    <>
      <Hero />
      <Gallery />
      <Services/>
      <Founder/>
      <Team/>
      <LabAndPharmacy/>
    </>
  )
}

export default page