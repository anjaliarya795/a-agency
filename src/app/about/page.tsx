import AboutUs from '@/components/home/AboutUs'
import ServiceList from '@/components/home/ServiceList'
import TeamMembers from '@/components/home/TeamMembers'
import SharedHeroSection from '@/components/shared/SharedHeroSection'
import React from 'react'

function page() {
  return (
    <div className="w-full flex flex-col gap-32 mb-20">
      <SharedHeroSection title="About Us" />
      <AboutUs />
      <ServiceList />
      <TeamMembers />
    </div>
  )
}

export default page