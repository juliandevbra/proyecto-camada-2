import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PokeTypes = () => {

  const url = 'https://pokeapi.co/api/v2/type'
  const [types, setTypes] = useState([])

  useEffect(() => {
    // fetch(url)
    // .then(res => res.json())
    // .then(data => setTypes(data.results))
    // .catch(err => console.log(err))
    axios.get(url)
    .then(res => setTypes(res.data.results))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className='select-poke'>
       {types.map((type, index) => 
        <p key={index} className='poke-name'>
         {type.name}
        </p>)}
    </div>
  )
}

export default PokeTypes