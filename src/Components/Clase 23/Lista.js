import React from 'react'
import useFetch from './useFetch'

const Lista = ({search}) => {

    const mlUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${search}`
    const listaML = useFetch(mlUrl)

  return (
    <div>
        {listaML.data.results.map(item => 
            <div>
                <h3>{item.title}</h3>
                <img src={item.thumbnail} alt=''/>
            </div>
        )}
        </div>
  )
}

export default Lista