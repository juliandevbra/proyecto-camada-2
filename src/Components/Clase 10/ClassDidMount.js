import React, { Component } from 'react'

export default class ClassDidMount extends Component {
    constructor(props){
        super(props)
        this.state = {
            contador: 0,
        }
        console.log('se ejecutó el constructor')
        this.incrementar = this.incrementar.bind(this);
    }
    incrementar() {
        this.setState({contador: this.state.contador + 1});
    }
    
    componentDidMount(){
        console.log('El componente está montado')
    }

    componentDidUpdate(){
        console.log('Componente actualizado')
    }

    componentWillUnmount(){
        alert('Me destruiste :(')
        console.log('el componente se desmontó')
    }
 
  render() {
      console.log('Se ejecutó el render')
    return (
        <div>
            <h1>{this.state.contador}</h1>
            <button onClick={this.incrementar}>Incrementar</button>
        </div>
    )
  }
}
