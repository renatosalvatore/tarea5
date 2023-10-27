import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import '../singin/singin.css'
import { Button } from 'react-bootstrap';
//import Swal from 'sweetalert';
import './Singup.css'


function Singup() {
    //para guardar el listado de reservas
    const[Singup, setSingup] = useState([]);
    //este guarda los valores del formulario
    const [formData, setFormData] = useState({
      nombre: '',
      apellido: '',
      email: '',
      password: '',
      rol: ''
      
    })
  
    const  onSave = async (event) =>{
      event.preventDefault();//mantiene la pantalla en el estado que se encuentra y no la pantalla
      console.log(formData);
      
      //http://localhost:3002
     await fetch("https://bcknd-tarea5.onrender.com/auth/singUp", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    }).then(resp => resp.json() ).then(result =>  console.log(result))
  
      alert('Felicitaciones, se ha creado el usuario con éxito!')
      
    }
  
    const onChange = (e) =>{
        setFormData({
          ...formData, [e.target.name]: e.target.value
        })
        console.log(formData);
    }
  
   

    return (
        <>
            <div className="wrap">
                <div className="formContent">
                    <Form className='form-reserva' onSubmit={onSave}>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" name='name' value={Form.name} onChange={onChange} placeholder="Escribe tu nombre" />
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" name='lastName' value={Form.lastName} onChange={onChange} placeholder="Escribe tu apellido" />
                       <Form.Label>email</Form.Label>
                        <Form.Control type="email" name='email' value={Form.email} onChange={onChange} placeholder="Escribe tu correo electronico" />
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" name='password' value={Form.password} onChange={onChange} placeholder="Escribe contraseña" />
                        
                        <Form.Text className="text-muted">
                            Tu informacion es privada y no sera compartida o reutilizada.
                        </Form.Text>
                        <Button type="submit" className='formButton'>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Singup;
