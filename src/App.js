import { useRef, useState } from "react";

function App() {
  //State (état, données)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" },
  ]);
  // const inputRef = useRef(); //methode 1
  const [nouveauFruit, setNouveauFruit] = useState("");

  //Comportements
  const handleDelette = (id) => {
    console.log(id);
    //1. copie mon state
    const fruitsCopy = fruits.slice();

    //2. manipuler la copie de mon state
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);

    //3. modifier mon state avec le setter
    setFruits(fruitsCopyUpdated);
  };

  const handleSubmit = (Event) => {
    Event.preventDefault();
    const fruitsCopy = [...fruits];
    const id = new Date().getTime();
    const nom = nouveauFruit;
    fruitsCopy.push({ id: id, nom: nom });
    setFruits(fruitsCopy);
    setNouveauFruit("");
  };

  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
  };

  //Affichage (render)
  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => {
          return (
            <li key={fruit.id}>
              {fruit.nom}
              <button onClick={() => handleDelette(fruit.id)}>X</button>
            </li>
          );
        })}
      </ul>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={nouveauFruit}
          type="text"
          placeholder="Ajouter un fruit"
          onChange={handleChange}
        />
        <button>Ajouter + </button>
      </form>
    </div>
  );
}

export default App;

//Gestion du formulaire
//1. creation du formulaire
//2. soumission du formulaire (onSubmit handleSubmit)
//3. collecte des données
//3a. methode 1 : documetGetElementByID "React" (useRef)
//3b. methode 2 :  synchro descendante ascendante (onChange handleChange)
