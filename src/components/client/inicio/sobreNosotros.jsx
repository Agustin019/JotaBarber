import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";



export default function SobreNosotros() {
  

  const images = [
    "https://i.ibb.co/9cpJt1n/barbpesada3-optimized.jpg",
    "https://i.ibb.co/CHyrhFj/barbpesada-optimized.jpg",
    "https://i.ibb.co/wY6b33B/barbpesada2-optimized.jpg",

  ];

  return (
    <section className='w-full h-auto max-w-full max-h-full mx-auto overflow-hidden '>
     
     <article className='flex flex-col items-center pt-20 lg:pt-0 my-10 gap-y-5 '>
      <h2 className='font-bold text-[32px] text-center'>Sobre nosotros</h2>
      <p className='font-light text-sm text-center lg:w-[80%] lg:mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rem fugiat earum ducimus aperiam, ea dolorum, natus, autem qui mollitia iure unde deserunt exercitationem et dolorem suscipit maxime perspiciatis accusamus!
      </p>
     </article>
     {/* <div className='swiper-button-prev swiper-button'></div>
          <div className='swiper-button-next swiper-button'></div> */}
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          ///loop={true}
          // navigation={{
          //   prevEl: '.swiper-button-prev',
          //   nextEl: '.swiper-button-next',
          // }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          modules={[Navigation]}
          className="mySwiper flex justify-center"
        >
   
          {images.map((image, index) => (
            <SwiperSlide
            key={index}
            
            >
              <div className={` flex flex-col items-center justify-center  rounded-3xl max-h-[348px] min-h-[348px] w-[348px] mx-auto my-2
              
              ${
                index == 1 
                ? 'lg:max-w-[480px] lg:ml-auto lg:min-w-[480px] lg:min-h-[372px]  lg:mr-[150px]'
                :'lg:max-w-[351px] lg:max-h-[256px] lg:min-h-[372px] lg:pt-14  lg:ml-auto'
              }
              `

            }>
                <img
                  className={`rounded-3xl object-top h-[328px] max-h-[328px] w-[328px] mx-auto
                      ${
                        index == 1 
                      ? 'lg:max-w-[510px] lg:min-w-[480px] lg:min-h-[372px]  '
                      :'lg:h-[256px] lg:min-w-[256px] '
                    }
                  `}
                  src={image}
                  alt={`Imagen ${index + 1}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    
    
    </section>
  );
}
