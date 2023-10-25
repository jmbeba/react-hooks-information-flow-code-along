import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const randomChildColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor] = useState(randomChildColor);

  const handleClick = () => {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor);

    const newChildRandomColor = getRandomColor();

    setChildColor(newChildRandomColor);
  };

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childColor} onChangeColor={handleClick} />
      <Child color={childColor} onChangeColor={handleClick} />
    </div>
  );
}

export default Parent;
