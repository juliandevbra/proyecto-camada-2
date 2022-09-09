import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './pokedex.css'

const Pokemon = () => {
    
    const params = useParams()

    const url = `https://pokeapi.co/api/v2/pokemon/${params.pokeName.toLowerCase()}`
    const [poke, setPoke] = useState({})

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setPoke(data))
        .catch(err => console.log(err))
    }, [url])

  return (
    <div className='poke-info'>
      <h3>{params.pokeName}</h3>
      <h3>{poke.name}</h3>
      <img src={poke.sprites?.front_default} alt=''/>
    </div>
  )
}

export default Pokemon