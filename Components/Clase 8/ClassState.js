import React from 'react'

export default class ClassState extends React.Component {
    constructor(props) {
        super(props);

        //Ejemplo 1
        // this.state = {
        //     contador: 0,
        // };

        // this.incrementar = this.incrementar.bind(this);
        
        //Ejemplo 2
        this.state = {value: 'valor String'};

        this.changeInput = this.changeInput.bind(this);
    }

    // incrementar() {
    //     this.setState({ contador: this.state.contador + 1 });
    //     console.log(this.state.contador);
    // }

     changeInput(event) {
        this.setState({value: event.target.value});
        console.log(event);
     }

  render() {
    return (
      <div>        
        {/* Ejemplo 1 */}
        {/* <h1>{this.state.contador}</h1>
        <button onClick={this.incrementar}>Incrementar</button> */}


        {/* Ejemplo 2 */}
        {console.log(this.state.value)}
        <h1>{this.state.value}</h1>
        <input type="text" onChange={this.changeInput}  />
    </div>
    )
  }
}



