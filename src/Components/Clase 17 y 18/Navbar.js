import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  const [search, setSearch] = useState('')

  const searchPoke = (event) => {
    event.preventDefault()
    navigate(`pokemon/${search}`)
  }

  return (
    <nav className='header-fixed'>
      <img src='/assets/pokemon.png' alt='' width={100}/>
      <Link to='/'><h3>Home</h3></Link>
      <Link to='/pokemon'><h3>PokeList</h3></Link>
      <Link to='/type'><h3>Tipos</h3></Link>

      <form>
        <input type="text" value={search} 
          onChange={(event) => setSearch(event.target.value)}
        />
        <button onClick={searchPoke}>🔍</button>
      </form>

    </nav>
  )
}

export default Navbar