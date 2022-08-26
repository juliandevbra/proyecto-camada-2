import React, { Component } from 'react'
import Layout from './Layout'

export default class Hijo2 extends Component {
  render() {
    return (
        <Layout>
           <h1>Carrito de compras</h1> 
           <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>

           </ul>
        </Layout>
    )
  }
}
