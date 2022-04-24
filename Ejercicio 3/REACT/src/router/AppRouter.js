import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from '../components/NavBar'

import { PrivateRouteSuperUsers } from './PrivateRouteSuperUsers'
import { PrivateRouteUsers } from './PrivateRouteUsers'
import { SuperUser } from './SuperUser'
import { SuperUserRouter } from './SuperUserRouter'
import { UsersRouter } from './UsersRouter'

export const AppRouter = () => {
  return (
    <HashRouter>
        <Routes>
        <Route path='/*' element={<UsersRouter/>}/>
          <Route path='/admin/*' element={
            <PrivateRouteSuperUsers>
                <SuperUserRouter/>
            </PrivateRouteSuperUsers>
          }/>

          <Route path='/user/*' element={
            <PrivateRouteUsers>
                <SuperUser/>
            </PrivateRouteUsers>
          }/>

        </Routes>        
          {/* <Footer/> */}
    </HashRouter>

  )
}
