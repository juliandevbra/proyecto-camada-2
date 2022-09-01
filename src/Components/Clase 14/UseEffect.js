import {useState, useEffect} from 'react'
import './UseEffect.css'

const UseEffect = () => {
    // const url = 'https://dog.ceo/api/breeds/image/random'
    // const url = 'https://api.thecatapi.com/v1/images/search'
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0'

    const [imagen, setImagen] = useState('')
    // const [lista, setLista] = useState()
    const [cambio, setCambio] = useState(false)

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data.results))
    }, [cambio])

    return (
        <div>
            <img src={imagen} alt='' style={{width: 300}}/>
            {/* {lista.map(poke => <li>{poke.name}</li>)} */}
            <button onClick={() => setCambio(!cambio)}  className='boton'>MIAU</button>
        </div>
    )
}

export default UseEffect