import React from 'react'
import './Layout.css'

const Layout = (props) => {
  return (
    <>
        <div className='header'>
            <h1>Header</h1>
        </div>
        
            {props.children}

        <div className='footer'>
            <h2>Footer</h2>
        </div>
    </>
  )
}

export default Layout