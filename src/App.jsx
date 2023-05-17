import React from 'react'
import './index.css'
import {  BrowserRouter, Route, Routes } from 'react-router-dom'
import { useAuth } from './context/authContext'

import Layout from './components/layout/layout'
import Turnos from './pages/client/turnos'
import NuevoTurno from './pages/client/nuevoTurno'
import Agenda from './pages/admin/agenda'
import AdministrarTurnos from './pages/admin/administrarTurnos'
import Inicio from './pages/client/inicio'
import InicioAdmin from './pages/admin/inicioAdmin'

import MiCuenta from './pages/client/miCuenta'
import Usuario from './pages/client/usuario'

import CalendarioPrueba from './pages/client/calendarioPrueba'

function App(){

const { user } = useAuth()


    return (
        <BrowserRouter>
            <Layout/>
            <Routes>
                //Cliente
                <Route path='/' element={<Inicio/>}/>
                <Route path='/turnos' element={ user ?<Turnos/> :<MiCuenta/>}/> 
                <Route path='/nuevoturno' element={ user ?<NuevoTurno/> :<MiCuenta/>}/> 
                <Route path='/micuenta' element={<MiCuenta/>}/>
                <Route path='/usuario' element={<Usuario/>}/>
                <Route path='/calendario' element={<CalendarioPrueba/>}/>

                //Admin
                <Route path='/admin' element={<InicioAdmin/>}/>
                <Route path='/admin/agenda' element={<Agenda/>}/>
                <Route path='/admin/administrarturnos' element={<AdministrarTurnos/>}/>
            </Routes>
        </BrowserRouter>
  )
}

export default App
