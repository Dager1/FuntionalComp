import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
  }
};

function ReducerClicker() {
  const [count, disPach] = useReducer(reducer, initialState);
  return (
    <div>
      <div>count:{count}</div>
      <button onClick={() => disPach("increment")}>Increment</button>
      <button onClick={() => disPach("decrement")}>Derecement</button>
      <button onClick={() => disPach("reset")}>Reset</button>
    </div>
  );
}

export default ReducerClicker;
