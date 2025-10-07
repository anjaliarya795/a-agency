'use client'
import { motion, useAnimation, useInView } from 'framer-motion';

import React, { useEffect, useRef, useState } from 'react'
import PaddingWrapper from '../wrappers/PaddingWrapper'
import { GiSunflower } from 'react-icons/gi'
import blogCenterImg from '@/../public/blob-center.png'
import blogtop from '@/../public/blob-bottom-left.png'
import Image from 'next/image'
import { useCounterAnimation } from '@/hooks/useCounterAnimation'
import { companyStats } from '@/constants/data';

const delay = 0.5


function GroupCount() {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInview) {
      controls.start("visible");
    }
  }, [isInview]);
  return (
    <div className="max-w-screen overflow-x-hidden">
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, translateX: 90 },
          visible: { opacity: 1, translateX: 0 },
        }}
        transition={{
          type: "spring",
          duration: 0.2,
          damping: 8,
          stiffness: 100,
          delay
        }}
        initial="hidden"
        animate={controls} className="py-20 w-full bg-primary flex items-center mt-16 relative overflow-hidden">
        <div className="size-64 mx-auto absolute left-0 top-0 z-10">
          <Image src={blogtop} alt='blogtop' layout='fill' />
        </div>
        <div className="size-72 mx-auto absolute left-1/2 top-1/3 z-10">
          <Image src={blogCenterImg} alt='blogCenterImg' layout='fill' />
        </div>
        <div className="size-44 mx-auto absolute right-0 bottom-1/2 z-10">
          <Image src={blogCenterImg} alt='blogCenterImg' layout='fill' />
        </div>
        <PaddingWrapper>
          <div className="grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between gap-y-8">
            {
              companyStats.map(stats=>(
                <GroupCountItem key={stats.label} icon={stats.icon} startValue={0} endValue={stats.count} label={stats.label} isInview={isInview} />
              ))
            }
          </div>
        </PaddingWrapper>
      </motion.div>
    </div>
  )
}

export default GroupCount



interface AnimatedCounterProps {
  startValue: number;
  endValue: number;
  duration?: number;
  isInview: boolean;
  label:string;
  icon:React.ReactNode;
}
const GroupCountItem: React.FC<AnimatedCounterProps> = ({ startValue, endValue, duration = 2, isInview,label,icon }) => {

  // Run animation only if the section is in view and hasn't animated before
  const value = useCounterAnimation(startValue, endValue, duration, isInview);

  return (
    <div className="flex-col text-white p-4 flex items-center">
      <span className='text-secondary mx-auto text-5xl'>
        {icon}
      </span>
      <motion.div
        style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center' }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="xl:text-4xl lg:text-3xl text-2xl">

        {Math.round(value)} +
        </span>
      </motion.div>
      <p className="text-sm">{label}</p>
    </div>
  )
}
