import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../layout/navbar'
import { Transition } from '@headlessui/react';


export default function PantallaTurnoConfirmado({ modal }) {
    return (
        <Transition show={modal}
            className='fixed h-screen w-full bg-white z-20'>
            <Navbar/>
            <div className='flex flex-col gap-y-8 justify-center items-center mt-20'>
                <img src="https://i.ibb.co/yPgztTH/check-circle.png" alt="Icono turno confirmado" />
                <p className='font-bold text-2xl'>Tu reserva fue completada con éxito</p>
                <p className='font-light text-base'>Puedes revisar el estado de tu reserva o cancelarla si lo deseas desde tu perfil.</p>
                <Link
                    to='/usuario'
                    className='w-[209px] h-[48px] py-3 px-6 flex justify-center items-center bg-black text-white font-bold text-base uppercase'
                >
                    <ion-icon name="add-sharp"></ion-icon>
                    Ver turno
                </Link>
            </div>
        </Transition>
    )
}
