import React, { Component } from "react";
import Swal from 'sweetalert2'
import './MyLittleForm.css';
import pony from './img/pony.png'

class MyLittleForm extends Component {
    state = { 
        name: "", 
        error: false 
    };
    
    handleChange = (event) => {
        this.setState({
            name: event.target.value,
            error: false
        });
        console.log(event);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.name === "")
            this.setState({ error: true});
        else {
            Swal.fire('Hello ' + this.state.name );
            this.setState({ name: ''});
        }
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <img src={pony} alt="Pony" />
                <label>Name</label>
                <input
                    name='name'
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <input name='age' type="number" />

                {this.state.error && <span>This field is required</span>}
                <button type="submit">Submit!</button>
            </form>
            );
        }
}

export default MyLittleForm;