'use client'

import React from 'react'
import PaddingWrapper from '../wrappers/PaddingWrapper'
import Image from 'next/image'
import { teamMembers } from '@/constants/data'
import { motion } from 'framer-motion'

function TeamMembers() {
    return (
        <PaddingWrapper>
            <div className="flex flex-col items-center gap-4 mb-8">
                <span className="text-secondary text-2xl border-b-2 border-secondary font-bold">Our Team</span>
                <span className="text-4xl font-bold">Our Team Members</span>
            </div>
            <div className="w-full flex-row justify-center gap-4 grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
                {
                    teamMembers.map((item, index) => (
                        <motion.div key={item.id}
                            initial={{ opacity: 0, scale: 0, x: index % 2 === 0 ? -100 : 100 }} // Determine x based on index
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            variants={{
                                visible: { opacity: 1, scale: 1, x: 0 }, // Animate to normal position (x: 0)
                                hidden: { opacity: 0, scale: 0, x: index % 2 === 0 ? -100 : 100 } // Set initial x based on index
                            }}
                        >
                            <TeamMembersItem  {...item} />
                        </motion.div>
                    ))
                }
            </div>
        </PaddingWrapper>
    )
}

export default TeamMembers


function TeamMembersItem(props) {
    return (
        <div className="flex flex-col divide-y-2 bg-slate-100 pt-12 pb-8 w-full shadow-md">
            <div className="text-center flex-col  p-6 gap-3 flex rounded-lg duration-500">
                <div className="w-[95%] mx-auto aspect-square relative">
                    <Image layout='fill' className='rounded-full hover:scale-110 duration-500 object-cover' src={props.image} alt='team' />
                </div>
                <p className="text-3xl mt-6">{props.name}</p>
                <p className="text-xl text-slate-700">{props.work}</p>
            </div>
            <div className="pt-8 flex flex-row justify-center gap-4 mt-auto">
                {props?.socialLinks}
            </div>
        </div>
    )
}
