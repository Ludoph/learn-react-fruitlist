export default function Fruit({ fruitInfo, delFruitClick, addFavClick }) {
  //State
  // const fruitInfo = props.fruitInfo;
  // const onFruitDelete = props.onFruitDelete;

  //Comportements

  //Affichage
  return (
    <li>
      {fruitInfo.nom}
      <button onClick={addFavClick}>❤️</button>
      <button onClick={delFruitClick}>❌</button>
    </li>
  );
}
