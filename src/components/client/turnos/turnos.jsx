import React from 'react'
import Turno from './turno'
import format from 'date-fns/format';
import es from 'date-fns/locale/es';

export default function Turnos({
  turnos,
  setPeriodoTurno,
  periodoTurno,
  filtrarTurnosPorPeriodo,
  servicioSeleccionado,
  fechaSeleccionada,
  setFechaSeleccionada,
  selectedDay,
  diaAbreviado,
  objetoDiaSeleccionado
}) {
  const fechaFormateada = format(selectedDay, "EEEE dd-MM", { locale: es } );  
  return (
    <div>
    {
      turnos.length !== 0 ? (
        <div>
          <p className='text-center'>Turnos del día <span className='capitalize font-medium text-xl'>{fechaFormateada}</span></p>
          <div className='flex flex-col md:flex-row items-center justify-center'>
            <div className=' mx-auto md:w-[20%] flex md:flex-col'>
              <button
                type='button'
                onClick={() => {
                  setFechaSeleccionada({})
                  setPeriodoTurno('mañana')
                }}
                className={`w-[120px] h-[44px] py-3 px-2 text-base ${periodoTurno === 'mañana' ? 'font-semibold border-b-[2px] md:border-b-0 md:border-l-[5px] border-black' : 'font-light'}`}
              >
                Mañana
              </button>
              <button
                type='button'
                onClick={() => {
                  setFechaSeleccionada({})
                  setPeriodoTurno('tarde')
                }}
                className={`w-[120px] h-[44px] py-3 px-2 text-base ${periodoTurno === 'tarde' ? 'font-semibold border-b-[2px] md:border-b-0 md:border-l-[5px] border-black' : 'font-light'}`}
              >
                Tarde
              </button>
            </div>
  
            <div className='w-full mx-auto flex flex-wrap justify-center md:justify-start gap-2 xl:gap-5 h-[184px] pb-2 md:py-4 overflow-y-auto'>
              {filtrarTurnosPorPeriodo?.length !== 0 ? (
                filtrarTurnosPorPeriodo.map((turno, i) => {
                  if (
                    (servicioSeleccionado.nombre === 'Claritos' || servicioSeleccionado.nombre === 'Color completo') &&
                    turno.servicio === 'color'
                  ) {
                    return (
                      <Turno
                        key={i}
                        turno={turno}
                        fechaSeleccionada={fechaSeleccionada}
                        setFechaSeleccionada={setFechaSeleccionada}
                        selectedDay={selectedDay}
                        diaAbreviado={diaAbreviado}
                        objetoDiaSeleccionado={objetoDiaSeleccionado}
                      />
                    );
                  } else if (
                    servicioSeleccionado.nombre !== 'Claritos' &&
                    servicioSeleccionado.nombre !== 'Color completo' &&
                    turno.servicio === 'corte'
                  ) {
                    return (
                      <Turno
                        key={i}
                        turno={turno}
                        fechaSeleccionada={fechaSeleccionada}
                        setFechaSeleccionada={setFechaSeleccionada}
                        selectedDay={selectedDay}
                        diaAbreviado={diaAbreviado}
                        objetoDiaSeleccionado={objetoDiaSeleccionado}
                      />
                    );
                  } else {
                    return null;
                  }
                })
              ) : (
                <div className='h-[183px] flex justify-center'>
                  <p className='text-2xl text-[#1e1e1e] text-center'>
                    {
                      (servicioSeleccionado.nombre === 'Claritos' || servicioSeleccionado.nombre === 'Color completo')
                        ? 'No hay turnos disponibles para este servicio y día'
                        : 'No hay turnos disponibles para este día'
                    }
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className='h-[183px] flex justify-center'>
          <p className='text-2xl text-[#1e1e1e] text-center'>No hay turnos disponibles para este día</p>
        </div>
      )
    }
  </div>
  
  )
}
