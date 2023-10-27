
import React from 'react'
import './conocenos.css'
import img from '../../img/porotosConRTienda.jpg'
import { Link } from 'react-router-dom'
import Reserva1 from '../reserva/Reserva1';


function Conocenos() {
  
  return (
    <>
      <div className='abtContenedor' >
        <div className='wrapper'>
          <div className='row'>
            <div className='column1'>
              <div className='text-wrap'>
                <h1 className='topLine'>Conocenos!!</h1>
                <p className='heading'>Restaurante familiar con un toque de sabor Chileno</p>
                <p className='subtitle'>Utilizando los ingredientes típicos de nuestro país, podemos darte el platillo más sabroso y de la mejor calidad, como si estuvieras en casa!</p>
                <p className='heading'> Nos encontramos en camino altos del Valle s/n, ruta I-150</p>
                <p className='heading'>escribenos a: contacto contacto@restaurantechileno.cl o llamanos al: +562123654877</p>
                <div className='btnWrapC'>
                  <button className='btnHome' >
                    <Link className="presentacion-link" to="../Reserva1">Reserva</Link></button>
                </div>
              </div>
            </div>
            <div className='column2'>
             <div className='imgWrapC'>
             <img className='imgConocenos' src={img}/>
             </div>
              
            </div>
          </div>
        </div>

      </div>
      </>
  )
}

export default Conocenos
