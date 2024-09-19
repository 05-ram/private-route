import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ current_user }) => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to={'/'} class="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/admin'} class="nav-link active" aria-current="page">Admin</Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/user'} class="nav-link active" aria-current="page">User</Link>
                        </li>
                        {
                            current_user === "admin" ?
                                <li class="nav-item">
                                    <Link to={'/user'} class="nav-link active" aria-current="page">Dashboard</Link>
                                </li> : ''
                        }
                    </ul>
                    <strong>{current_user}</strong>
                </div>
            </div>
        </nav>
    )
}

export default Navbar