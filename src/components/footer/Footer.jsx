import React from 'react'
import PaddingWrapper from '../wrappers/PaddingWrapper'
import bgTopImg from '@/../public/bg-top.png'
import Image from 'next/image'
import { MdLocationOn } from "react-icons/md";
import footerMapImg from '@/../public/map.png'
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { contact, navLinks, socialIcons } from '@/constants/data';
import Link from 'next/link';
import { HiDocumentCurrencyRupee } from 'react-icons/hi2';

function Footer() {
    return (
        <div className="w-full bg-primary relative overflow-hidden">
            <Image src={bgTopImg} alt='footer-img' className='w-full' />
            
            {/* Positioning the map image in the background */}
            <div className="absolute inset-0 z-0">
                <Image src={footerMapImg} layout='fill' alt='map' className="object-cover" />
            </div>

            <PaddingWrapper>
                <div className="grid lg:grid-cols-[40%,30%,30%] md:grid-cols-2 grid-cols-1 justify-between gap-6 pt-12 gap-y-16 relative z-10">
                    <div className="flex flex-col gap-1">
                        <div className="text-xl mb-2 font-bold text-white">ADDRESS</div>
                        <div className="justify-center text-slate-200 items-center grid grid-cols-[24px,1fr] mt-2 gap-4">
                            <MdLocationOn className='w-full h-full' />
                            <p className="text-base font-semibold">{contact.address}</p>
                        </div>
                        <div className="justify-center text-slate-200 items-center grid grid-cols-[20px,1fr] mt-2 gap-4">
                            <IoCall className='w-full h-full' />
                            <p className="text-base font-semibold">{contact.phone}</p>
                        </div>
                        <div className="justify-center text-slate-200 items-center grid grid-cols-[20px,1fr] mt-2 gap-4">
                            <IoMdMail className='w-full h-full' />
                            <p className="text-base font-semibold">{contact.mail}</p>
                        </div>
                        <div className="justify-center text-slate-200 items-center grid grid-cols-[20px,1fr] mt-2 gap-4">
                            <HiDocumentCurrencyRupee className='w-full h-full' />
                            <p className="text-base font-semibold">{contact.gstin}</p>
                        </div>
                    </div>


                    <div className="flex flex-col gap-1 md:mx-auto">
                        <div className="text-xl font-bold text-white mb-2">QUICK LINKS</div>
                        {navLinks.map((item, index) => (
                            <Link href={item.link} key={index} className="hover:text-secondary hover:translate-x-2 duration-500 text-slate-200 justify-start w-fit items-center inline-flex flex-row mt-2 gap-2">
                                {item.icon}
                                <span className="text-base inline font-semibold ">{item.label}</span>
                            </Link>
                        ))}
                    </div>


                    <div className="flex flex-col gap-2">
                        <div className="text-xl mb-2 font-bold text-white">SOCIAL LINKS</div>
                        <div className="flex flex-col gap-4">
                        <div className="text-lg flex flex-row gap-6 text-slate-200 mt-2">
                            {socialIcons.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`hover:text-secondary text-white`}
                                >
                                    {item.icon}
                                </Link>
                            ))}
                        </div>
                        </div>
                    </div>

                </div>
            </PaddingWrapper>
            <div className="flex justify-end border-t border-t-slate-400 mt-8 py-4 px-4">
                <span className="text-slate-300 font-semibold">All rights are reserved</span>
            </div>
        </div>
    )
}

export default Footer;
