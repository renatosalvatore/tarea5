import React, { useEffect, useState } from 'react'
//import { collection, addDoc, onSnapshot } from "firebase/firestore";
import './reservas.css'
//import db from '../../config/dbFirebase';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Table } from 'react-bootstrap';

function Reservas() {
  //para guardar el listado de reservas
  const[reservas, setReservas] = useState([]);
  
  const getReservas = async() =>{
   await fetch (
    "https://bcknd-tarea5.onrender.com/reservas/getReservList" 
    
   ) 
   .then(resultado =>  resultado.json()).then(respuesta => {
    setReservas (respuesta.data)
   })
  }

 useEffect(() =>{
getReservas();
 },[])

  return (
    <>
    <div >
     
   <div>
    <Table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Telefono</th>
          <th>Fecha</th>
          <th>Email</th>
          <th>Comensales</th>
        </tr>
      </thead>
      <tbody>
        {
          reservas.map(reserva => {
            return(
              <tr>
                <td>{reserva.nombre}</td>
                <td>{reserva.fono}</td>
                <td>{reserva.fecha}</td>
                <td>{reserva.email}</td>
                <td>{reserva.comensales}</td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
   </div>
   
    </div>
    </>
  )
}

export default Reservas