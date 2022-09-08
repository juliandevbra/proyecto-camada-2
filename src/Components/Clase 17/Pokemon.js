import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Pokemon = () => {


    const params = useParams()

    const url = `https://pokeapi.co/api/v2/pokemon/${params.pokeName.toLowerCase()}`
    const [poke, setPoke] = useState({})

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setPoke(data))
    }, [url])

  return (
    <div>
        <h2>{params.pokeName}</h2>
        <h2>{poke.name}</h2>
        <img src={poke.sprites?.front_default} alt=''/>
    </div>
  )
}

export default Pokemon