import React from 'react'
import './Layout.css'

const Layout = ({children}) => {
  return (
    <div>
        <section className='header'> Header </section>
            {children}
        <section className='footer'> Footer </section>
    </div>
  )
}

export default Layout