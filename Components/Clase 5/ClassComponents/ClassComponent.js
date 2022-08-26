import { Component } from "react";


class ClassComponent extends Component {
    render() {
        return (
            <>
                <h2>Esto es un {this.props.titulo}</h2>
            </>
        )
    }
}

export default ClassComponent;