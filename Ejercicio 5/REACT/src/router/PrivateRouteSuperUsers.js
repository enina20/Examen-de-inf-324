import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContenxt';



export const PrivateRouteSuperUsers = ({ children }) => {

    const { user } = useContext(AuthContext);
    // const { pathname, search } = useLocation();
    
    // localStorage.setItem('lastPath', pathname + search );
    //console.log(user.logged)
    return  user.type === '1'
        ? children
        : <Navigate to="/" />
}