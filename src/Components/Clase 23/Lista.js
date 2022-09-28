import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'

const Lista = ({search}) => {
    const [loading, setLoading] = useState(true)
    
    const mlUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${search}`
    const listaML = useFetch(mlUrl)

  setTimeout(() => setLoading(false), 1000)
    console.log(listaML.data?.results)
    return (
      
    <div>
      { loading 
      ? 
      'Cargando' 
      :
      listaML?.data?.results.map(item => 
        <div>
            <h3>{item.title}</h3>
            <img src={item.thumbnail} alt=''/>
        </div>
    )
      }
    </div>
  )
}

export default Lista