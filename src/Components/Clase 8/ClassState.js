import React, { Component } from 'react'

export default class ClassState extends Component {
    constructor(props) {
        super(props);

        //Ejemplo 1

        // this.state = {
        //   contador: 0
        // }
        // this.incrementar = this.incrementar.bind(this);
        
        //Ejemplo 2
        this.state = {value: 'valor String'};

        this.changeInput = this.changeInput.bind(this);
    }

    incrementar() {
        this.setState({value: this.state.value + 1});
    }


     changeInput(event) {
        this.setState({value: event.target.value});
        console.log(event);
     }

  render() {
    return (
      <div>        
        {/* Ejemplo 1 */}
        {/* <h1>{this.state}</h1>
        {console.log(this.state)}
        <button onClick={this.incrementar}>Incrementar</button> */}


        {/* Ejemplo 2 */}
        {console.log(this.state.value)}
        {this.state.value}
        <input type="text" onChange={this.changeInput} />
    </div>
    )
  }
}



