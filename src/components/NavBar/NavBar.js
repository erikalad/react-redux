import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../logo-peliculas.png'
import './Navbar.css';

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light" id="nav">
            <div className="container-fluid">
            <a id="contenedor-logo" className="navbar-brand" href="#">
                <img className="logo" src={Logo} alt="logo"/><p id="logo-letras">Buscador de Peliculas</p>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink exact to="/"  className="nav-link active" aria-current="page" id="home">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/favs"  className="nav-link" id="fav">Favoritas</NavLink>
                </li>
                </ul>
                
            </div>
            </div>
      </nav>
    )
}