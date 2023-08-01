import { useState } from "react";

export default function FruitForm({ handleAdd }) {
  //-------------STATE
  const [nouveauFruit, setNouveauFruit] = useState("");

  //----------COMPORTEMENT
  const handleSubmit = (event) => {
    event.preventDefault();

    const id = new Date().getTime();
    const nom = nouveauFruit;
    const fruitAAjouter = { id, nom };

    handleAdd(fruitAAjouter);
    setNouveauFruit("");
  };

  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
  };

  //-----------AFFICHAGE (render)

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <input
        value={nouveauFruit}
        type="text"
        placeholder="Ajouter un fruit"
        onChange={handleChange}
      />
      <button>Ajouter + </button>
    </form>
  );
}
