import { useState } from "react";
import bird from "../images/bird.svg";
import cat from "../images/cat.svg";
import cow from "../images/cow.svg";
import dog from "../images/dog.svg";
import gator from "../images/gator.svg";
import heart from "../images/heart.svg";
import horse from "../images/horse.svg";

import "./AnimalShow.css";

function AnimalShow({ value }) {
  const animalMap = { bird, cat, cow, dog, gator, horse };

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="animal-show">
      <img className="animal" src={animalMap[value]} alt={value} />

      <img className="heart" src={heart} alt="like" onClick={handleClick} />
      <p>{count}</p>
    </div>
  );
}
export default AnimalShow;
