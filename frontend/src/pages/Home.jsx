import React from 'react'
import {servicioData} from '../.././src/components/dataPage'
import Conocenos from '../components/conocenos/Conocenos'
import Presentacion from '../components/presentacionHome/Presentacion'

function Home() {
  return (
    <>
    <Presentacion />
    <Conocenos {...servicioData} />
    </>
  )
}

export default Home