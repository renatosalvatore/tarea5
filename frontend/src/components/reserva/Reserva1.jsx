import React, { useEffect, useState } from 'react'
//import { collection, addDoc, onSnapshot } from "firebase/firestore";
import './reserva1.css'
//import db from '../../config/dbFirebase';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Reserva1() {
  //para guardar el listado de reservas
  const[reservas, setReservas] = useState([]);
  //este guarda los valores del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    fono: '',
    fecha: '',
    hora: '',
    comensales: '',
    email: ''
  })

  const  onSave = async (event) =>{
    event.preventDefault();//mantiene la pantalla en el estado que se encuentra y no la pantalla
    console.log(formData);

   await fetch("http://localhost:3002/reservas/crearReserv", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
  }).then(resp => resp.json() ).then(result =>  console.log(result))

    alert('Felicitaciones, ya se guardo su reserva con exito!')
    
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
       <Form.Label>Nombre Completo</Form.Label>
        <Form.Control type="string" value={formData.nombre} onChange={onChange} name='nombre' placeholder="Escribe tu nombre y apellidos" />
       
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="PhoneNumber" value={formData.telefono} onChange={onChange} name='telefono' placeholder="Escribe tu telefono" />
        <Form.Label>Fecha de Reservacion</Form.Label>
        <Form.Control type="date" value={formData.fecha}  onChange={onChange} name='fecha'  />
        <Form.Label>Hora de Reservacion</Form.Label>
        <Form.Control type="time" value={formData.hora} name='hora'  onChange={onChange}/>
        <Form.Label>Comensales</Form.Label>
        <Form.Control type="string" name='comensales' value={formData.comensales} onChange={onChange} placeholder="Escribe numero de personas" />
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' value={formData.email} onChange={onChange} placeholder="Escribe tu email" />

        <Form.Text className="text-muted">
         Tu informacion es privada y no sera compartida o reutilizada.
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

export default Reserva1