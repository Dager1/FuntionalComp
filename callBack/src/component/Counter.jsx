import React, { useState, useMemo } from "react";

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [countertwo, setCounterTwo] = useState(0);
  const incrementone = () => {
    setCounterOne(counterOne + 1);
    console.log("counter 1");
  };
  const incrementtwo = () => {
    setCounterTwo(countertwo + 1);
    console.log("counter 2");
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <button onClick={incrementone}>Button 1-{counterOne}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={incrementtwo}>Button 2-{countertwo}</button>
    </div>
  );
}

export default Counter;
