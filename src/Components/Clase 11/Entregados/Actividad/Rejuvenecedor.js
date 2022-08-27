import { useState } from 'react'
import Swal from 'sweetalert2'
import React from 'react'
import './actividad.css'


const Rejuvenecedor = () => {
    
    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState(Number)

    const cambioNombre = (event) =>{
        setNombre(event.target.value)
    }

    const cambioEdad = (event) =>{
        setEdad(event.target.value)
    }

    const enviarFormulario = (event) => {
        event.preventDefault()
        if(nombre === ''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El campo de nombre es obligatorio',
              })
            return
        }
        if(edad <= 0){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Tienes que tener una edad real',
              })
            return
        }

        const mensaje = edad-10 <= 0 ? 
            Swal.fire(`Noooo! ${nombre} volviste muy atras y ahora no existes 😥`) : 
            Swal.fire(`En hora buena ${nombre}, volviste en el tiempo y ahora tienes ${edad - 10} años 👌😁`)
        setTimeout(mensaje, 5000);
        setNombre('')
        setEdad(0)
    }

    
  return (
    <form onSubmit={enviarFormulario} styleClass=''>
        <fieldset>
            <section>
                <label>Nombre</label>
                <input type='text' onChange={cambioNombre} value={nombre}></input>             
            </section>
            <section>
                <label>Edad</label>
                <input type='number' onChange={cambioEdad} value={edad}></input>
            </section>
            <section>
                <button type="submit">Enviar</button>
            </section>
            
        </fieldset>
    </form>
    
  )
}

export default Rejuvenecedor