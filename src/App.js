import { useState } from "react";

function App() {
  //State (état, données)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" },
  ]);

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
    </div>
  );
}

export default App;
