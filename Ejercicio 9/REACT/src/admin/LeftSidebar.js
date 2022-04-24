import React from 'react'
import { NavLink } from 'react-router-dom'

export const LeftSidebar = ({name}) => {
  return (
    <aside className="left-sidebar">
            {/* <!-- Sidebar scroll--> */} 
            <div className="scroll-sidebar">
                {/* <!-- Sidebar navigation--> */}
                <nav className="sidebar-nav">  
                    <ul id="sidebarnav">
                        <li className="user-profile">
                            <p className="waves-effect waves-dark ml-3 text-light" ariaExpanded="false"><span className="hide-menu">{name}</span></p>
                        </li>
                        <li className="nav-devider"></li>
                        <li className="nav-small-cap">PERSONAL</li>
                            <ul aria-expanded="true">
                                <li>
                                    <NavLink to="/admin">Inicio</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/admin/crud">Crud</NavLink>
                                </li>
                            </ul>
                    </ul>
                </nav>
                {/* <!-- End Sidebar navigation --> */}
            </div>
            {/* <!-- End Sidebar scroll--> */}
        </aside>
  )
}
