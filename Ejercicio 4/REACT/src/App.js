import React, { useReducer } from 'react'
import { AuthContext } from './auth/authContenxt';
import { authReducer } from './auth/authReducer';
import { AppRouter } from './router/AppRouter'

const init = () => {
  // return JSON.parse( localStorage.getItem('user') ) || { name: '',logged: false };
  return { data: {user:[{name: ''}]},logged: false,type: 0 };
}

export const App = () => {

  const [ user, dispatch ] = useReducer( authReducer, {}, init );

  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
    <AppRouter/>
    </AuthContext.Provider>
  )  
}

// useEffect(() => {
//     if ( !user ) return;

//     // localStorage.setItem('user', JSON.stringify(user) );
// }, [ user ])