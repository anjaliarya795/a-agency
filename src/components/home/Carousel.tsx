'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import c1 from '@/../public/carousel/c1.jpg';
import c2 from '@/../public/carousel/c2.jpg';
import c3 from '@/../public/carousel/c3.jpg';
import PaddingWrapper from '../wrappers/PaddingWrapper';
import CommonAnimation from '../shared/CommonAnimation';


const carouselItems = [
  {
      image: c1,
      heading: "Empowering Your Career Growth Every Step",
      content: "At Vyavasaya, we believe in unlocking your potential. Join the leaders of tomorrow with access to the best job opportunities, tailored just for you. Take the next step in your career with us today."
  },
  {
      image: c2,
      heading: "Transforming Talent into Business Success",
      content: "Vyavasaya brings you top-tier talent that drives success and fosters innovation. Our recruitment solutions not only help businesses to grow but also ensure that you have the right people to lead and succeed in the competitive market."
  },
  {
      image: c3,
      heading: "Unlock Your Team's True Potential Today",
      content: "With Vyavasaya, you don’t just hire; you build a team of innovators, creators, and leaders. We help you find the perfect fit for your company, empower you to achieve greater success and create lasting impact."
  },
];


const Carousel = () => {
  return (
    <div className="w-full relative">
      <PaddingWrapper>
        <CommonAnimation>
          <div className="relative">
            <Swiper
              modules={[Pagination, Autoplay, Navigation]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
              className="shadow-lg rounded-md"
            >
              {carouselItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-64 md:h-96">
                    <Image
                      src={item.image}
                      alt={`Slide ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className="flex flex-col justify-center absolute inset-0 p-6 px-14 items-start bg-black/40 text-white">
                      <div className="flex flex-col w-[90%] md:w-[70%] lg:w-[60%] md:gap-4 sm:gap-2 gap-1">
                          <p className="md:text-4xl sm:text-2xl text-xl font-semibold">{item.heading}</p>
                          <p className="md:text-lg sm:text-base text-sm">{item.content}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button className="custom-prev absolute top-1/2 left-4 z-10 bg-slate-100 bg-opacity-20 text-slate-300 hover:text-slate-200 p-2 rounded-lg md:text-xl text-base py-3 -translate-y-1/2 hover:bg-opacity-50 duration-500">
              &#10094;
            </button>
            <button className="custom-next absolute top-1/2 right-4 z-10 bg-slate-100 bg-opacity-20 text-slate-300 hover:text-slate-200 p-2 rounded-lg md:text-xl text-base py-3 -translate-y-1/2 hover:bg-opacity-50 duration-500">
              &#10095;
            </button>
          </div>
        </CommonAnimation>
      </PaddingWrapper>
    </div>
  );
};

export default Carousel;
