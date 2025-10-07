import React from 'react'
import HeroSection from '@/components/home/HeroSection'
import ServiceList from '@/components/home/ServiceList'
import AboutUs from '@/components/home/AboutUs'
import GroupCount from '@/components/home/GroupCount'
import SolutionsProvide from '@/components/home/SolutionsProvide'
import TeamMembers from '@/components/home/TeamMembers'
import Testimonial from '@/components/home/testimonial/Testimonial'
import Carousel from '@/components/home/Carousel'
import ClientsCarousel from '@/components/home/our-clients/ClientsCarousel'




function page() {
  return (
      <div className="w-full flex flex-col gap-32">
        <HeroSection />
        <ClientsCarousel/>
        <ServiceList />
        <Carousel />
        <AboutUs/>
        <GroupCount/>
        <SolutionsProvide/>
        <TeamMembers />
        <Testimonial />
      </div>
  )
}

export default page