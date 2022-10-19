import React from "react";
import navegacionCSS from "./navegacion.css";
import {useAuth0} from '@auth0/auth0-react';
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import Login from "../login/Login";
import Logout from "../logout/Logout";
import Profile from "../profile/Profile";

const Navbar = () => {
  const {isAuthenticated} = useAuth0();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navegacion">
      <div className="container-fluid ">
        <Logo></Logo>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to='/'>Inicio</Link>
            {isAuthenticated ? <>
              <Profile></Profile>
              <Logout></Logout>
            </> : <Login></Login>
            }
            <Link className="nav-link" to='/carrito'>
              <img className='navegacion__icono' src=".\img\iconos\Carrito.svg" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;