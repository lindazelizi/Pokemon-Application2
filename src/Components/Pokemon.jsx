import React from 'react'

function Pokemon({pokemonInfo}) {
  return (
    <div><h1>{pokemonInfo?.name}!</h1>
    <img src={pokemonInfo?.sprites?.front_default} alt="" />
    <p>Jag väger {pokemonInfo?.weight}kg</p>
    <p>Jag är såhär lång {pokemonInfo?.height}m</p>
    <p>Jag är typen {pokemonInfo?.types[0].type.name}</p></div>
    
  )
}

export default Pokemon