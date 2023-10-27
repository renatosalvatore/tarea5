import React from 'react'
import srcimg from '../../img/cazuela2.jpg'
import './presentacion.css'
import { Link } from 'react-router-dom'
function Presentacion() {
  return (
    <>
    <div className='homeContenedor'>
        {/* <div className='homeBg'>
            <video autoPlay loop muted className='videoBg' src={video} type='video/mp4'></video>
        </div> */}
        <div className='homeBg'>
            <img className='imgBg' src={srcimg} alt='imagen'/>
        </div>
        <div className='homeContent'>
             <h1 className='home-h1'>Cocina Chilena</h1>
            <p className='home-p1'>Restaurante de comida típica de chile</p>
            <p className='home-p'>2023</p>
            <div className='btnWrap'>
                <button className='btnHome'>
                   <Link className="presentacion-link" to = "/menu">Conoce Más!</Link>
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Presentacion