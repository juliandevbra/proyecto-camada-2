import {Component} from 'react'

class ClassComponent extends Component {
    render(){
        return(
            <>
                Componente de {this.props.titulo}
            </>
        )
    }
}

export default ClassComponent