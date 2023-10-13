import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import ButtonContainer from "./components/NavBar";
import { useEffect } from "react";

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
        "https://media.discordapp.net/attachments/1152144653227917350/1162311730249084969/IMG_20231013_101847.jpg?ex=653b7a27&is=65290527&hm=e32b65c592bbdcb2efb18d0805dbe558e1ae2da79557ddf7f66f73686d3fbb19&=&width=367&height=489",
    },
    {
      name: "mew",
    },
  ];
  useEffect(() => {
    alert("hello pokemon trainer:)");
  }, []);
  const handleClick = (index) => {
    setPokemonIndex(index);
    pokemonList[index].name === "pikachu" ? alert("pikachaud") : undefined;
  };

  let actualPokemon = pokemonList[pokemonIndex];

  return (
    <div>
      <PokemonCard pokemon={actualPokemon} />

      <ButtonContainer handleClick={handleClick} pokemonList={pokemonList} />
    </div>
  );
}

export default App;
