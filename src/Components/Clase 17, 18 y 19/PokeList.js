import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './pokedex.css'

const PokeList = ({setLoading}) => {

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0'
    const [list, setList] = useState([])

    // Ejemplo con then
    useEffect(() =>{
        // fetch(url)
        // .then(res => res.json())
        // .then(data => setList(data.results))
        // .catch(err => console.log(err))
        axios.get(url)
        .then(res => setList(res.data.results))
        .catch(err => console.log(err))
    }, [])

    // Ejemplo con async/await & try/catch
    useEffect(() =>{
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setList(data.results)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [])

  return (
    <>
        <div className='select-poke'>
            {list.map((poke, index) => 
                <Link key={index} to={`${poke.name}`}> 
                    <p onClick={() => setLoading(true)} className='poke-name'>{poke.name}</p >
                </Link>
            )}
        </div>
        <Outlet/>
    </>
  )
}

export default PokeList