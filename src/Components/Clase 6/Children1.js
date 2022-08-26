import React from 'react'
import Layout from './Layout'

const Children1 = (props) => {

    

  return (
    <Layout>
        <h1>Children1</h1>
        <ul>
            {props.lista.map(item => {
               return ( 
                <div>
                    <li>{item}</li>
                    <li>{item}</li>
                </div>
               )
            })}
        </ul>
    </Layout>
  )
}

export default Children1