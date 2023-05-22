import { useState, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../utils/firebaseconfig';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default function StepProfesional({ profesionalSeleccionado, setProfesionalSeleccionado }) {

  const [ profesionales, setProfesionales ] = useState([])
  useEffect(()=>{
    const consultarProfesionales = async () => {
      const docRef = doc(db, 'utilidades', 'profesionales')
      const serviciosDoc = await getDoc(docRef)
      setProfesionales(serviciosDoc.data().profesionales)
    }
    return () => consultarProfesionales()
  },[])
  return (

    <div className='sm:w-[90%] mx-auto overflow-x-hidden'>
      <div className='swiper-button-prev swiper-button'></div>
      <div className='swiper-button-next swiper-button'></div>

      <Swiper
        //params={swiperOptions}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 2,
          },
        }}
      >
        {profesionales?.map((profesional) =>
          <SwiperSlide key={profesional.nombre}>

            <div
              onClick={() => setProfesionalSeleccionado(profesional)}
              className={`
              flex flex-col cursor-pointer rounded-3xl max-w-[235px] mx-auto my-2
              hover:outline outline-[#1e1e1e]
              ${profesionalSeleccionado.nombre === profesional.nombre ? 'outline outline-[#1e1e1e]' : ''}
                `
              }

            >
              <img className="rounded-3xl h-[235px] w-[235px] object-top" src={profesional.img} alt={profesional.nombre} />
              <div className='w-full flex flex-col py-2 my-2 justify-center '>
                <p className='text-gray-800  text-lg font-semibold uppercase text-center'>{profesional.nombre}</p>
                 <p className="text-xs text-gray-400 py-2">{profesional.profesion}</p> 
          
              </div>
            </div>

          </SwiperSlide>
        )}
      </Swiper>
    </div>


  );
}