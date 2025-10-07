'use client'

import Image from 'next/image'
import React from 'react'
import FilledBtn from '../buttons/FilledBtn'
import heroImg from '@/../public/hero.png'
import bgBottomImg from '@/../public/bg-bottom.png'
import blogCenterImg from '@/../public/blob-center.png'
import blogtop from '@/../public/blob-bottom-left.png'
import PaddingWrapper from '../wrappers/PaddingWrapper'
import Shapes from '../shared/Shapes'
import Link from 'next/link'
import { motion } from 'framer-motion'
function HeroSection() {
  return (
    <>
      <div className="w-full min-h-screen bg-primary relative mb-20 md:mb-32 pb-12">

        <div className="size-64 mx-auto absolute left-0 top-0 z-10 ">
          <Image src={blogtop} alt='blogtop' layout='fill' />
        </div>
        <div className="size-72 mx-auto absolute sm:left-1/3 top-1/2 z-10 ">
          <Image src={blogCenterImg} alt='blogCenterImg' layout='fill' />
        </div>
        <PaddingWrapper>
          <motion.div
            animate={{ x: [50, 100, 0], opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
            }}
            initial={{ opacity: 0, scale: 0.5 }}

            className="pt-32">
            <div className="grid md:grid-cols-2 grid-cols-1 justify-center gap-4 gap-y-12 items-center ">
              <div
                className="flex flex-col w-full gap-4  z-20">
                <p className="text-5xl font-medium text-white">
                Connecting Talent with Opportunity
                </p>
                <p className="text-xl  text-white">
                At Vyavasaya, we connect exceptional talent with forward-thinking organizations. Whether you're a job seeker ready for your next opportunity or an employer searching for the perfect fit, we're here to make the match seamless and successful.
                </p>
                <div className="flex flex-row mt-6 gap-4">
                  <Link href={'/about'} ><FilledBtn label={'Read More'} /></Link>
                  <Link href={'/contact'} ><FilledBtn label={'Contact Us'} className='bg-white' /></Link>
                </div>
              </div>
              <div className="w-full relative aspect-[7/5]  z-20">
                <Image layout='fill' alt='img' src={heroImg} />
              </div>
            </div>
          </motion.div>
        </PaddingWrapper >
        <div className="w-full top-[99%] bg-primary pt-4 absolute left-0">
          <Image className='w-full h-full ' src={bgBottomImg} alt='bgBottomImg' />
        </div>
      </div >
    </>
  )
}

export default HeroSection