'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';

import PaddingWrapper from '../../wrappers/PaddingWrapper';
import CommonAnimation from '@/components/shared/CommonAnimation';

const carouselsItems = [
  {
    image: '',
  },
  {
    image: '',
  },
  // {
  //   image: c4,
  // },
];

export default function ClientsCarousel() {
  return (
    <div className="w-full relative mx-auto py-8">
      <CommonAnimation>
        <PaddingWrapper>
          <div className="flex flex-col items-center gap-4 mb-8">
            <span className="text-secondary text-2xl border-b-2 border-secondary font-bold">Our Prestigious Clients</span>
          </div>
          <div className="">
            <Swiper
              slidesPerView={2}
              loop
              spaceBetween={20}
              breakpoints={{
                512: { slidesPerView: 3 },
                640: { slidesPerView: 4 },
                768: { slidesPerView: 5 },
                1024: { slidesPerView: 6 },
              }}
              autoplay={{ delay: 3000 }}
              modules={[Pagination, Autoplay, Navigation]}
              navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
            >
              {carouselsItems.map((item, index) => (
                <SwiperSlide key={index} className="flex justify-center items-center ">
                  <Image src={item.image} style={{height:'200px'}} className='mix-blend-darken object-contain' alt="Client Logo" width={150}/>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            {/* <button className="custom-prev absolute top-1/2 left-4 z-10 bg-slate-100 bg-opacity-20 text-primary p-2 rounded-lg md:text-xl text-base py-3 -translate-y-1/2 hover:bg-opacity-50 duration-500">
              &#10094;
            </button>
            <button className="custom-next absolute top-1/2 right-4 z-10 bg-slate-100 bg-opacity-20 text-primary p-2 rounded-lg md:text-xl text-base py-3 -translate-y-1/2 hover:bg-opacity-50 duration-500">
              &#10095;
            </button> */}
          </div>
        </PaddingWrapper>
      </CommonAnimation>
    </div>
  );
}
