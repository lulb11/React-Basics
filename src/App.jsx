import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const handleClick = (event) => {
    if (
      event.target.textContent === "Suivant" &&
      pokemonIndex !== pokemonList.length - 1
    ) {
      setPokemonIndex(pokemonIndex + 1);
    } else if (event.target.textContent === "Précédent" && pokemonIndex !== 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  let actualPokemon = pokemonList[pokemonIndex];

  return (
    <div>
      <PokemonCard pokemon={actualPokemon} />
      <button onClick={handleClick}>Précédent</button>
      <button onClick={handleClick}>Suivant</button>
    </div>
  );
}

export default App;
