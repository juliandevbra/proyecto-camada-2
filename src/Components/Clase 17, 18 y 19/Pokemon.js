import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './pokedex.css'
import Swal from 'sweetalert2'
import axios from 'axios'

const Pokemon = ({loading, setLoading}) => {
    
    const params = useParams()

    const url = `https://pokeapi.co/api/v/pokemon/${params.pokeName.toLowerCase()}`
    const [poke, setPoke] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
      // Ejemplo con fetch y then
        // fetch(url)
        // .then(res => {
        //   return res.json()
        // })
        // .then(data => {
        //   setPoke(data)
        //   setTimeout(() => {
        //     setLoading(false)
        //   }, 1000)
        // })
        // .catch(err => {
        //   Swal.fire({
        //     icon: 'error',
        //     title: 'Oops...',
        //     text: 'Something went wrong!',
        //     footer: '<a href="">Why do I have this issue?</a>'
        //   })
        // })

        // Ejemplo con axios, con async/await y con try&catch
        try {
          const fetchData = async () => {
            const response = await axios.get(url) 
            setPoke(response.data)
            setTimeout(() => {
              setLoading(false)
            }, 1000)
          }
          fetchData()
        } catch (err) {
            console.log(err)
        }

    }, [url, setLoading])


  
  return (
    <div className='poke-info'>
      {error && <p>{error}</p>}
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