import React, { useEffect, useState } from 'react';
import { getFromEndpoint } from "./util/pokeAPICache"
import './App.css';

import Foo from './Foo';
import Poke from './Poke';

function App() {
  const [pokemonElement, setPokemonElement] = useState(null);

  // componentDidMount
  useEffect(() => {
    getFromEndpoint("pokemon", "pikachu")
      .then(pokemon => {
        setPokemonElement(<Poke pokemon={ pokemon } name={ pokemon.name } img={ pokemon.sprites.front_default } />)
      })
  }, []);
  
  return (
    <div className="App">
      <Foo />
      { pokemonElement }
    </div>
  );
}

export default App;
