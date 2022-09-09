import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import pokedex from '../../pokedex.json'
import './pokedex.css'

const PokeList = () => {

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0'
    const [list, setList] = useState([])

    // Ejemplo con then
    // useEffect(() =>{
        // fetch(url)
        // .then(res => res.json())
        // .then(data => setList(data.results))
    //     .catch(err => console.log(err))
    // }, [])

    // Ejemplo con async/await & try/catch
    useEffect(() =>{
        try {
            const fetchData = async () => {
                const response = await fetch(url)
                const data = await response.json()
                setList(data.results)
            }
            fetchData()
        }
        catch (err) {
            console.log(err)
        }
    }, [])

  return (
    <>
        <div className='select-poke'>
            {list.map((poke, index) => 
                <Link key={index} to={`${poke.name}`}> 
                    <p className='poke-name'>{poke.name}</p >
                </Link>
            )}
        </div>
        <Outlet/>
    </>
  )
}

export default PokeList