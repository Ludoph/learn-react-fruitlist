export default function Fruit({ fruitInfo, onFruitDelete }) {
  //State
  // const fruitInfo = props.fruitInfo;
  // const onFruitDelete = props.onFruitDelete;

  //Comportements

  //Affichage
  return (
    <li>
      {fruitInfo.nom}
      {""}
      <button onClick={() => onFruitDelete(fruitInfo.id)}>X</button>
    </li>
  );
}
