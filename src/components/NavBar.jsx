function ButtonContainer({ handleClick }) {
  return (
    <div>
      <button onClick={handleClick}>Précédent</button>
      <button onClick={handleClick}>Suivant</button>
    </div>
  );
}

export default ButtonContainer;
