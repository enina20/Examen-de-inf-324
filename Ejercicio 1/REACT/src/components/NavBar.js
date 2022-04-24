import React from 'react'
import { Link } from 'react-router-dom'
// import { AuthContext } from '../../auth/authContenxt';
// import { types } from '../../types/types';

export const NavBar = () => {
    // const {user,dispatch} = useContext(AuthContext)
    // const information = user.data.user;
    const btnOpen = ()=> {
        const menu = document.querySelector('.js-header-menu');
        const backdrop = document.querySelector('.js-header-backdrop');
        const menuCollapseBreakpoint = 991;
        menu.classList.toggle("open");
        backdrop.classList.toggle("active");
        // document.body.classList.toggle("overflow-hidden");
        window.addEventListener("resize", function() {
            if(this.innerWidth > menuCollapseBreakpoint && menu.classList.contains("open")){
                menu.classList.toggle("open");
                backdrop.classList.toggle("active");
                // document.body.classList.toggle("overflow-hidden");
            }
            if(this.innerWidth > menuCollapseBreakpoint && menu.querySelector(".active")){
                menu.querySelector(".active .js-sub-menu").removeAttribute("style");
                menu.querySelector(".active").classList.remove("active");
            }
        });
    }
    const handleEvent=(e)=>{
        e.preventDefault();
        const menuCollapseBreakpoint = 991;
        const backdrop = document.querySelector('.js-header-backdrop');
        const menu = document.querySelector('.js-header-menu');
        if(e.target.classList.contains("js-toggle-sub-menu") && 
      window.innerWidth <= menuCollapseBreakpoint){  
        // if menu-item already expanded, collapse it and exit 
        if(e.target.parentElement.classList.contains("active")){
            menu.querySelector(".active .js-sub-menu").removeAttribute("style");
            menu.querySelector(".active").classList.remove("active");
            return;
        }
        // if not already expaned... run below code
        
        // collapse the other expanded menu-item if exists
        if(menu.querySelector(".active")){
            menu.querySelector(".active .js-sub-menu").removeAttribute("style");
            menu.querySelector(".active").classList.remove("active");
        }
  
        // expand new menu-item
        e.target.parentElement.classList.add("active");
        e.target.nextElementSibling.style.maxHeight = 
        e.target.nextElementSibling.scrollHeight + "px";
    }
    window.addEventListener("resize", function() {
        if(this.innerWidth > menuCollapseBreakpoint && menu.classList.contains("open")){
            menu.classList.toggle("open");
            backdrop.classList.toggle("active");
            // document.body.classList.toggle("overflow-hidden");
        }
        if(this.innerWidth > menuCollapseBreakpoint && menu.querySelector(".active")){
            menu.querySelector(".active .js-sub-menu").removeAttribute("style");
            menu.querySelector(".active").classList.remove("active");
        }
    });
    
}
// console.log(information)
    // const cerrar = ()=> {
    //     const action = {
    //         type: types.logout
    //     }
    //     dispatch(action);
    // }
    return (
    <header className="header">
        <div className="container">
            <div className="header-main d-flex justify-content-between align-items-center">
                <div className="header-logo">
                    <Link to="/">FCPN</Link>
                </div>
                <button type="button" className="header-hamburger-btn js-header-menu-toggler" onClick={btnOpen} >
                    <span></span>
                </button>
                <div className="header-backdrop js-header-backdrop"></div>
                <nav className="header-menu js-header-menu">
                    <button type="button" className="header-close-btn js-header-menu-toggler" onClick={btnOpen}>
                        <i className="fas fa-times"></i>
                    </button>
                    <ul className="menu">
                        {/* <li className="menu-item" onClick={window.innerWidth < 990 ?btnOpen:undefined}><Link to="/places">Lugares</Link></li> */}
                        {/* <li className="menu-item menu-item-has-children" onClick={handleEvent} >
                            <Link to="#" className="js-toggle-sub-menu">Servicios <i className="fas fa-chevron-down"></i></Link>
                            <ul className="sub-menu js-sub-menu">
                                <li className="sub-menu-item" onClick={window.innerWidth < 990 ?btnOpen:undefined}><Link to="/hotels">Hoteles</Link></li>
                                <li className="sub-menu-item" onClick={window.innerWidth < 990 ?btnOpen:undefined}><Link to="/agencies">Agencias de Turismo</Link></li>
                            </ul>
                        </li> */}
                        <li className="menu-item menu-item-has-children" onClick={handleEvent} >
                            <Link to="/login" className="js-toggle-sub-menu">Ingresar <i className="fas fa-chevron-down"></i></Link>
                            <ul className="sub-menu js-sub-menu">
                                <li className="sub-menu-item" onClick={window.innerWidth < 990 ?btnOpen:undefined}><Link to="/login">Iniciar Sesión</Link></li>
                                <li className="sub-menu-item" onClick={window.innerWidth < 990 ?btnOpen:undefined}><Link to="/">Cerrar Sesión</Link></li> 
                                {/* onClick={cerrar} */}
                            </ul>
                            {/* } */}
                            {/* {
                            user.type === 0 &&  <ul className="sub-menu js-sub-menu">
                                <li className="sub-menu-item"><Link onClick={window.innerWidth < 990? btnOpen:undefined} to="/loginUsers">Iniciar Sesión</Link></li>
                                <li className="sub-menu-item"><Link onClick={window.innerWidth < 990 ?btnOpen:undefined} to="/signUpUsers">Registrate</Link></li>
                            </ul>
                            }
                            {
                                user.type === 1 &&  <ul className="sub-menu js-sub-menu">
                                <li className="sub-menu-item"><Link to="/" onClick={cerrar} >Cerrar Sesión</Link></li>
                            </ul>
                            }
                             {user.type === 3 &&  
                            <ul className="sub-menu js-sub-menu">
                                <li className="sub-menu-item"><Link onClick={window.innerWidth < 990 ? btnOpen:undefined}  to="/login">Super Usuario</Link></li>
                                <li className="sub-menu-item"><Link to="/" onClick={cerrar} >Cerrar Sesión</Link></li>
                            </ul>
                            } */}
                        </li>
                        {/* {
                            user.type === 1 &&
                            <li className="menu-item menu-item-has-children" onClick={handleEvent} >
                                <Link to="#" className="js-toggle-sub-menu">{information[0].User_Name_} <i className="fas fa-chevron-down"></i></Link>
                                <ul className="sub-menu js-sub-menu">
                                    <li className="sub-menu-item" onClick={window.innerWidth < 990 ?btnOpen:undefined}><Link to={`/userAdmin/${information[0].User_Slug}`}>Admin</Link></li>
                                </ul>
                            </li>
                        } */}


                        
                        
                        {/* <li className="menu-item"><p style={{display: 'block','fontWeight': 500,'color': '#1a1a1a','textTransform': 'capitalize','transition': 'color 0.3s ease','padding': '12px 15px' }} >{information[0].User_Name_}</p></li>    */}
                    </ul>
                </nav>
            </div>
        </div>
      </header>
    )
}
// /${information[0].User_Slug}