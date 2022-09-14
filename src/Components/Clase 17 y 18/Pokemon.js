import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './pokedex.css'

const Pokemon = ({loading, setLoading}) => {
    
    const params = useParams()

    const url = `https://pokeapi.co/api/v2/pokemon/${params.pokeName.toLowerCase()}`
    const [poke, setPoke] = useState({})

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
          setPoke(data)
          setTimeout(() => {
            setLoading(false)
          }, 1000)
          
        })
        .catch(err => console.log(err))
    }, [url])

  return (
    <div className='poke-info'>
    {loading ?
    <img src='/pokemongo.gif' alt='' style={{margin: 'auto'}}/>
    :
    <div className='poke-stats'>
      <h3>{poke.name}</h3>
      <img src={poke.sprites?.front_default} alt=''/>
    </div>
}
    </div>
  )
}

export default Pokemon