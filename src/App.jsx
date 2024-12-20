import { useState } from 'react'
import './App.css'
import PokemonApplication from './Components/PokemonApplication'

function App() {
  const [visaPokemon, setvisaPokemon] = useState(false)
  const toggle = () => {
    setvisaPokemon(!visaPokemon)
  }
  return (
    <>
      <div className="container">
        <h1>Välkommen till min Pokemon applikation</h1>
        <p>I den här pokemon appen kan du se pokemons!</p>
        <button onClick={toggle}>Start Pokemon App</button>
      </div>
      {visaPokemon &&
        <PokemonApplication />
      }
    </>
  )
}

export default App
