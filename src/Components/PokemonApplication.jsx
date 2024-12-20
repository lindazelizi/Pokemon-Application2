import React, { useEffect } from 'react'
import { useState } from 'react'
import Pokemon from './Pokemon'

function PokemonApplication() {

  const [myPokemonData, setmyPokemonData] = useState([])
  
  const myPokemonDataList = []

  const [pokemon, setpokemon] = useState(null)

  const [pokemonInfo, setpokemonInfo] = useState(null)

  myPokemonData.forEach((Pokemon, index) => {
    // myPokemonDataList.push(<li key={index}>{Pokemon.name}</li>)
    myPokemonDataList.push(<option key={index} value={Pokemon.name}>{Pokemon.name}</option>)
  })

  useEffect(() => {
   fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(res => res.json())
    .then(data  => setmyPokemonData(data.results))

  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    // alert(`The name you entered was: ${pokemon}`)
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(res => res.json())
    .then(data  => setpokemonInfo(data))
  }
  return (
   <>
    {/* <ul>
     {myPokemonDataList}
      </ul> */}
      <form onSubmit={handleSubmit}>
      <label for="pokemon">Välj Pokemon</label>
      <select id="pokemon" name='Pokemon' onChange={(event) => {
        setpokemon(event.target.value)
      }}>
      {myPokemonDataList}
      </select>
      <input type="submit"></input>
      </form>
      {pokemonInfo && 
      <div>
        <Pokemon pokemonInfo={pokemonInfo}/>
      {/* <h1>{pokemonInfo?.name}!</h1>
      <img src={pokemonInfo?.sprites?.front_default} alt="" />
      <p>Jag väger {pokemonInfo?.weight}kg</p>
      <p>Jag är såhär lång {pokemonInfo?.height}m</p>
      <p>Jag är typen {pokemonInfo?.types[0].type.name}</p> */}
      
      </div>
      }
      </>
  )
  
}


export default PokemonApplication