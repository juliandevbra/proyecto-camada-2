import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
// import './pokedex.css'
import useFetch from './useFetch'

const PokeList = () => {

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0'
    const pokeList = useFetch(url)
    console.log(pokeList.data.results)
  return (
    <>
        <div className='select-poke'>
            {pokeList.data.results.map((poke, index) => 
                <Link key={index} to={`${poke.name}`}> 
                    <p
                    //  onClick={() => setLoading(true)} 
                     className='poke-name'>{poke.name}</p >
                </Link>
            )}
        </div>
    </>
  )
}

export default PokeList