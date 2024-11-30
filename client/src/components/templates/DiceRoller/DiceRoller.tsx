import { useState } from "react";
import { randomBetweenOneAndMax } from "../../../utils/utils";
const DiceRoller = () => {

    const [result, setResult] = useState(0);
    const handleDX = (x:number) => {
        const outcome = randomBetweenOneAndMax(x);
        setResult(outcome);
    }
  return (
    <>
      <h3>Dice Roller</h3>
      <a onClick={() => handleDX(4)}>D4</a> <br />
      <a onClick={() => handleDX(6)}>D6</a> <br />
      <a onClick={() => handleDX(8)}>D8</a> <br />
      <a onClick={() => handleDX(10)}>D10</a> <br />
      <a onClick={() => handleDX(12)}>D12</a> <br />
      <a onClick={() => handleDX(20)}>D20</a> <br />
      <p>{result}</p>
    
    </>
  );
};

export default DiceRoller;
