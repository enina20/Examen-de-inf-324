import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom';


import { AuthContext } from '../auth/authContenxt';
import { NavBar } from '../admin/NavBar';
import { LeftSidebar } from '../admin/LeftSidebar';
import { AdminScreen } from '../admin/AdminScreen';
import { Crud } from '../admin/Crud';

export const SuperUserRouter = () => {
    const {user} = useContext(AuthContext)
    // const {dataPlaces}= useGetPlaces()
    // console.log(dataPlaces.places)
    console.log(user)
    return (
        <>
            <NavBar type = {'/admin'} name= {user.data.nombre} email={user.data.usuario} />
            <LeftSidebar name={user.data.nombre} />
            <Routes>
                <Route path='/' element={<AdminScreen/>} />
                <Route path='/crud' element={<Crud/>} />

                {/* <Route path='/userg' element={<UserGerencialScreen/>} /> */}
            </Routes>
        </>
    )
}
