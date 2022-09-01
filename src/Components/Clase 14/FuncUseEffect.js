import React, { useEffect, useState } from 'react'

const FuncUseEffect = () => {
    const [name, setName] = useState('Pablo')
    const [count, setCount] = useState(0)
 
    useEffect(() => {
      console.log('El componente de función se actualizó')
    }, [count])

  return (
    <div>
      <h1>Componente de función</h1>
        Hola {name}!
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>X</button>
    </div>
  )
}

export default FuncUseEffect

// Casos para montaje y desmontaje
// useEffect(() => {
//   console.log('El componente de función se montó')
//   return () => {
//     console.log('El componente de función se desmontó')
//   }
// }, [])