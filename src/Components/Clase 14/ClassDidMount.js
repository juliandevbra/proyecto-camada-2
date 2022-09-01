import React, { Component } from 'react'

export default class ClassDidMount extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "Carmela"
        }
    }
        
    componentDidMount(){
        console.log(3, 'El componente de clase está montado')
    }

    componentDidUpdate(){
        console.log(4, 'Componente actualizado')
    }

    componentWillUnmount(){
        console.log(5, 'el componente se desmontó')
    }

  render() {
    return (
      <div>
        <h1>Componente de clase</h1>
        Hola {this.state.name}
      </div>
    )
  }
}
