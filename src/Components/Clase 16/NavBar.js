import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {

    const navigate = useNavigate()

  return (
    <>
        {/* Ejemplo con Link */}
        <Link to='/'><p>Home</p></Link>
        <Link to='about'><p>About</p></Link>
        <Link to='contacto'><p>Contact</p></Link>

        {/* Ejemplo con useNavigate */}
        <p onClick={() => navigate('/')} >Home</p>
        <p onClick={() => navigate('/about')} >About</p>
        <p onClick={() => navigate('/contacto')} >Contact</p>
    </>
  )
}

export default NavBar