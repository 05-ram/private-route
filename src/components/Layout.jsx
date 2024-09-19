import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = ({ current_user }) => {
    return (
        <div>
            <Navbar current_user={current_user} />
            <Outlet />
        </div>
    )
}

export default Layout