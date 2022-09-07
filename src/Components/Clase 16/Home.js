import React from 'react'
import NavBar from './NavBar'
import { Outlet, useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

  return (
    <>
        <button onClick={() => navigate(-1)}>Back</button>
        <h1>Home</h1>
        <NavBar/>
        <Outlet/>
    </>
  )
}

export default Home