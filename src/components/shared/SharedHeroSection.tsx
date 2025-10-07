'use client'

import React from 'react'
import PaddingWrapper from '../wrappers/PaddingWrapper'
import Image from 'next/image'
import bgBottomImg from '@/../public/bg-bottom.png'
import blogCenterImg from '@/../public/blob-center.png'
import blogtop from '@/../public/blob-bottom-left.png'
import blogbottom from '@/../public/blob-bottom-right.png'
import {motion} from 'framer-motion'
function SharedHeroSection({ title }: { title: string }) {
  return (
    <div className="w-full bg-primary relative  mb-16 md:mb-32">
      <div className="size-60 mx-auto absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
        <Image src={blogCenterImg} alt='blogCenterImg' layout='fill' />
      </div>
      <div className="size-40 mx-auto absolute left-0 -top-10 z-10">
        <Image src={blogtop} alt='blogtop' layout='fill' />
      </div>
      <div className="size-40 mx-auto absolute right-0 bottom-4 z-10">
        <Image src={blogbottom} alt='blogbottom' layout='fill' />
      </div>
      <PaddingWrapper>
        <motion.div
          animate={{ y: [-100, 0], opacity: 1, scale: 1, }}
          transition={{
            duration: 1,
            type:'spring',
            delay:0.5
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          className="py-24 flex items-center justify-center">
          <span className="flex flex-row z-20">
            <p className="text-white text-4xl font-bold">{title}</p>
          </span>
        </motion.div>
      </PaddingWrapper >
      <div className="w-full top-[99%] bg-primary pt-4 absolute left-0">
        <Image className='w-full h-full ' src={bgBottomImg} alt='bgBottomImg' />
      </div>
    </div>
  )
}

export default SharedHeroSection