import { useState } from "react";

function App() {
  //State (état, données)
  const [compteur, setCompteur] = useState(1);

  //Comportements
  const handleClick = () => {
    //alert("handleClick");
    setCompteur(compteur + 1);
  };

  //Affichage (render)
  return <div></div>;
}

export default App;
