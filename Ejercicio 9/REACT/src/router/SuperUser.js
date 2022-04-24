import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom';


import { AuthContext } from '../auth/authContenxt';
import { NavBar } from '../admin/NavBar';
import { LeftSidebar } from '../admin/LeftSidebar';
import { UserScreen } from '../admin/UserScreen';

export const SuperUser = () => {
    const {user} = useContext(AuthContext)
    // const {dataPlaces}= useGetPlaces()
    // console.log(dataPlaces.places)
    console.log(user)
    return (
        <>
            <NavBar type = {'/admin'} name= {user.data.nombre} email={user.data.usuario} />
            <LeftSidebar name={user.data.nombre} />
            <Routes>
                <Route path='/' element={<UserScreen/>} />
                {/* <Route path='/user' element={<Crud/>} /> */}
            </Routes>
        </>
    )
}
