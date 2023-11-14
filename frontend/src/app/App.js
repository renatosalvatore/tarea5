import { Routes, Route, } from 'react-router-dom'
import './App.css';
import Home from '../pages/Home';
import Conocenos from '../components/conocenos/Conocenos';
import Menu from '../components/menu/Menu';
import Navegador from '../routes/Navegador';
import Reservas from '../components/reservaciones/Reservas';
import Reserva1 from '../components/reserva/Reserva1';
import Singin from '../components/singin/Singin';
import Productos from '../components/Productos/Productos';
//import Login from '../components/Login/Login'
import Singup from '../components/SingUp/Singup';
import Productos1 from '../components/Productos/Productos1';
//import homeData from '../components/dataPage'
//import {UserContext}  from '../Context/UserContext';
//import {useContext}  from 'react'


function App() {

//const { auth } = useContext(UserContext);

  return (
    <div className="App">
      <Navegador />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Conocenos' element={<Conocenos />} />
        <Route path='/Productos' element={<Productos />} />
        <Route path='/Reservaciones' element={<Reservas />} />
        <Route path='/Reserva1' element={<Reserva1 />} />
        <Route path='/SingUp' element={<Singup/>} />
        <Route path='/Singin' element={<Singin />} />
        <Route path='/Productos1' element={<Productos1 />} />
        <Route path='*' element={<main style={{ padding: "1rem" }}><p>UPS!, esta Página no está disponible!</p></main>} />
      </Routes>

    </div>
  );
}

export default App;
