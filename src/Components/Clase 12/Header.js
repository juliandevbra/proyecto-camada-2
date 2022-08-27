import React from 'react'

const Header = ({pokeSel}) => {

  
  const getPokemon = () => {
    if (pokeSel.id?.toString()?.length === 1) return `00${pokeSel.id}`
    if (pokeSel.id?.toString()?.length === 2) return `0${pokeSel.id}`
    if (pokeSel.id?.toString()?.length === 3) return `${pokeSel.id}`
}

  return (
    <div>
      <img id="pokemonImg" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getPokemon()}.png`} alt='' />
        <h1>Pokemon seleccionado: {pokeSel.name}</h1>
          <p>Tipo de pokemon: {pokeSel.type[0]}</p>
          <br/>
    </div>
  )
}

export default Header