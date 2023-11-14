import React, { useEffect, useState, useContext } from 'react'
import './singin.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../singin/singin.css'
import { UserContext } from '../../Context/UserContext';
 import { useNavigate } from 'react-router-dom';

function Singin() {
  const {auth, login} = useContext(UserContext);
  const [form, setForm] = useState({
      email: "",
      password: ""
  })

  const navigate = useNavigate();
  
  
  async function onSave(event) {
      event.preventDefault()
      
      //http://localhost:3002
      await  fetch("https://bcknd-tarea5.onrender.com/auth/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
      })
      .then(resp => resp.json())
      .then(result =>  {
        //localStorage.setItem('token', response.data.token )
          login(form.email, result.token, result.rol)
          //Swal.fire("Usuario Loggeado")
          navigate('/Productos')
      }).catch(error =>{
          //Swal.fire(error)
      })

  }

  function onChange(event) {
      setForm({ ...form, [event.target.name]: event.target.value });
  }

  useEffect(() =>{
      if(auth.token){
          navigate('/reservaciones')
      }
  },[])

return(
  <div><div className='form-contenedor2'>
  <Form onSubmit={onSave} className='form-singin'>
     <Form.Group className="mb-3" controlId="formBasicEmail">
      
      
       <Form.Label>Email</Form.Label>
       <Form.Control type="email" name='email' value={Form.email} onChange={onChange} placeholder="Escribe tu email" />
       <Form.Label>Password</Form.Label>
       <Form.Control type="string" value={Form.password} onChange={onChange} name='password' placeholder="Escribe tu password" />
       <Form.Text className="text-muted">
        Tu informacion es privada y no sera compartida o reutilizada.
       </Form.Text>
     </Form.Group>
   
     <Button variant="primary" type="submit">
       Aceptar
     </Button>
   </Form>
  </div></div>
)}

   


export default Singin