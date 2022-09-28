import React from 'react'
import { useGlobalStates } from './Context'

const LoboEstepario = () => {

  const { salario } = useGlobalStates()

  return (
    <div className='lobo-estepario'>
        <img className='lobo' src='/lobo.png' alt='lobo'/>
        <h3>Total por semestre: {salario*6}</h3>
    </div>
  )
} 

export default LoboEstepario