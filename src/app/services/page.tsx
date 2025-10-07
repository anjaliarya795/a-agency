import AboutUs from '@/components/home/AboutUs'
import ServiceList from '@/components/home/ServiceList'
import SolutionsProvide from '@/components/home/SolutionsProvide'
import SharedHeroSection from '@/components/shared/SharedHeroSection'
import React from 'react'

function page() {
  return (
    <div className="w-full flex flex-col gap-32 mb-20">
      <SharedHeroSection title="Our Services" />
      <ServiceList />
      <SolutionsProvide />
    </div>
  )
}

export default page