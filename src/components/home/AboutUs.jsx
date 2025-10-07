'use client'

import Image from 'next/image'
import FilledBtn from '../buttons/FilledBtn'
import PaddingWrapper from '../wrappers/PaddingWrapper'
import aboutImg from '@/../public/about.png'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'
import { motion } from 'framer-motion'
import CommonAnimation from '../shared/CommonAnimation'

function AboutUs() {
    return (
        <PaddingWrapper>
            <CommonAnimation>
                <div className="flex flex-col items-start gap-4 mb-8">
                    <span className="text-secondary text-2xl border-b-2 border-secondary font-bold">About Us</span>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-4">
                    <div className="flex flex-col w-full gap-4">
                        <p className="text-5xl font-medium">
                            Leading Recruitment Solutions with 10+ Years of Expertise
                        </p>
                        <p className="text-lg font-medium text-slate-700">
                            
Vyavasaya connects businesses with the right talent and empowers job seekers to build meaningful, successful careers. With over a decade of experience, we focus on quality, efficiency, and long-term partnerships-helping companies grow and individuals thrive.
                        </p>
                        <ProgressComp />
                        <Link href={'/contact'} className="flex flex-row mt-6 gap-4">
                            <FilledBtn label={'Contact Us'} />
                        </Link>
                    </div>
                    <div className="w-full mx-auto max-w-md relative aspect-square">
                        <Image layout='fill' alt='img' src={aboutImg} />
                    </div>
                </div>
            </CommonAnimation>
        </PaddingWrapper>
    )
}

export default AboutUs


function ProgressComp() {
    return (
        <div className="w-full flex flex-col gap-6 pr-4">
            <ProgressCompItem percent={'100%'} label={'Talent Acquisition'} color={'bg-primary'} />
            <ProgressCompItem percent={'85%'} label={'Executive Search'} color={'bg-secondary'} />
            <ProgressCompItem percent={'90%'} label={'RPO Solutions'} color={'bg-slate-900'} />
        </div>
    )
}


function ProgressCompItem({ percent, color, label }) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between">
                <span className="text-slate-600 font-semibold">{label}</span>
                <span className="text-slate-600 font-semibold">{percent}</span>
            </div>
            <div className="h-2 w-full bg-slate-200">
                <div style={{ width: percent }} className={twMerge(' bg-primary h-full', color)}></div>
            </div>
        </div>
    )
}