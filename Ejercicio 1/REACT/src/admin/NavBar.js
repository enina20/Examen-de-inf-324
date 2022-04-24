import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../auth/authContenxt'
import { types } from '../types/types'

export const NavBar = ({type='/',email,name,path=''}) => {
    const {user,dispatch} = useContext(AuthContext)
    const logout = ()=> {
        const action = {
            type: types.logout
        }
        dispatch(action);
    }
    // console.log(user.type)
  return (
    <header className="topbar">
    <nav className="navbar top-navbar navbar-expand-md navbar-light">
        <div className="navbar-header">
            <Link className="navbar-brand" to={type}>
                <img src="../assets/images/logo-light-icon.png" alt="homepage" className="light-logo" />
                <span>
                    <img src="../assets/images/logo-text.png" alt="homepage" className="dark-logo" />
                    <img src="../assets/images/logo-light-text.png" className="light-logo" alt="homepage" />
                </span>
            </Link>
        </div>
        <div className="navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item"> <Link to='#' className="nav-link nav-toggler hidden-md-up waves-effect waves-dark"><i className="ti-menu"></i></Link> </li>
                <li className="nav-item"> <Link to='#' className="nav-link sidebartoggler hidden-sm-down waves-effect waves-dark"><i className="ti-menu"></i></Link> </li>
            </ul>
            <ul className="navbar-nav my-lg-0">
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle waves-effect waves-dark" to="#" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false"><img src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"
                            alt="user" className="profile-pic" /></Link>
                    <div className="dropdown-menu dropdown-menu-right animated flipInY">
                        <ul className="dropdown-user">
                            <li>
                                <div className="dw-user-box">
                                    <div className="u-img"><img src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" alt="user"/></div>
                                    <div className="u-text">
                                        <h4>{name}</h4>
                                        <p className="text-muted">{email}</p>
                                        {
                                            user.type === 2 &&
                                            <Link to={`${path}/perfil`}>Perfil</Link>
                                        }   
                                    </div>
                                </div>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li><Link to='/' ><i className="fa fa-power-off"></i> App</Link></li>
                            <li><Link to='/' onClick={logout}><i className="fa fa-power-off"></i> Logout</Link></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</header>
)
}


