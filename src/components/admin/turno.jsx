import React, { useState } from 'react'

import Alerta from '../utils/alerta';



export default function Turno({ 
    turno, 
    index, 
    handleModal, 
    modal, 
    setModalDatosDeTurno, 
    setTurnoACancelar, 
    cancelarTurno,
    modalEliminarTurno,
    setModalEliminarTurno,
    eliminarTurno 
}) {




    const { cliente, telefono, hora, servicio, profesional, estado, userId, turnoId } = turno;

    console.log(userId)

    const verificarEstadoDelTurno = () =>{
        if(estado === 'cancelado'){
            return null
        }else{
            handleModal()
            setTurnoACancelar(turno)
        }
    }

    return (
        <div
            className={
                `grid grid-cols-[3fr,3fr,1fr,1fr] 
                sm:grid-cols-[2fr,2fr,2fr,2fr,1fr]
                md:grid-cols-[2fr,2fr,2fr,2fr,2fr,2fr,1fr]
                lg:grid-cols-7 
                place-items-start  content-center justify-center items-center py-4 px-2 xl:px-10 text-[#2d2d2d] 
        ${estado === 'cancelado' ? 'bg-red-100' : 'bg-green-100'}
        `}
        >



            <p className='font-light text-sm'>{cliente}</p>
            <div className='flex items-center gap-x-1 underline'>
                <ion-icon name="logo-whatsapp"></ion-icon>
                <a href={`https://wa.me/${telefono}`} className='font-medium text-sm'>{telefono}</a>
            </div>
            <p className='font-light text-sm'>{hora}</p>
            <p className='font-light text-sm hidden sm:block'>{profesional}</p>
            <p className='font-light text-sm hidden md:block'>{servicio}</p>
            <p className={`font-medium text-sm hidden md:block ${estado === 'confirmado' ? 'text-green-600' : 'text-red-600'}`}>{estado}</p>
            
        {
            estado === 'confirmado'
                ?<button
                    className='lg:mx-7 hidden md:block'
                    onClick={verificarEstadoDelTurno}
                >
                    <img src="https://i.ibb.co/KwQGXF8/delete-3.png" alt="icono cancelar turno" />
                </button>
                :<button
                    className='lg:mx-7 hidden md:block'
                    onClick={() => setModalEliminarTurno(!modalEliminarTurno)}
                >
                    <img src="https://i.ibb.co/KwQGXF8/delete-3.png" alt="icono cancelar turno" />
                </button>
            }

            <button
                className='md:hidden   pl-7'
                onClick={() => setModalDatosDeTurno(turno)}
            >
                <img src="https://i.ibb.co/sqMv74d/more-vert.png" alt="Ver más" />
            </button>


            {
                modal &&
                <Alerta
                    titulo={'Cancelar reserva'}
                    texto={`¿Estás seguro de cancelar la reserva? El horario se habilitara para que otra persona pueda reservar.`}
                    txtBtnCancelar={'No, conservar.'}
                    txtBtnConfirmar={'Si, cancelar.'}
                    cancelar={handleModal}
                    confirmar={cancelarTurno}
                />
            }
            {
                modalEliminarTurno &&
                <Alerta
                    titulo={'Eliminar reserva'}
                    texto={`¿Estás seguro de eliminar la reserva? La reserva cancelada sera eliminada y no podrá deshacerse.`}
                    txtBtnCancelar={'No, conservar.'}
                    txtBtnConfirmar={'Si, eliminar.'}
                    cancelar={() => setModalEliminarTurno(!modalEliminarTurno)}
                    confirmar={eliminarTurno}
                />
            }
        </div>

    )
}
