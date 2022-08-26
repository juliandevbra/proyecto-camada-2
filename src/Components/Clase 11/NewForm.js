import React, { useState } from 'react'
import Swal from 'sweetalert2'

const NewForm = () => {

    const [name, setName] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(name === '')
            setError(true)
        else{
            Swal.fire('Hello ' + name)
            setError(false)
            setName('')
        }
    }

  return (
    <>
        <form onSubmit={handleSubmit} >
            <label>Name</label>
            <input 
                type='text'
                value={name}
                onChange={(event) => setName(event.target.value) }
            /> 
            {error && <span>This field is required</span>}
            <button type='submit'>Submit!</button>   
        </form>
    </>
  )
}

export default NewForm