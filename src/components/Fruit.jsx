export default function Fruit(props){
    //State
    const fruitInfo = props.fruitInfo;
    const onFruitDelete = props.onFruitDelete;

    //Comportements

    //Affichage
    return (
        <li key={fruitInfo.id}>
        {fruitInfo.nom}{""}
        <button onClick={() => props.onFruitDelete(fruitInfo.id)}>X</button>
        </li>
    )
}