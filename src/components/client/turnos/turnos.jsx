import React from 'react'
import Turno from './turno'

export default function Turnos({ 
    setPeriodoTurno, 
    periodoTurno, 
    filtrarTurnosPorPeriodo,
    fechaSeleccionada, 
    setFechaSeleccionada, 
    selectedDay,
    diaAbreviado,
    objetoDiaSeleccionado
}) {
  return (
    <div className='flex'>
        <div className='w-[20%] flex flex-col'>
            <button
                onClick={() => {
                  setFechaSeleccionada({})
                  setPeriodoTurno('mañana')
                }}
                className={`w-[120px] h-[44px] py-3 px-2 text-base ${periodoTurno === 'mañana' ? 'font-semibold border-l-[5px] border-black' : 'font-light'}`}>
                Mañana
            </button>
            <button
                onClick={() => {
                  setFechaSeleccionada({})
                  setPeriodoTurno('tarde')
                }}
                className={`w-[120px] h-[44px] py-3 px-2 text-base ${periodoTurno === 'tarde' ? 'font-semibold border-l-[5px] border-black' : 'font-light'}`}>
                Tarde
            </button>
        </div>
    <div className='w-[90%] flex flex-wrap gap-5 h-[150px] overflow-y-auto'>
      {
        filtrarTurnosPorPeriodo?.map((turno, i) => 
            <Turno 
                key={i} 
                turno={turno}
                fechaSeleccionada={fechaSeleccionada}
                setFechaSeleccionada={setFechaSeleccionada}
                selectedDay={selectedDay}
                diaAbreviado={diaAbreviado}
                objetoDiaSeleccionado={objetoDiaSeleccionado}
            />
             )
      }
    </div>
  </div>
  )
}
