function ButtonContainer({ handleClick, pokemonIndex, pokemonList }) {
  return (
    <div>
      {pokemonIndex > 0 ? (
        <button onClick={handleClick}>Précédent</button>
      ) : null}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={handleClick}>Suivant</button>
      ) : null}
    </div>
  );
}

export default ButtonContainer;
