'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import PaddingWrapper from '../../wrappers/PaddingWrapper';
import { useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from 'next/image';
import CommonAnimation from '@/components/shared/CommonAnimation';

const testimonials = [
    {
        name: 'Lorem Ipsum',
        profession: '',
        image:'' ,
        text: 'We are proud to have Vyavasaya as our recruitment partner, ensuring a streamlined hiring process with well-suited candidates. Our experience has been exceptional, and we highly recommend them as a trusted staffing partner for client companies seeking reliable hiring solutions and efficiency.'
    },
    // {
    //     name: 'V5 Global',
    //     profession: 'A First Meridian Company',
    //     image: client3,
    //     text: 'V5 Global appreciates Vyavasaya, an efficient and skilled recruitment partner. They have consistently met our hiring needs with professionalism and excellence. We highly recommend Vyavasaya to industries looking for a reliable and results-driven partner ensuring seamless hiring experiences and trusted outcomes.'
    // }
];



export default function TestimonialCarousel() {
    const swiperRef = useRef(null);

    return (
        <PaddingWrapper>
            <CommonAnimation>
                <div className="max-w-full mx-auto text-center py-10 relative">
                    <div className="flex flex-col items-center gap-4 mb-8">
                        <span className="text-secondary text-2xl border-b-2 border-secondary font-bold">Testimonial</span>
                        <span className="text-4xl font-bold">What Say Our Clients!</span>
                    </div>
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        navigation={false}
                        modules={[Navigation,Autoplay]}
                        className="w-full h-full"
                        spaceBetween={20}
                        autoplay={{ delay: 10000 }}
                        loop
                        breakpoints={{
                            320: { // Mobile screens
                                slidesPerView: 1,
                            },
                            768: { // Tablet and above
                                slidesPerView: 1,
                            },
                            1024: { // Large screens
                                slidesPerView: 2,
                            },
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className='shadow-sm pb-4'  >
                                <div className="bg-slate-100 p-6 rounded-md shadow-lg flex flex-col h-full">
                                    <p className="first-letter:text-5xl first-letter:mr-3 first-letter:text-primary first-letter:font-extrabold text-slate-700 text-lg italic text-start">❝{testimonial.text}❞</p>
                                    <div className="mt-4 flex flex-row items-center gap-4 overflow-hidden">
                                        <Image src={testimonial.image} alt={testimonial.name} className="hover:scale-105 duration-200 size-16 rounded-full border-4 border-slate-300 flex items-center justify-center object-contain self-center" />
                                        <div className="text-left">
                                            <h5 className="text-lg font-semibold">{testimonial.name}</h5>
                                            <p className="text-slate-500 text-sm uppercase">{testimonial.profession}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="flex justify-center gap-4 mt-6">
                        <button
                            className="p-2 bg-slate-100 flex items-center justify-center text-primary rounded-full hover:bg-primary size-16 hover:text-white duration-500"
                            onClick={() => swiperRef.current?.slidePrev()}
                        >
                            <IoIosArrowBack size={24} />
                        </button>
                        <button
                            className="p-2 bg-slate-100 flex items-center justify-center text-primary rounded-full hover:bg-primary size-16 hover:text-white duration-500"
                            onClick={() => swiperRef.current?.slideNext()}
                        >
                            <IoIosArrowForward size={24} />
                        </button>
                    </div>
                </div>
            </CommonAnimation>
        </PaddingWrapper>
    );
}
