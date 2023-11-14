import React from 'react'
import { productos, bebidas, postres } from './data'
import { Card, Button } from 'react-bootstrap'
import './menu.css'

function Menu() {
  return (
    <>
            <h1 className='h1Menu'>Platos ricos y típicos:</h1>

      <div className='menu-contenedor'>
         

        <div className='productos-contenedor'>
          {productos.map((producto, index) => {
            return (
              <Card className='menu-card' style={{ width: "18rem" }} key={index}>
                <Card.Img variant="top" src={producto.img} />
                <Card.Body>
                  <Card.Title>{producto.nombre}</Card.Title>
                  <Card.Text>
                   {producto.descripcion}
                  </Card.Text>
                  <Button variant="primary">{producto.precio}</Button>
                </Card.Body>
              </Card>
            )
          })

          }
        </div>
        <h1 className='h1Menu'>Postres típicos:</h1>

        <div className='productos-contenedor'>
          {postres.map((postre, index) => {
            return (
              <Card className='menu-card' style={{ width: "18rem" }}>
                <Card.Img variant="top" src={postre.img} />
                <Card.Body>
                  <Card.Title>{postre.nombre}</Card.Title>
                  <Card.Text>
                   {postre.descripcion}
                  </Card.Text>
                  <Button variant="primary">{postre.precio}</Button>
                </Card.Body>
              </Card>
            )
          })

          }
        </div>
        <h1 className='h1Menu'>Bebidas típicas:</h1>

        <div className='productos-contenedor'>
          {bebidas.map((bebidas, index) => {
            return (
              <Card className='menu-card' style={{ width: "18rem" }}>
                <Card.Img variant="top" src={bebidas.img} />
                <Card.Body>
                  <Card.Title>{bebidas.nombre}</Card.Title>
                  <Card.Text>
                   {bebidas.descripcion}
                  </Card.Text>
                  <Button variant="primary">{bebidas.precio}</Button>
                </Card.Body>
              </Card>
            )
          })

          }
        </div>
      </div>

    </>
  )
}

export default Menu

