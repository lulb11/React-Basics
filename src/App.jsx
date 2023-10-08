import PokemonCard from "./components/PokemonCard";

function App() {
  let bulba = pokemonList[0];
  return (
    <div>
      <PokemonCard pokemon={bulba} />
    </div>
  );
}

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

export default App;
