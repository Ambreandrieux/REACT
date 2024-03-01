import React, { useState } from 'react';

const CounterComponent = () => {
  // Utilisez le hook useState pour créer une variable d'état 'count' initialisée à 0
  const [count, setCount] = useState(0);

  // Fonction qui sera appelée à chaque clic sur le bouton, augmentant le compteur de 1
  const incrementCounter = () => {
    setCount(count + 1);
  };

  // Rendu du composant avec le bouton et l'affichage du compteur
  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={incrementCounter}>Incrémenter</button>
    </div>
  );
};

export default CounterComponent;
