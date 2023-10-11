function ButtonContainer({ handleClick, pokemonList }) {
  return (
    <div>
      {pokemonList.map((pokemons, index) => (
        <button key={pokemons.name} onClick={() => handleClick(index)}>
          {pokemons.name}
        </button>
      ))}
    </div>
  );
}

export default ButtonContainer;
