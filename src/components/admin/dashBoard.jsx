import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext'


export default function DashBoard() {

    const [mostrarMensaje, setMostrarMensaje] = useState(false)

    const { logOut } = useAuth()
    const navigate = useNavigate()

    const routes = [
        {
            id: 1,
            name: 'Turnos',
            pathname: '/admin/turnos',
            icon: 'reader'
        },
        {
            id: 2,
            name: 'Dias y horarios',
            pathname: '/admin/diasyhorarios',
            icon: 'calendar-number'
        },
        {
            id: 3,
            name: 'Servicios',
            pathname: '/admin/servicios',
            icon: 'cut'
        },
        {
            id: 4,
            name: 'Profesionales',
            pathname: '/admin/Profesionales',
            icon: 'lock-closed'
        },
    ]
    return (
        <aside className='w-[250px]  bg-[#2D2D2D] h-screen fixed top-0 left-0'>
            <div className='h-full flex flex-col justify-around items-center relative'>
                <img
                    src="https://i.ibb.co/qxH90r1/dffe70f8-5ff0-4439-b1ba-9199478e6888.jpg"
                    alt="logo"
                    className='w-[200px]'
                />
                <div className='flex flex-col gap-y-2 items-start'>
                    {
                        routes.filter(route => route.icon !== 'lock-closed')
                            .map(route =>
                                <div
                                    key={route.id}
                                    className={`w-[226px] py-2 px-4 flex gap-x-2 text-white ${location.pathname === route.pathname ? ' bg-[#1e1e1e] ' : ''}`}
                                >
                                    <p className='text-lg pt-1 text-[#fdfffc]'>
                                        <ion-icon name={route.icon}></ion-icon>
                                    </p>
                                    <Link

                                        to={route.pathname}
                                        className={`
                                    text-sm text-[#fdfffc]  w-[226px] pt-[5px]
                                    ${location.pathname === route.pathname ? 'font-bold ' : ' font-light'}
                         `}
                                    >
                                        {route.name}
                                    </Link>
                                </div>
                            )
                    }
                    <div
                        className={`w-[226px] py-2 px-4 flex gap-x-2 text-white`}
                        onClick={() => setMostrarMensaje(!mostrarMensaje)}
                        
                    >
                        <p className='text-lg pt-1 text-[#fdfffc]'>
                            <ion-icon name='lock-closed'></ion-icon>
                        </p>
                        <p
                            className='text-sm text-[#fdfffc]  w-[226px] pt-[5px] font-light cursor-pointer'
                        >
                            Profesionales
                        </p>
                        
                    </div>

                    {  mostrarMensaje &&
                        <div 
                        onMouseEnter={() => setMostrarMensaje(true)}
                        onMouseLeave={() => setMostrarMensaje(false)}
                        className='bg-[#1e1e1e] rounded-lg h-20 w-56 absolute bottom-44 flex flex-col items-center justify-evenly'>
                            <p className='text-white font-light text-sm text-center'>
                                 Para agregar profesionales es necesario cambiar al plan pro
                            <span className='text-[#fdfffc] underline rounded-lg font-medium p-2 cursor-pointer'>Cambiar plan</span>
                                 
                            </p>
                        </div>

                    }

                </div>

                <div className='w-[226px] flex py-2 px-4 items-center '>
                    <button
                        className=' flex gap-x-1 items-center text-sm text-[#fdfffc]'
                        onClick={() => {
                            logOut()
                            navigate('/micuenta')
                        }}
                    >
                        <p className='text-lg pt-[5px]'>
                            <ion-icon name="log-out-outline"></ion-icon>
                        </p>
                        <p>Cerrar sesión</p>
                    </button>
                </div>
            </div>
        
        </aside>
    )
}
