import React from 'react'
import { NavLink } from 'react-router-dom'
import './navegador.css'
import { UserContext } from '../Context/UserContext';
import { useContext } from 'react';
import Singin from '../components/singin/Singin';
import Singup from '../components/SingUp/Singup';

function Navegador() {

  const { auth } = useContext(UserContext);

  return (
    <>
     <nav className='navegador'>
        <div className='contenedor'>
            <div> <NavLink to="/" className="logoNav"> Restaurante Chileno</NavLink></div>
            <ul className='navMenu'>
            <li className='navItem'>
                <NavLink to="/" className="navLink">Home</NavLink>
              </li>
              <li className='navItem'>
                <NavLink to="/Conocenos" className="navLink">Conocenos</NavLink>
              </li>
              <li className='navItem'>
                <NavLink to="/Productos" className="navLink">Productos</NavLink>
              </li>
              {auth.rol=="administrador"&&<li className='navItem'>
                <NavLink to="/Reservaciones" className="navLink">Reservaciones</NavLink>
              </li>}
              {auth.rol=="administrador"&&<li className='navItem'>
                <NavLink to="/CrearProductos" className="navLink">Crear Productos</NavLink>
              </li>}
              <li className='navItem'>
                <NavLink to="/Reserva1" className="navLink">Reservas</NavLink>
              </li>
              <li className='navItem'>
                <NavLink to="/SingUp" className="navLink">Singup</NavLink>
              </li>
              <li className='navItem'>
                <NavLink to="/Singin" className="navLink">Login</NavLink>
              </li>
              
              </ul>
          </div>
      </nav>
    </>
  )
}

export default Navegador