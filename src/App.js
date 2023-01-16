import "./styles.css";

import { useState } from "react";
import AnimalShow from "./components/AnimalShow";

export default function App() {
  const [animals, setAnimals] = useState([]);

  function getAnimal() {
    const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
    return animals[Math.floor(Math.random() * animals.length)];
  }

  const handleClick = () => {
    setAnimals([...animals, getAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow value={animal} key={index} />;
  });

  return (
    <div className="App">
      <button onClick={handleClick}>Add Animal</button>

      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}
