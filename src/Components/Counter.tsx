// можно сделать вертикальный передавая булевский пропс
import { useState } from "react";
import '../styles/counter.scss'
interface counterProps {
    maxCounter: number;
    isHorisontal: boolean;
}
export default function Counter({ maxCounter, isHorisontal }: counterProps) {
  const [counter, setCounter] = useState(1);
  console.log("maxCounter = ", maxCounter, "; isHorizontal = ", isHorisontal);
  const incrementCounter = () => {
    if (counter < maxCounter) {
      setCounter(counter + 1);
    }
  };
  const decreaseCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <div className="counter">
      <button className="counter__less" onClick={decreaseCounter}>
        <img src="/arrow1.svg" alt="" />
      </button>
      <span className="counter__value">{counter}</span>
      <button className="counter__more" onClick={incrementCounter}>
        <img src="/arrow1.svg" alt="" />
      </button>
    </div>
  );
}
