import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { Index } from '../Screen/Index'
import { ScreenInformatica } from '../Screen/ScreenInformatica'
import { ScreenMatematica } from '../Screen/ScreenMatematica'
import { ScreenQuimica } from '../Screen/ScreenQuimica'
import { LoginScreen } from '../components/LoginScreen'

export const UsersRouter = () => {
return (
    <div className='animate__animated animate__fadeIn'>
        <NavBar/>
        <Routes>
        <Route path='/*' element={<Index/>} />
            <Route path='/quimica' element={<ScreenQuimica/>} />
            <Route path='/matematica' element={<ScreenMatematica/>} />
            <Route path='/informatica' element={<ScreenInformatica/>} />
            <Route path='/login' element={<LoginScreen/>} />
        </Routes>  
    </div>
  )
}
