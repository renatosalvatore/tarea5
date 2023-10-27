import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Table } from 'react-bootstrap';


function Productos() {
const [productos, setProductos] = useState([])
const getProductos = async() =>{
  await fetch ("https://bcknd-tarea5.onrender.com/Productos/getProdList")
  .then(resultado =>  resultado.json()).then(respuesta => {
    setProductos (respuesta.data)
    })
}

useEffect(() =>{
  getProductos();
   },[])
  
    return (
      <>
      <div >
       
     <div>
      <Table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Existencia</th>
          </tr>
        </thead>
        <tbody>
          {
            productos.map(producto => {
              return(
                <tr>
                  <td>{producto.nombre}</td>
                  <td>{producto.descripcion}</td>
                  <td>{producto.precio}</td>
                  <td>{producto.existencias}</td>
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

export default Productos