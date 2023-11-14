import React, { useEffect, useState } from 'react'
//import { collection, addDoc, onSnapshot } from "firebase/firestore";
import './Productos.css'
//import db from '../../config/dbFirebase';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Productos1() {
  //para guardar el listado de reservas
  const[productos1, setProductos1] = useState([]);
  //este guarda los valores del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    existencias: ''
  })

  const  onSave = async (event) =>{
    event.preventDefault();//mantiene la pantalla en el estado que se encuentra y no la pantalla
    console.log(formData);

   await fetch("https://bcknd-tarea5.onrender.com/productos/crearProd", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
  }).then(resp => resp.json() ).then(result =>  console.log(result))

    alert('Producto registrado con exito!')
    
  }

  const onChange = (e) =>{
      setFormData({
        ...formData, [e.target.name]: e.target.value
      })
      console.log(formData);
  }


  return (
    <>
    <div >
    <div className='form-contenedor1'>
   <Form onSubmit={onSave} className='form-reserva1'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Nombre</Form.Label>
        <Form.Control type="string" value={formData.nombre} onChange={onChange} name='nombre' placeholder="Escribe nombre del producto" />
       
        <Form.Label>Descripcion</Form.Label>
        <Form.Control type="string" value={formData.descripcion} onChange={onChange} name='descripcion' placeholder="Describe el producto" />
        <Form.Label>Precio</Form.Label>
        <Form.Control type="number" value={formData.precio}  onChange={onChange} name='precio'  />
        <Form.Label>Existencias</Form.Label>
        <Form.Control type="number" value={formData.existencias} name='existencias'  onChange={onChange}/>
        
        <Form.Text className="text-muted">
         La informacion registrada es privada y no sera compartida o reutilizada.
        </Form.Text>
      </Form.Group>
    
      <Button variant="primary" type="submit">
        Guardar
      </Button>
    </Form>
   </div>
   
   
    </div>
    </>
  )
}

export default Productos1